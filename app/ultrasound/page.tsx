"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function UltrasoundPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            초음파 검사
          </h1>
          <p className="text-lg text-gray-600">
            최신 초음파 장비로 정확한 진단을 제공합니다
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosa9SVk0p.png"
              alt="초음파 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosavvHyAO.png"
              alt="초음파 장비"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaju5Exf.png"
              alt="복부 초음파"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaS8F6Pv.png"
              alt="갑상선 초음파"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaqIXTOZ.png"
              alt="심장 초음파"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa4zKHLI.png"
              alt="경동맥 초음파"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaneGa58.png"
              alt="초음파 검사실"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaRMd2Nd.png"
              alt="검사 과정"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa0P5aDb.png"
              alt="검사 결과"
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