export default function Button({ 
  children, 
  variant = "primary", 
  href, 
  className = "" 
}: { 
  children: React.ReactNode
  variant?: "primary" | "secondary"
  href?: string
  className?: string 
}) {
  const buttonClass = variant === "primary" ? "btn-primary" : "btn-secondary"
  const combinedClass = `btn ${buttonClass} ${className}`
  
  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={combinedClass}>
      {children}
    </button>
  )
}
