"use client"

import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page7rvh38iy() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            간질환 / 소화기
          </h1>
        </div>
        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosaANolWm.png"
              alt="간질환 안내"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosacWagYB.png"
              alt="소화기 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaHDqvfx.png"
              alt="간질환 치료"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaeBmSth.png"
              alt="소화기 관리"
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