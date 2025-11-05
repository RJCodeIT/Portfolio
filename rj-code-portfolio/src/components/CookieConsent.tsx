"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation('cookieConsent');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md p-4 shadow-lg transform transition-transform duration-300 ease-in-out translate-y-0 border-t border-white/5 z-[9999]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          <p>
            {t('mainText')}
          </p>
          <p className="mt-1">
            {t('preferencesText')}{' '}
            <a href="/privacyPolicy" className="text-white font-bold hover:underline transition-colors">
              {t('privacyPolicyLink')}
            </a>.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-300 bg-[#111142] hover:bg-[#161656] rounded-md transition-colors"
          >
            {t('declineButton')}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-[#111142] hover:bg-[#161656] rounded-md transition-colors"
          >
            {t('acceptButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
