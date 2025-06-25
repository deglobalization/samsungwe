"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function HealthInfoPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            건강정보
          </h1>
          <p className="text-lg text-gray-600">
            유용한 건강 정보와 질병 예방 정보를 제공합니다
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaIJXZvm.png`}
              alt="건강정보"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaefiW6n.png`}
              alt="질병 예방"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosa5EblgJ.png`}
              alt="건강관리"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaN7n3U3.png`}
              alt="생활습관"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosaK0ae78.png`}
              alt="건강검진"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosa0AemEn.png`}
              alt="건강상식"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src={`${basePath}/images/mosajsTLfq.png`}
              alt="건강 팁"
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