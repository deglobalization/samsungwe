import Link from "next/link"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">삼성WE내과의원</h3>
            <p className="text-gray-300 mb-4">
              건강검진부터 일반내과 진료까지, 삼성내과 전문의에 의한 심장 및 혈관질환관리
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>경기도 구리시 갈매중앙로 87 메이저타워 3층</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>031-527-3838</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@samsungwe.co.kr</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  삼성WE내과
                </Link>
              </li>
              <li>
                <Link href="/introduction" className="hover:text-white transition-colors">
                  병원 소개
                </Link>
              </li>
              <li>
                <Link href="/ultrasound" className="hover:text-white transition-colors">
                  초음파/내시경
                </Link>
              </li>
              <li>
                <Link href="/checkup" className="hover:text-white transition-colors">
                  건강검진
                </Link>
              </li>
              <li>
                <Link href="/treatment" className="hover:text-white transition-colors">
                  신경질환/한방질환
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">진료 시간</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>월-금</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>토요일</span>
                <span>09:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>점심시간</span>
                <span>12:30 - 13:30</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>일요일/공휴일</span>
                <span>휴진</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 삼성WE내과의원. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white ml-1">개인정보처리방침</Link> | 
            <Link href="/terms" className="hover:text-white ml-1">이용약관</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
