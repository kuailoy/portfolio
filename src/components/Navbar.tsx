import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex gap-6 p-4'>
            <a href='#about'>About</a>
            <a href="#projects">Projects</a>
            {/* <Link href={'contact/'}>Contact</Link> */}
        </nav>
    )
};

