"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    analytics: false
  });
  const { t } = useTranslation('privacyPolicy');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setCookiePreferences({ analytics: true });
    }
  }, []);

  const handlePreferencesChange = (type: 'analytics') => {
    const newPreferences = {
      ...cookiePreferences,
      [type]: !cookiePreferences[type]
    };
    setCookiePreferences(newPreferences);
    
    localStorage.setItem('cookieConsent', newPreferences.analytics ? 'accepted' : 'declined');
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 mt-12">{t('title')}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('sections.general.title')}</h2>
          <p className="mb-4">{t('sections.general.content')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('sections.administrator.title')}</h2>
          <p className="mb-4">{t('sections.administrator.content')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('sections.cookies.title')}</h2>
          <p className="mb-4">{t('sections.cookies.intro')}</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <span className="font-semibold">{t('sections.cookies.types.necessary.title')}</span> - {t('sections.cookies.types.necessary.description')}
            </li>
            <li>
              <span className="font-semibold">{t('sections.cookies.types.analytics.title')}</span> - {t('sections.cookies.types.analytics.description')}
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-4">{t('sections.cookies.preferences.title')}</h3>
            <div className="border border-gray-700/50 backdrop-blur-sm bg-gray-900/30 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{t('sections.cookies.preferences.analytics.title')}</p>
                  <p className="text-sm text-gray-400">{t('sections.cookies.preferences.analytics.description')}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={cookiePreferences.analytics}
                    onChange={() => handlePreferencesChange('analytics')}
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('sections.rights.title')}</h2>
          <p className="mb-4">{t('sections.rights.intro')}</p>
          <ul className="list-disc list-inside space-y-2">
            {(t('sections.rights.list', { returnObjects: true }) as string[]).map((right: string, index: number) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('sections.contact.title')}</h2>
          <p className="mb-4">{t('sections.contact.content')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('sections.changes.title')}</h2>
          <p>{t('sections.changes.content')}</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;