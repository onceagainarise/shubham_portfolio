export default function Section({ 
  children, 
  className = "", 
  id 
}: { 
  children: React.ReactNode
  className?: string
  id?: string 
}) {
  return (
    <section 
      id={id}
      className={`section ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}
