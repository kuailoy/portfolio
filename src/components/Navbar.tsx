"use client"

import { useTheme } from 'next-themes'
import SwitchButton from './SwitchButton'

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const checked = resolvedTheme ? resolvedTheme === 'dark' : undefined
  return (
    <nav className="flex gap-6 p-4">
      <a href="#about" className="hover-underline-center">
        About
      </a>
      <a href="#projects" className="hover-underline-center">
        Projects
      </a>
      <SwitchButton
        checked={checked}
        onCheckedChange={(nextChecked) => {
          setTheme(nextChecked ? 'dark' : 'light')
        }}
      />
      {/* <Link href={'contact/'}>Contact</Link> */}
    </nav>
  )
}
