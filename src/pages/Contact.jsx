import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import Lottie from 'lottie-react';
import cleaningAnimation from '../../cleaning.json';
import celebrationsAnimation from '../../Celebrations Begin.json';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix leaflet's default icon paths (works with Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showCelebration, setShowCelebration] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitForm = () => {
        const payload = { ...formData };
        setShowCelebration(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm();
    };

    function OfficeMarker() {
        return (
            <Marker position={[51.1657, 10.4515]}>
                <Popup>Our Office Location</Popup>
            </Marker>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="max-w-2xl mx-auto text-center font-inter contact-page">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tighter uppercase text-center text-gray-900 mb-6">{t('contact.title')}</h1>
                <p className="text-lg text-gray-600 mb-12 font-normal">
                    {t('contact.subtitle')}
                </p>

                <div className="flex flex-row gap-4 md:gap-8 items-center">
                    {/* Form Section */}
                    <div className="flex-1 min-w-0">
                        <form className="space-y-6 text-left p-4 md:p-6 bg-white rounded-lg shadow-sm" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.name')}</label>
                                <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg font-normal focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" placeholder={t('contact.namePlaceholder')} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.email')}</label>
                                <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg font-normal focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" placeholder={t('contact.emailPlaceholder')} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.message')}</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg font-normal focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" placeholder={t('contact.messagePlaceholder')}></textarea>
                            </div>
                        </form>
                    </div>

                    {/* Animation Section */}
                    <div className="flex-1 flex items-center justify-center animate-move-diagonal">
                        <div className="w-32 sm:w-48 md:w-full md:max-w-sm">
                            <Lottie
                                animationData={cleaningAnimation}
                                loop={true}
                                autoplay={true}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 mb-6">
                    <button
                        type="button"
                        onClick={submitForm}
                        className="w-full bg-[#a3d937] hover:bg-[#92c530] text-white font-bold py-3 rounded-lg transition-colors"
                    >
                        {t('contact.send')}
                    </button>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mb-4">{t('Contact Location') || 'Office Location'}</h2>
                    <p className="text-sm text-gray-500 mb-4">{'Visit us at our office in Germany.'}</p>
                    <div className="w-full p-4 bg-white rounded-lg shadow-sm">
                        {/* Office Location Map */}
                        <div className="h-64 rounded-lg overflow-hidden">
                            <MapContainer center={[51.1657, 10.4515]} zoom={6} className="w-full h-full" scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <OfficeMarker />
                            </MapContainer>
                        </div>
                    </div>

                    {/* Quick Contact Section */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-gray-200 hover:border-[#a3d937] hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                            <p className="text-sm text-gray-600 font-normal">+49 (0) 123 456789</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-gray-200 hover:border-[#a3d937] hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-sm text-gray-600 font-normal">info@novaservice.de</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-gray-200 hover:border-[#a3d937] hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                            <p className="text-sm text-gray-600 font-normal">Berlin, Germany</p>
                        </div>
                    </div>
                </div>
            </div>
            {showCelebration && (
                <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
                    <Lottie
                        animationData={celebrationsAnimation}
                        loop={false}
                        autoplay={true}
                        onComplete={() => setShowCelebration(false)}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            )}
        </div>
    );
};

export default Contact;