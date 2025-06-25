import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
  overlayOpacity?: number
}

export default function HeroSection({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage = "/placeholder.jpg",
  overlayOpacity = 0.3
}: HeroSectionProps) {
  return (
    <section className="relative">
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: overlayOpacity }} 
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {title}
              </h1>
              {subtitle && (
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6">
                  {subtitle}
                </h2>
              )}
              {description && (
                <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                  {description}
                </p>
              )}
              {buttonText && buttonLink && (
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href={buttonLink}>{buttonText}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
