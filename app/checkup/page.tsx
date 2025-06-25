"use client"

import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page59hnilup() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            건강검진
          </h1>
          <p className="text-lg text-gray-600">
            정기적인 건강검진으로 질병을 조기에 발견하고 예방하세요
          </p>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">3대 암 검진</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Image
                  src="/images/mosaIJXZvm.png"
                  alt="3대 암 검진 안내"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/mosam9jdfg.png"
                  alt="위암 검진"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/mosaJy8NEu.png"
                  alt="대장암 검진"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/mosajsTLfq.png"
                  alt="유방암 검진"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">건강검진 안내</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">일반 건강검진</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 혈액검사 (혈당, 콜레스테롤, 간기능 등)</li>
                    <li>• 소변검사</li>
                    <li>• 흉부 X-ray</li>
                    <li>• 심전도 검사</li>
                    <li>• 혈압 및 체성분 측정</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">종합 건강검진</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 일반 건강검진 포함</li>
                    <li>• 복부 초음파</li>
                    <li>• 갑상선 초음파</li>
                    <li>• 위내시경 또는 위장조영술</li>
                    <li>• 암표지자 검사</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}