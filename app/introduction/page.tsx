"use client"

import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page2ogttitk() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            심장 질환
          </h1>
        </div>
        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosauWUN2m.png"
              alt="심장질환 안내"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaMmBx60.png"
              alt="심장질환 검사"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa1Q9a3T.png"
              alt="심장질환 치료"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaoUjdHM.png"
              alt="심장질환 관리"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosa8TlAhk.png"
              alt="심장질환 예방"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/mosaFrHPVO.png"
              alt="심장질환 정보"
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