"use client"

import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function R8qzbzuc() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            둘러보기
          </h1>
        </div>
        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosaLXbBvd.png"
              alt=""
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaJ4aK8O.png"
              alt=""
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