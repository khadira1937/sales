import { DM_Sans, Libre_Baskerville, Roboto } from 'next/font/google';

import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--site-body-font'
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--site-display-font'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--site-paragraph-font'
});

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://fast-iptv.tv/#webpage',
      url: 'https://fast-iptv.tv/',
      name: 'Fast IPTV - Zero Buffering, Instant Activation, 37,000+ Channels | FlashStream IPTV',
      description:
        'FlashStream IPTV delivers fast IPTV in the UK with sub-second channel switching, four-region anti-freeze servers, instant activation, 37,000+ live channels, and 198,000+ VOD titles.',
      isPartOf: { '@id': 'https://fast-iptv.tv/#website' },
      inLanguage: 'en-GB'
    },
    {
      '@type': 'WebSite',
      '@id': 'https://fast-iptv.tv/#website',
      url: 'https://fast-iptv.tv/',
      name: 'FlashStream IPTV',
      description:
        "The UK's fastest IPTV service with sub-second channel switching, four-region anti-freeze routing, built-in VPN, and instant activation.",
      inLanguage: 'en-GB'
    },
    {
      '@type': 'Organization',
      '@id': 'https://fast-iptv.tv/#organization',
      name: 'FlashStream IPTV',
      url: 'https://fast-iptv.tv/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fast-iptv.tv/images/flashstream-fast-iptv-logo.webp'
      }
    },
    {
      '@type': 'Product',
      name: 'FlashStream IPTV Subscription',
      description:
        'Fast IPTV in the UK with sub-second channel switching, 37,000+ live channels, 198,000+ on-demand titles, four-region anti-freeze routing, built-in VPN, and instant activation.',
      brand: {
        '@type': 'Brand',
        name: 'FlashStream IPTV'
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '25.99',
        highPrice: '129.99',
        priceCurrency: 'GBP',
        offerCount: '8',
        availability: 'https://schema.org/InStock'
      }
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How fast is channel switching on FlashStream compared to other providers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under one second on supported devices. Our pre-loading system caches streams from channels adjacent to the one you are currently watching, so when you switch, the feed is already partially buffered and ready. Most competing IPTV services take three to five seconds per switch - the difference is immediately noticeable.'
          }
        },
        {
          '@type': 'Question',
          name: 'Will FlashStream actually hold up during Premier League Saturday afternoons?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our infrastructure is specifically engineered for peak sporting demand. Four server regions with automatic load distribution and dynamic capacity scaling ensure that 3 PM Saturday kick-offs, midweek Champions League fixtures, and PPV boxing cards stream without interruption - even when thousands of subscribers are watching simultaneously.'
          }
        },
        {
          '@type': 'Question',
          name: 'What broadband speed do I need for fast IPTV in 4K?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend a consistent 25 Mbps for 4K Ultra HD. Full HD performs well at 15 Mbps, and standard definition works on connections as low as 10 Mbps. Our adaptive bitrate system reads your connection speed in real time and delivers the highest quality your broadband can sustain at any given moment.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does the built-in VPN slow down my IPTV speed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not noticeably. Our VPN is optimised specifically for high-bitrate streaming traffic and introduces negligible overhead. In fact, enabling it often improves real-world speed because it prevents ISP throttling - the net result is faster, not slower, IPTV delivery during peak hours.'
          }
        },
        {
          '@type': 'Question',
          name: 'How quickly do I get access after paying?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Under five minutes. FlashStream's fully automated provisioning system generates your credentials the moment payment clears and sends them directly to your email. Most customers are watching live television within ten minutes of completing their purchase."
          }
        }
      ]
    }
  ]
};

export const metadata = {
  metadataBase: new URL('https://fast-iptv.tv'),
  title: 'Fast IPTV - Zero Buffering, Instant Activation, 37,000+ Channels | FlashStream IPTV',
  description:
    'FlashStream IPTV delivers fast IPTV in the UK with sub-second channel switching, four-region anti-freeze servers, instant activation, 37,000+ live channels, and 198,000+ VOD titles.',
  keywords: [
    'fast iptv',
    'fast iptv uk',
    'zero buffering iptv',
    'anti freeze iptv',
    'flashstream iptv',
    'instant activation iptv',
    '4k iptv uk'
  ],
  alternates: {
    canonical: '/'
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    locale: 'en_GB',
    type: 'website',
    title: 'Fast IPTV - Zero Buffering, Instant Activation, 37,000+ Channels | FlashStream IPTV',
    description:
      'FlashStream IPTV delivers fast IPTV in the UK with sub-second channel switching, four-region anti-freeze servers, instant activation, 37,000+ live channels, and 198,000+ VOD titles.',
    url: 'https://fast-iptv.tv/',
    siteName: 'FlashStream IPTV',
    images: [
      {
        url: 'https://flixtele.fr/wp-content/uploads/2024/06/media-blitz-tv-services-image.webp',
        width: 909,
        height: 879
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fast IPTV - Zero Buffering, Instant Activation, 37,000+ Channels | FlashStream IPTV',
    description:
      'FlashStream IPTV delivers fast IPTV in the UK with sub-second channel switching, four-region anti-freeze servers, instant activation, 37,000+ live channels, and 198,000+ VOD titles.'
  },
  icons: {
    icon: [
      {
        url: 'https://flixtele.fr/wp-content/uploads/2025/07/cropped-favicon-32x32.png',
        sizes: '32x32'
      }
    ],
    apple: 'https://flixtele.fr/wp-content/uploads/2025/07/cropped-favicon-180x180.png'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0e0e0e'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className={`${dmSans.variable} ${libreBaskerville.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
