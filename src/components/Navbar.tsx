import Link from 'next/link'
import { SignInButton, useUser } from '@clerk/nextjs'
import { Button } from '../components/components-ui/ui/button'
import { DropdownMenuDemo } from '../components/menuBurguer'
import DropdownProfile from '../components/DropdawnProfile'
import logo from '../../public/icon.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const router = useRouter()
    const [textColor, setTextColor] = useState('text-white')
    const [lineDownColor, setLineDownColor] = useState('after:bg-white')
    const user = useUser()

    useEffect(() => {
        const newColor =
            router.pathname === '/reserve' ? 'text-black' : 'text-white'
        const newColorLine =
            router.pathname === '/reserve' ? 'after:bg-black' : 'after:bg-white'
        setLineDownColor(newColorLine)

        setTextColor(newColor)
    }, [router.pathname])

    return (
        <header
            className="relative z-[1]
        "
        >
            <nav className="">
                <ul className="font-montserratAlt flex h-24 items-center justify-between px-20 font-bold">
                    <ul>
                        <li className="">
                            <Link
                                className="rounded-[4px] px-6 py-3 text-xl text-white"
                                href={'/'}
                            >
                                <Image
                                    alt="img_logo"
                                    src={logo}
                                    className="w-14"
                                    quality={100}
                                    priority={true}
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                />
                            </Link>
                        </li>
                    </ul>
                    <div className="absolute right-0 mr-14 flex items-center gap-2 sm:hidden">
                        <DropdownMenuDemo />
                    </div>
                    <ul
                        style={{ whiteSpace: 'nowrap' }}
                        className="flex items-center gap-7 text-sm max-[838px]:gap-4 max-[640px]:hidden"
                    >
                        <li>
                            <Link
                                className={`relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 ${lineDownColor} after:transition after:duration-200 after:content-[''] after:hover:scale-x-100 ${textColor}`}
                                href={'reserve'}
                            >
                                Reserve
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0  after:transition ${lineDownColor} after:duration-200 after:content-[''] after:hover:scale-x-100 ${textColor}`}
                                href={'#'}
                            >
                                Ofertas
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 ${lineDownColor} after:transition after:duration-200 after:content-[''] after:hover:scale-x-100 ${textColor}`}
                                href={'#'}
                            >
                                Hotéis
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 ${lineDownColor} after:transition after:duration-200 after:content-[''] after:hover:scale-x-100 ${textColor}`}
                                href={'#'}
                            >
                                Sobre-nos
                            </Link>
                        </li>
                        <li>
                            {!user.isSignedIn && (
                                <SignInButton>
                                    <Button
                                        className="border-none bg-gradient-to-r from-[#28F19D] to-[#05A9F0] text-black transition hover:text-white hover:shadow-[inset_-12px_-8px_40px_#000000a4]"
                                        variant="outline"
                                    >
                                        Login
                                    </Button>
                                </SignInButton>
                            )}
                            {!!user.isSignedIn && (
                                <>
                                    <DropdownProfile />
                                </>
                            )}
                        </li>
                    </ul>
                </ul>
            </nav>
        </header>
    )
}
