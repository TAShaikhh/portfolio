'use client';

import { useEffect } from 'react';

const CalendlyBadgeInitializer = () => {
  useEffect(() => {
    // Check if Calendly object is available before initializing
    if (window.Calendly) {
      window.onload = function() {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/shaikh-usa786',
          text: 'Schedule time with me',
          color: '#00a6ed',
          textColor: '#ffffff',
          branding: true,
        });
      };
    } else {
      // If Calendly object is not available, wait for the script to load
      const script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      script?.addEventListener('load', () => {
        window.onload = function() {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/shaikh-usa786',
            text: 'Schedule time with me',
            color: '#00a6ed',
            textColor: '#ffffff',
            branding: true,
          });
        };
      });
    }
  }, []);

  return null;
};

export default CalendlyBadgeInitializer;