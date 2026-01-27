import IconLink from '@/components/IconLink'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import ScrollToTop from '@/components/ScrollToTop'
import { owner, projects, iconList } from '@/data/portfolio'

export default function Home() {
  return (
    <div className="font-jetbrains flex flex-col items-center min-h-screen max-w-5xl py-1 px-2 sm:py-6 sm:px-10 mx-auto">
      <header className="w-full flex-none flex justify-between items-center">
        <h1>{owner}</h1>
        <Navbar />
      </header>

      <main className="w-full flex-1 py-8 md:py-24 flex flex-col gap-12 md:gap-4 items-center sm:items-start">
        <Intro />
        {/* <hr className="w-full border-t border-gray-300 my-12" /> */}
        <section id="projects" className="py-12 my-0 md:my-12 w-full flex flex-col gap-12">
          {projects.map(({ id, ...projects }) => (
            <ProjectCard key={id} {...projects} />
          ))}
        </section>
      </main>

      <footer className="flex-none row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* <ul className="flex space-x-12">
          {iconList.map(({ href, icon }) => (
            <li key={href}>
              <IconLink href={href} icon={icon} size={24} />
            </li>
          ))}
        </ul> */}
        <p>© 2026 Ding Han</p>
      </footer>

      <ScrollToTop />
    </div>
  )
}
