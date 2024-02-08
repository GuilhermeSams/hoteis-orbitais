import Link from 'next/link'
import { SignInButton, useUser } from '@clerk/nextjs'
import { Button } from '../components/components-ui/ui/button'
import { DropdownMenuDemo } from '../components/menuBurguer'
import DropdownProfile from '../components/DropdawnProfile'
import logo from '../../public/icon.png'
import Image from 'next/image'

export default function Navbar() {
    const user = useUser()

    return (
        <header
            className="relative z-[1]
        "
        >
            <nav className="">
                <ul className="font-montserratAlt flex h-24 items-center justify-between px-20 font-bold text-white">
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
                                className="relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-200 after:content-[''] after:hover:scale-x-100"
                                href={'reserve'}
                            >
                                Reserve
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-200 after:content-[''] after:hover:scale-x-100"
                                href={'#'}
                            >
                                Ofertas
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-200 after:content-[''] after:hover:scale-x-100"
                                href={'#'}
                            >
                                Hotéis
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-200 after:content-[''] after:hover:scale-x-100"
                                href={'#'}
                            >
                                Sobre-nos
                            </Link>
                        </li>
                        <li>
                            {!user.isSignedIn && (
                                <SignInButton>
                                    <Button
                                        className="border-2 border-[#2D3648] text-black hover:bg-[#2D3648] hover:text-white"
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
