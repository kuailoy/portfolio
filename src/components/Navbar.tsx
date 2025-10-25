import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex gap-6 p-4'>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'contact/'}>Contact</Link>
        </nav>
    )
};

