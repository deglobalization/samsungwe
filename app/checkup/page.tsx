"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function CheckupPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            건강검진
          </h1>
          <p className="text-lg text-gray-600">
            체계적이고 정확한 건강검진으로 질병을 조기 발견하고 예방합니다
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>일반 건강검진</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  국민건강보험공단에서 실시하는 일반 건강검진으로 
                  기본적인 건강상태를 확인합니다.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 혈압, 혈당, 콜레스테롤 검사</li>
                  <li>• 간기능, 신장기능 검사</li>
                  <li>• 흉부 X선 촬영</li>
                  <li>• 소변 검사</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>종합 건강검진</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  보다 정밀한 검사를 통해 질병을 조기 발견하고 
                  개인별 맞춤 건강관리를 제공합니다.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 복부 초음파 검사</li>
                  <li>• 갑상선 초음파 검사</li>
                  <li>• 심전도 검사</li>
                  <li>• 종양표지자 검사</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Image
              src="/images/mosaIJXZvm.png"
              alt="3대 암 검진"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosam9jdfg.png"
              alt="건강검진 안내"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaJy8NEu.png"
              alt="검진 절차"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosajsTLfq.png"
              alt="검진 결과"
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