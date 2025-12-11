import Image from 'next/image'

interface IconLinkProps {
  href: string
  iconSrc: string
  size?: number
}

const IconLink = ({ href, iconSrc, size = 16 }: IconLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image aria-hidden src={iconSrc} alt="File icon" width={size} height={size} />
    </a>
  )
}

export default IconLink
