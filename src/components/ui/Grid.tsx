export default function Grid({ 
  children, 
  cols = 2, 
  className = "" 
}: { 
  children: React.ReactNode
  cols?: 1 | 2 | 3
  className?: string 
}) {
  const gridClass = cols === 3 ? 'grid-cols-1 md:grid-cols-3' : 
                     cols === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                     'grid-cols-1'
  
  return (
    <div className={`${gridClass} gap-6 ${className}`}>
      {children}
    </div>
  )
}
