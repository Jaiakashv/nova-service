import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">{t('contact.title')}</h1>
                <p className="text-lg text-gray-600 mb-12">
                    {t('contact.subtitle')}
                </p>

                <form className="space-y-6 text-left">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.name')}</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" placeholder={t('contact.namePlaceholder')} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.email')}</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" placeholder={t('contact.emailPlaceholder')} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.message')}</label>
                        <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" placeholder={t('contact.messagePlaceholder')}></textarea>
                    </div>
                    <button className="w-full bg-[#a3d937] hover:bg-[#92c530] text-black font-bold py-3 rounded-lg transition-colors">
                        {t('contact.send')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
