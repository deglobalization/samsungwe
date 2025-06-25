"use client"

import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Car, Train, Bus, Clock, ParkingCircle } from "lucide-react"


export default function LocationPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            오시는 길
          </h1>
          <p className="text-lg text-gray-600">
            삼성WE내과의원 위치 및 교통안내
          </p>
        </div>

        {/* Address Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              병원 위치
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">삼성WE내과의원</h3>
                <p className="text-lg text-blue-700">경기도 구리시 갈매중앙로 87 메이저타워 3층</p>
                <p className="text-blue-600 mt-2">전화: 031-527-3838</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Public Transportation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Train className="w-5 h-5 mr-2" />
                대중교통 이용
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <Train className="w-4 h-4 mr-3 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">지하철</p>
                    <p className="text-sm text-gray-600">7호선 갈매역 1번 출구</p>
                    <p className="text-sm text-gray-600">도보 약 5분</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Bus className="w-4 h-4 mr-3 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">버스</p>
                    <p className="text-sm text-gray-600">갈매역 정류장 하차</p>
                    <p className="text-sm text-gray-600">1136, 1137, 1330, 1332</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Driving Directions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="w-5 h-5 mr-2" />
                자가용 이용
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <Car className="w-4 h-4 mr-3 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">네비게이션</p>
                    <p className="text-sm text-gray-600">"메이저타워" 또는</p>
                    <p className="text-sm text-gray-600">"구리시 갈매중앙로 87"</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ParkingCircle className="w-4 h-4 mr-3 text-orange-600 mt-1" />
                  <div>
                    <p className="font-medium">주차안내</p>
                    <p className="text-sm text-gray-600">메이저타워 지하주차장</p>
                    <p className="text-sm text-gray-600">진료환자 주차 무료</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Directions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>상세 교통안내</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-blue-700">🚇 지하철 이용시</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 7호선 갈매역 1번 출구</li>
                  <li>• 출구에서 갈매중앙로 방향으로 직진</li>
                  <li>• 약 300m 직진 후 메이저타워 도착</li>
                  <li>• 소요시간: 도보 5분</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-green-700">🚌 버스 이용시</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 갈매역 정류장 하차</li>
                  <li>• 1136, 1137, 1330, 1332번</li>
                  <li>• 정류장에서 메이저타워까지 도보 3분</li>
                  <li>• 구리시내버스 이용 가능</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Landmark Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              주변 주요 시설
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">갈매역</h4>
                <p className="text-sm text-gray-600">도보 5분</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">갈매초등학교</h4>
                <p className="text-sm text-gray-600">도보 3분</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">갈매시장</h4>
                <p className="text-sm text-gray-600">도보 7분</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Operating Hours */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <Clock className="w-5 h-5 mr-2" />
              진료시간 안내
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">월 - 금</span>
                    <span className="text-blue-600">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">토요일</span>
                    <span className="text-blue-600">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">일요일, 공휴일</span>
                    <span className="text-blue-600">휴진</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-blue-600">
                  <p className="font-medium">점심시간</p>
                  <p>12:30 - 13:30</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}