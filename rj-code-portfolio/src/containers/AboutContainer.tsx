'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '../components/ui/Tooltip';
import Button from "../components/ui/Button";
import { technologies } from '../const/techItems';

export default function AboutContainer() {
  const { t } = useTranslation('about');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyWorkWithUsItems = [
    'experiencedTeam',
    'modernTools',
    'customerCentric',
    'endToEnd'
  ];

  return (
    <section id="about" className="relative min-h-screen py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative space-y-20">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {t('whoWeAre')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('whoWeAreDesc')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-20">
          <div className="backdrop-blur-sm rounded-3xl p-10 border border-white/10 bg-white/5 h-full">
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-6 text-white">{t('trustedPartner')}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('trustedPartnerDesc')}
              </p>
            </div>
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 text-white">{t('whyWorkWithUs')}</h3>
              <ul className="space-y-8">
                {whyWorkWithUsItems.map((item) => (
                  <li key={item} className="flex items-start space-x-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-xl text-white mb-2">
                        {t(`whyWorkWithUsItems.${item}.title`)}
                      </h4>
                      <p className="text-gray-400 text-lg">
                        {t(`whyWorkWithUsItems.${item}.desc`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="backdrop-blur-sm rounded-3xl p-10 border border-white/10 bg-white/5 h-full">
            <h3 className="text-3xl font-bold mb-6 text-white">{t('toolsAndTech')}</h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              {t('toolsAndTechDesc')}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-10">
              {technologies.map((tech) => (
                <Tooltip key={tech.key} content={t(`technologies.${tech.key}.description`)}>
                  <div className="flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className={`w-20 h-20 relative ${tech.className}`}>
                      <Image
                        src={tech.icon}
                        alt={t(`technologies.${tech.key}.name`)}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-base font-medium text-gray-300">
                      {t(`technologies.${tech.key}.name`)}
                    </span>
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl mb-8 text-gray-400">
            {t('callToAction')}
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="px-8 py-6 text-lg"
          >
            {t('contactUs')}
          </Button>
        </div>
      </div>
    </section>
  );
}