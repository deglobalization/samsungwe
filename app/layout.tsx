import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "삼성WE내과의원 - 건강검진부터 일반내과 진료까지",
    template: "%s | 삼성WE내과의원"
  },
  description: "경기도 구리시의 전문 내과 의료기관. 건강검진, 심장혈관질환, 초음파/내시경 검사, 신경질환/한방치료까지 종합적인 의료서비스를 제공합니다.",
  keywords: ["삼성WE내과", "구리내과", "건강검진", "심장혈관질환", "초음파검사", "내시경검사", "신경질환", "한방치료", "경기도병원"],
  authors: [{ name: "삼성WE내과의원" }],
  creator: "삼성WE내과의원",
  publisher: "삼성WE내과의원",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://samsungwe.co.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "삼성WE내과의원 - 건강검진부터 일반내과 진료까지",
    description: "경기도 구리시의 전문 내과 의료기관. 최신 의료장비와 전문 의료진이 제공하는 종합적인 의료서비스",
    url: 'https://samsungwe.co.kr',
    siteName: '삼성WE내과의원',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '삼성WE내과의원',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "삼성WE내과의원",
    description: "경기도 구리시의 전문 내과 의료기관",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=your-google-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "삼성WE내과의원",
              "image": "https://samsungwe.co.kr/og-image.jpg",
              "description": "경기도 구리시의 전문 내과 의료기관. 건강검진, 심장혈관질환, 초음파/내시경 검사 등 종합적인 의료서비스 제공",
                    "address": {
        "@type": "PostalAddress",
        "streetAddress": "갈매중앙로 87 메이저타워 3층",
        "addressLocality": "구리시",
        "addressRegion": "경기도",
        "addressCountry": "KR"
              },
              "telephone": "031-527-3838",
              "url": "https://samsungwe.co.kr",
              "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 09:00-13:00"
              ],
              "medicalSpecialty": [
                "Internal Medicine",
                "Cardiology",
                "Gastroenterology",
                "Neurology"
              ],
              "paymentAccepted": "Cash, Insurance",
              "currenciesAccepted": "KRW",
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  )
}
