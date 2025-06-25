"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function NewsPage() {
  const basePath = process.env.CUSTOM_BASE_PATH || ''
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            소식
          </h1>
          <p className="text-lg text-gray-600">
            삼성WE내과의원의 최신 소식과 공지사항을 확인하세요
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>병원 소식</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                삼성WE내과의원의 최신 소식과 건강 정보를 제공합니다.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <img
              src={`${basePath}/images/mosaJ3PUxj.png`}
              alt="병원 소식"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosa24iCk7.png`}
              alt="공지사항"
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
