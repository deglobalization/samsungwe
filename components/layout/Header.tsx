"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Clock } from "lucide-react"

const navigationItems = [
  { href: "/checkup", label: "건강검진", badge: null },
]

// 병원 소개 드롭다운 메뉴
const aboutItems = [
  { href: "/about", label: "인사말", badge: null },
  { href: "/doctors", label: "의료진 안내", badge: null },
  { href: "/services", label: "진료과목", badge: null },
  { href: "/gallery", label: "둘러보기", badge: null },
  { href: "/non-covered", label: "비급여 안내", badge: null },
]

// 초음파/내시경 드롭다운 메뉴
const ultraEndoscopyItems = [
  { href: "/ultrasound", label: "초음파 검사", badge: null },
  { href: "/treatment", label: "내시경 검사", badge: null },
]

// 심장질환/만성질환 드롭다운 메뉴
const heartDiseaseItems = [
  { href: "/introduction", label: "심장질환", badge: null },
  { href: "/equipment", label: "고혈압/고지혈증", badge: null },
  { href: "/schedule", label: "당뇨병/갑상선", badge: null },
  { href: "/reservation", label: "간질환/소화기", badge: null },
  { href: "/location", label: "호흡기", badge: null },
  { href: "/contact", label: "골다공증", badge: null },
]

// 추가 메뉴들을 메인 네비게이션에 직접 추가
const additionalItems = [
  { href: "/news", label: "병원 소식", badge: null },
  { href: "/health-info", label: "건강 정보", badge: null },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isHeartDiseaseOpen, setIsHeartDiseaseOpen] = useState(false)
  const [isUltraEndoscopyOpen, setIsUltraEndoscopyOpen] = useState(false)
  const pathname = usePathname()

  const isAboutPage = aboutItems.some(item => item.href === pathname)
  const isHeartDiseasePage = heartDiseaseItems.some(item => item.href === pathname)
  const isUltraEndoscopyPage = ultraEndoscopyItems.some(item => item.href === pathname)

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>031-527-3838</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>점심시간: 12:30~13:30</span>
              </div>
            </div>
            <div className="text-center">
              <span className="font-semibold">삼성WE내과의원</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                삼성WE내과의원
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {/* 병원 소개 드롭다운 */}
              <div className="relative group">
                <button 
                  className={`flex items-center text-sm font-medium transition-colors hover:text-blue-600 ${
                    isAboutPage ? "text-blue-600" : "text-gray-700"
                  }`}
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  병원 소개
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <div className="py-1">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-blue-600 ${
                          pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <Badge 
                      variant="secondary" 
                      className={`ml-2 text-xs ${
                        pathname === item.href 
                          ? "bg-blue-600 text-white" 
                          : "bg-gray-600 text-white"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
              
              {/* 초음파/내시경 드롭다운 */}
              <div className="relative group">
                <button 
                  className={`flex items-center text-sm font-medium transition-colors hover:text-blue-600 ${
                    isUltraEndoscopyPage ? "text-blue-600" : "text-gray-700"
                  }`}
                  onMouseEnter={() => setIsUltraEndoscopyOpen(true)}
                  onMouseLeave={() => setIsUltraEndoscopyOpen(false)}
                >
                  초음파/내시경
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  onMouseEnter={() => setIsUltraEndoscopyOpen(true)}
                  onMouseLeave={() => setIsUltraEndoscopyOpen(false)}
                >
                  <div className="py-1">
                    {ultraEndoscopyItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-blue-600 ${
                          pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 심장질환/만성질환 드롭다운 */}
              <div className="relative group">
                <button 
                  className={`flex items-center text-sm font-medium transition-colors hover:text-blue-600 ${
                    isHeartDiseasePage ? "text-blue-600" : "text-gray-700"
                  }`}
                  onMouseEnter={() => setIsHeartDiseaseOpen(true)}
                  onMouseLeave={() => setIsHeartDiseaseOpen(false)}
                >
                  심장질환/만성질환
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  onMouseEnter={() => setIsHeartDiseaseOpen(true)}
                  onMouseLeave={() => setIsHeartDiseaseOpen(false)}
                >
                  <div className="py-1">
                    {heartDiseaseItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-blue-600 ${
                          pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 추가 메뉴들을 직접 표시 */}
              {additionalItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                전체보기
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                로그인
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2 max-h-96 overflow-y-auto">
              {/* 모바일 병원 소개 섹션 */}
              <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="px-3 py-2 text-sm font-medium text-gray-500">병원 소개</div>
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-3 pl-6 rounded-lg transition-colors hover:bg-gray-50 ${
                      pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
              
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-gray-50 ${
                    pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        pathname === item.href 
                          ? "bg-blue-600 text-white" 
                          : "bg-gray-600 text-white"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
              
              {/* 모바일 초음파/내시경 섹션 */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-medium text-gray-500">초음파/내시경</div>
                {ultraEndoscopyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-3 pl-6 rounded-lg transition-colors hover:bg-gray-50 ${
                      pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
              
              {/* 모바일 심장질환/만성질환 섹션 */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-medium text-gray-500">심장질환/만성질환</div>
                {heartDiseaseItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-3 pl-6 rounded-lg transition-colors hover:bg-gray-50 ${
                      pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
              
              {/* 모바일 추가 메뉴 */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                {additionalItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-gray-50 ${
                      pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
              
              <div className="flex space-x-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="flex-1">
                  전체보기
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  로그인
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
