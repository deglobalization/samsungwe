"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function NonCoveredPage() {
  const basePath = process.env.CUSTOM_BASE_PATH || ''
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            비급여 안내
          </h1>
          <p className="text-lg text-gray-600">
            비급여 진료비 안내와 상세 정보를 제공합니다
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>비급여 진료비 안내</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">검사 항목</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">비용</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">종합건강검진</td>
                      <td className="border border-gray-300 px-4 py-2">150,000원</td>
                      <td className="border border-gray-300 px-4 py-2">기본 검진 포함</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">복부 초음파</td>
                      <td className="border border-gray-300 px-4 py-2">80,000원</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">갑상선 초음파</td>
                      <td className="border border-gray-300 px-4 py-2">70,000원</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">심장 초음파</td>
                      <td className="border border-gray-300 px-4 py-2">120,000원</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">위내시경</td>
                      <td className="border border-gray-300 px-4 py-2">60,000원</td>
                      <td className="border border-gray-300 px-4 py-2">수면 추가 30,000원</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">대장내시경</td>
                      <td className="border border-gray-300 px-4 py-2">100,000원</td>
                      <td className="border border-gray-300 px-4 py-2">수면 추가 30,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * 위 비용은 2024년 기준이며, 변동될 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <img
              src={`${basePath}/images/mosa4byodH.png`}
              alt="비급여 진료비 안내"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaFzNoHW.png`}
              alt="검진 비용"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosasxYYHS.png`}
              alt="초음파 비용"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaLUgnDC.png`}
              alt="내시경 비용"
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