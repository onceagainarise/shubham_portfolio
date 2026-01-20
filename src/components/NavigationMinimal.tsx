export default function NavigationMinimal() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300">
      <div className="container px-4">
        <div className="flex justify-between items-center h-8">
          <div className="heading text-xs text-black whitespace-nowrap overflow-hidden text-ellipsis">
            SHUBHAM PATHAK
          </div>
          
          <div className="flex gap-4 sm:gap-8">
            <a href="#projects" className="link text-xs text-black whitespace-nowrap">
              PROJECTS
            </a>
            <a href="#contact" className="link text-xs text-black whitespace-nowrap">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
