"use client"

import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Ti8547ld() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            진료과목
          </h1>
        </div>
        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosaD86aXM.png"
              alt="내과 진료"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaGV2MaW.png"
              alt="진료과목 안내"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaLXbBvd.png"
              alt="전문 진료"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaJ4aK8O.png"
              alt="진료 서비스"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa4byodH.png"
              alt="의료 서비스"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaFzNoHW.png"
              alt="진료 안내"
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