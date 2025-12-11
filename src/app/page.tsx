import IconLink from '@/components/IconLink'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'

const owner = 'ding.han'

const iconList = [
  { href: 'https://github.com/kuailoy', iconSrc: '/github.svg' },
  { href: 'https://www.linkedin.com/in/ding-han-7920202b8/', iconSrc: '/linkedin.svg' },
  { href: 'https://www.instagram.com/dingloow/', iconSrc: '/instagram.svg' },
]

export default function Home() {
  return (
    <div className="font-mono flex flex-col items-center min-h-screen max-w-5xl py-1 px-2 sm:py-6 sm:px-10 mx-auto">
      <header className="w-full flex-none flex justify-between items-center">
        <h1>{owner}</h1>
        <Navbar />
      </header>

      <main className="w-full flex-1 py-8 md:py-16 flex flex-col items-center sm:items-start">
        <Intro />
      </main>

      <footer className="flex-none row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <ul className="flex space-x-12">
          {iconList.map(({ href, iconSrc }) => (
            <li key={iconSrc}>
              <IconLink href={href} iconSrc={iconSrc} size={24} />
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}
