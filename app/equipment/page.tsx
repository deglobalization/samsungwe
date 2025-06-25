"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function EquipmentPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            고혈압/고지혈증
          </h1>
          <p className="text-lg text-gray-600">
            고혈압과 고지혈증의 체계적인 관리와 치료를 제공합니다
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosackdvVZ.png"
              alt="고혈압 관리"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosahBFUnL.png"
              alt="혈압 측정"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa8o2LWf.png"
              alt="고지혈증 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa4I4OXV.png"
              alt="치료 관리"
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