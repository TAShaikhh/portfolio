'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function CalendlyScripts() {
  useEffect(() => {
    // Move the inline script to useEffect to ensure it runs on the client
    window.onload = function() {
      // Check if Calendly is loaded before initializing the badge widget
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/shaikh-usa786',
          text: 'Schedule a call',
          color: '#00a6ed',
          textColor: '#ffffff',
          branding: false,
          position: 'bottom',
          buttonStyle: 'floating',
          buttonRounded: true,
          buttonSize: 'compact',
          opacity: 0.9,
        });
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
      {/* The Script component from next/script is already designed for Next.js and handles loading */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="beforeInteractive"/>
      {/* The inline script is moved to useEffect */}
    </>
  );
}