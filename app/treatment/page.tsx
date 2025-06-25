"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function TreatmentPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            내시경 검사
          </h1>
          <p className="text-lg text-gray-600">
            정확하고 안전한 내시경 검사 서비스를 제공합니다
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosaYKQMMo.png"
              alt="내시경 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosatz9gqa.png"
              alt="내시경 장비"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosabTkWoK.png"
              alt="검사 과정"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosadSkeTB.png"
              alt="검사실"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaIMndCY.png"
              alt="내시경 시설"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaGxUPyx.png"
              alt="검사 안내"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa9ZDu0z.png"
              alt="검사 준비"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa6fIQmc.png"
              alt="검사 후 안내"
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