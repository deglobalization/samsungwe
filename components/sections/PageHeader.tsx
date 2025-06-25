interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  backgroundClass?: string
}

export default function PageHeader({ 
  title, 
  subtitle, 
  description,
  backgroundClass = "bg-gradient-to-r from-blue-600 to-blue-800"
}: PageHeaderProps) {
  return (
    <section className={`${backgroundClass} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <h2 className="text-xl md:text-2xl text-blue-100 mb-4">{subtitle}</h2>
        )}
        {description && (
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  )
}
