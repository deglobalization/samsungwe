"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function GalleryPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            둘러보기
          </h1>
          <p className="text-lg text-gray-600">
            삼성WE내과의원의 시설과 환경을 소개합니다
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaLXbBvd.png`}
              alt="병원 시설"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaJ4aK8O.png`}
              alt="진료실"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}