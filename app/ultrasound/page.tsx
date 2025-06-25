"use client"

import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function B29qefbb() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            초음파 검사
          </h1>
        </div>
        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosa9SVk0p.png"
              alt="초음파 검사 안내"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosavvHyAO.png"
              alt="초음파 검사 소개"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            복부초음파 검사
          </h2>
          <div className="text-center">
            <Image
              src="/images/mosaju5Exf.png"
              alt="복부초음파 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaS8F6Pv.png"
              alt="복부초음파 검사 방법"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            갑상선초음파 검사
          </h2>
          <div className="text-center">
            <Image
              src="/images/mosaqIXTOZ.png"
              alt="갑상선초음파 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            심장초음파 검사
          </h2>
          <div className="text-center">
            <Image
              src="/images/mosa4zKHLI.png"
              alt="심장초음파 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaneGa58.png"
              alt="심장초음파 검사 방법"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            경동맥초음파 검사
          </h2>
          <div className="text-center">
            <Image
              src="/images/mosaRMd2Nd.png"
              alt="경동맥초음파 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa0P5aDb.png"
              alt="경동맥초음파 검사 결과"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}