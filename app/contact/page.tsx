"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail, Calendar } from "lucide-react"


export default function ContactPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            연락처
          </h1>
          <p className="text-lg text-gray-600">
            언제든지 문의해 주세요. 친절하게 안내해 드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                연락처 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-600" />
                <div>
                  <p className="font-medium">전화번호</p>
                  <p className="text-gray-600">031-527-3838</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                <div>
                  <p className="font-medium">주소</p>
                  <p className="text-gray-600">경기도 구리시 갈매중앙로 87 메이저타워 3층</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-600" />
                <div>
                  <p className="font-medium">이메일</p>
                  <p className="text-gray-600">info@samsungwe.co.kr</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Operating Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                진료시간
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">월 - 금</span>
                  <span className="text-gray-600">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">토요일</span>
                  <span className="text-gray-600">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">일요일, 공휴일</span>
                  <span className="text-gray-600">휴진</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm text-gray-600">점심시간: 12:30 - 13:30</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              오시는 길
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">대중교통 이용시</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 지하철 7호선 갈매역 1번 출구에서 도보 5분</li>
                  <li>• 버스 정류장: 갈매역 하차</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">자가용 이용시</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 메이저타워 지하 주차장 이용 가능</li>
                  <li>• 주차 무료 (진료 환자에 한함)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="mt-8 bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-700">응급상황 안내</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600 mb-2">
              응급상황 발생시 즉시 119에 신고하시고, 병원으로도 연락 주시기 바랍니다.
            </p>
            <p className="text-sm text-red-500">
              진료시간 외에는 응급실이 운영되지 않으니, 인근 응급의료센터를 이용해 주세요.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}