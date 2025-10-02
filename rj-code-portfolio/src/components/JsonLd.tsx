'use client';

import { useEffect } from 'react';

export default function JsonLd() {
  useEffect(() => {
    // Dodajemy skrypt JSON-LD do head po załadowaniu strony
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'RJ Code IT',
      'url': 'https://rjcode.pl',
      'logo': 'https://rjcode.pl/logo.png',
      'description': 'Tworzymy nowoczesne strony internetowe, aplikacje webowe i mobilne dostosowane do indywidualnych potrzeb biznesowych.',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'PL'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+48 698 952 035',
        'email': 'rjcodeit@gmail.com',
        'contactType': 'customer service'
      },
      'sameAs': [
        'https://github.com/RJCodeIT',
        'https://www.linkedin.com/company/rj-code'
      ],
      'offers': {
        '@type': 'Offer',
        'itemOffered': [
          {
            '@type': 'Service',
            'name': 'Tworzenie stron internetowych',
            'description': 'Profesjonalne strony internetowe dostosowane do potrzeb biznesowych'
          },
          {
            '@type': 'Service',
            'name': 'Aplikacje webowe',
            'description': 'Zaawansowane aplikacje webowe oparte o React i Next.js'
          },
          {
            '@type': 'Service',
            'name': 'Aplikacje mobilne',
            'description': 'Natywne aplikacje mobilne na iOS i Android z wykorzystaniem React Native'
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      // Usuwamy skrypt przy odmontowaniu komponentu
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
