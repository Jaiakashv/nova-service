import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h1>
            <p className="text-lg text-gray-600 mb-8">{t('about.subtitle')}</p>
            <p className="text-gray-600">{t('about.content')}</p>
        </div>
    );
};

export default About;
