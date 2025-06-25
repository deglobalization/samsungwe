"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            인사말
          </h1>
          <p className="text-lg text-gray-600">
            삼성WE내과의원 원장의 진심 어린 인사말을 전합니다
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaGV2MaW.png`}
              alt="원장 인사말"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  진료 철학
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  환자 한 분 한 분을 가족처럼 생각하며, 정확한 진단과 
                  최적의 치료를 통해 건강한 삶을 되찾아 드리겠습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  환자 중심
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  환자의 입장에서 생각하고, 충분한 상담과 설명을 통해 
                  신뢰받는 의료진이 되도록 최선을 다하겠습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  15년 경험
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  내과 전문의로서 15년간 축적된 풍부한 임상 경험을 바탕으로 
                  최고 수준의 의료 서비스를 제공합니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-500" />
                  24시간 대응
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  응급상황 시 24시간 연락 가능한 시스템을 구축하여 
                  언제든지 환자분들의 건강을 책임지겠습니다.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
              삼성WE내과의원의 약속
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-700">월 평균 진료 환자</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15년</div>
                <div className="text-gray-700">내과 전문의 경력</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24시간</div>
                <div className="text-gray-700">응급상황 대응</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}