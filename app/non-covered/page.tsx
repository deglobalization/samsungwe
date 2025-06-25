"use client"

import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NonCoveredPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            비급여 안내
          </h1>
          <p className="text-lg text-gray-600">
            투명한 의료비 안내로 신뢰받는 진료를 제공합니다
          </p>
        </div>
        <div className="space-y-8">
          {/* 비급여 행위료 이미지들 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">비급여 행위료 안내</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Image
                  src="/images/mosa4byodH.png"
                  alt="비급여 행위료 안내"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/mosaFzNoHW.png"
                  alt="비급여 진료비 상세"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/mosasxYYHS.png"
                  alt="검사별 비급여 비용"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/mosaLUgnDC.png"
                  alt="진료 항목별 비용"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">비급여 진료비 안내</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">진료항목</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">비용(원)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">건강검진</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">150,000</td>
                      <td className="border border-gray-300 px-4 py-2">기본 종합검진</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">복부초음파</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">80,000</td>
                      <td className="border border-gray-300 px-4 py-2">단독 검사 시</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">심장초음파</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">120,000</td>
                      <td className="border border-gray-300 px-4 py-2">단독 검사 시</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">갑상선초음파</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">70,000</td>
                      <td className="border border-gray-300 px-4 py-2">단독 검사 시</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">경동맥초음파</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">90,000</td>
                      <td className="border border-gray-300 px-4 py-2">단독 검사 시</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">위내시경</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">100,000</td>
                      <td className="border border-gray-300 px-4 py-2">수면내시경 추가 50,000원</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">대장내시경</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">150,000</td>
                      <td className="border border-gray-300 px-4 py-2">수면내시경 추가 50,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">안내사항</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 위 비용은 2024년 기준이며, 변동될 수 있습니다.</li>
                  <li>• 검진 패키지 이용 시 할인 혜택이 있습니다.</li>
                  <li>• 정확한 비용은 내원 시 상담받으시기 바랍니다.</li>
                  <li>• 건강보험 적용 항목은 별도 문의하시기 바랍니다.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
} 