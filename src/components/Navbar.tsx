import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4">
      <a href="#about" className="hover-underline-center">
        About
      </a>
      <a href="#projects" className="hover-underline-center">
        Projects
      </a>
      {/* <Link href={'contact/'}>Contact</Link> */}
    </nav>
  )
}
