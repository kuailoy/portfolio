export const owner = 'ding.han'

export const iconList = [
  { href: 'https://github.com/kuailoy', iconSrc: '/github.svg' },
  { href: 'https://www.linkedin.com/in/ding-han-7920202b8/', iconSrc: '/linkedin.svg' },
  { href: 'https://www.instagram.com/dingloow/', iconSrc: '/instagram.svg' },
]

export const projects = [
  {
    id: 1,
    title: '🌤️ City Weather Dashboard',
    description: `A frontend demo that integrates city search and weather data from public APIs. (In Progress)`,
    techs: ['React', 'TypeScript', 'tailwindcss', 'REST API', 'Vite', 'shadcn/ui'],
    links: {
      github: 'https://github.com/kuailoy/city-weather',
      // demo: 'https://example.com/project-one',
    },
    imgSrc: '/project-weather.jpg',
    bgColor: 'bg-pink-100',
  },
  {
    id: 2,
    title: '🛍️ Flutter E-commerce App',
    description: `A mobile shopping app with product browsing, cart management, and checkout flow.`,
    techs: ['Flutter', 'Dart', 'Provider'],
    links: {
      github: 'https://github.com/TetRex/Temmu',
      // demo: 'https://example.com/flutter-app',
    },
    imgSrc: '/project-ecommerce.jpg',
    bgColor: 'bg-purple-100',
  },
  {
    id: 3,
    title: '📸 Image Gallery',
    description: `Made with exif-photo-blog. A responsive image gallery with list / grid view, and lazy loading capabilities.`,
    techs: ['Next.js', 'Vercel Postgres + Vercel Blob'],
    links: {
      github: 'https://github.com/kuailoy/image-gallary',
      demo: 'https://photos.handing.me/',
    },
    imgSrc: '/project-imagegallery.jpg',
    bgColor: 'bg-orange-100',
  },
  {
    id: 4,
    title: '💼 Developer Portfolio',
    description: `A personal portfolio website showcasing projects and skills with modern design.`,
    techs: ['Next.js', 'TypeScript', 'tailwindcss', 'React'],
    links: {
      github: 'https://github.com/kuailoy/portfolio',
      demo: 'https://www.handing.me',
    },
    imgSrc: '/project-portfolio.jpg',
    bgColor: 'bg-blue-100',
  },
]

export const roles = [
  { text: '&lt;frontend developer /&gt;', pause: 1500 },
  { text: '&lt;IoT student /&gt;', pause: 1000 },
  { text: '&lt;problem solver /&gt;', pause: 750 },
  { text: '&lt;lifelong learner /&gt;', pause: 750 },
]
