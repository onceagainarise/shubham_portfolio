interface MetaProps {
  children: React.ReactNode
  className?: string
}

export default function Meta({ children, className = "" }: MetaProps) {
  return <span className={`meta ${className}`}>{children}</span>
}
