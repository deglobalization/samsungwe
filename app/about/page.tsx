"use client"

import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page43rjze3i() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            인사말
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            삼성WE내과의원을 찾아주신 모든 분들께 진심으로 감사드립니다.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="text-center">
            <Image
              src="/images/mosaGV2MaW.png"
              alt="삼성WE내과의원 인사말"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  안녕하십니까. 삼성WE내과의원 원장입니다.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  저희 삼성WE내과의원은 지역 주민 여러분의 건강한 삶을 위해 최선을 다하고 있습니다. 
                  내과 전문의로서 축적된 경험과 노하우를 바탕으로, 정확한 진단과 효과적인 치료를 
                  제공하기 위해 노력하고 있습니다.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  특히 심장질환, 고혈압, 당뇨병, 갑상선 질환 등 만성질환의 체계적인 관리와 
                  정기적인 건강검진을 통한 예방의학에 중점을 두고 있습니다. 
                  또한 최신 초음파 장비와 내시경 시설을 갖추어 보다 정확하고 
                  안전한 검사를 시행하고 있습니다.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  환자 한 분 한 분을 가족처럼 생각하며, 친절하고 세심한 진료를 통해 
                  여러분의 건강 지킴이가 되겠습니다. 언제나 환자의 입장에서 생각하고, 
                  최고의 의료 서비스를 제공하기 위해 끊임없이 노력하겠습니다.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  건강한 삶을 위한 든든한 동반자가 되겠다는 약속을 드리며, 
                  앞으로도 변함없는 관심과 사랑을 부탁드립니다.
                </p>
                
                <div className="mt-8 text-right">
                  <p className="text-gray-800 font-semibold">삼성WE내과의원 원장</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">년간의 진료 경험</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <p className="text-gray-600">월 평균 진료 환자</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">24시간</div>
                <p className="text-gray-600">응급상황 대응</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}