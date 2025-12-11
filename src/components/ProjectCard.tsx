import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  techs: string[]
  links: {
    github: string
    demo?: string
  }
  imgSrc: string
  bgColor?: string
}

const ProjectCard = ({ title, description, techs, links, imgSrc }: ProjectCardProps) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 md:gap-12 shadow-md rounded-lg overflow-hidden`}>
      <div className={`w-full md:w-1/2 flex-shrink-0 p-12 bg-gray-100 rounded-lg`}>
        <div className="relative w-full h-[250px]">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="py-12 text-gray-500">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
        <p className="mb-4">{description}</p>
        <p className="text-sm mb-6">
          <span>Built With: </span>
          <span>{techs.join(', ')}</span>
        </p>

        <div className="flex gap-4">
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm px-4 py-2 border rounded">
              View Code
            </a>
          )}
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 bg-sky-600 text-white rounded">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
