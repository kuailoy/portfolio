import { IconType } from 'react-icons'

interface IconLinkProps {
  href: string
  icon: IconType
  size?: number
}

const IconLink = ({ href, icon: Icon, size = 16 }: IconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground hover:text-foreground/70 transition-colors"
    >
      <Icon aria-hidden size={size} />
    </a>
  )
}

export default IconLink
