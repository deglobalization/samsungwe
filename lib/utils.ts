import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(src: string): string {
  const isProd = process.env.NODE_ENV === 'production'
  const basePath = isProd ? '/samsungwe' : ''
  
  // src가 이미 절대 경로이거나 외부 URL인 경우 그대로 반환
  if (src.startsWith('http') || src.startsWith('//')) {
    return src
  }
  
  // 로컬 이미지의 경우 basePath 추가
  const imagePath = src.startsWith('/') ? src : `/${src}`
  return `${basePath}${imagePath}`
}
