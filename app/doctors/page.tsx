"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function DoctorsPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            의료진 안내
          </h1>
          <p className="text-lg text-gray-600">
            삼성WE내과의원의 전문 의료진을 소개합니다
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosa1xDXcp.png"
              alt="의료진 소개"
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