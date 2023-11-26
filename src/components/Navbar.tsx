import Link from 'next/link'
import { SignInButton, useUser } from '@clerk/nextjs'
import { SignOutButton } from '@clerk/nextjs'
import { Button } from '../components/components-ui/ui/button'
import { DropdownMenuDemo } from '../components/menuBurguer'

export default function Navbar() {
    const user = useUser()

    return (
        <header>
            <nav>
                <ul className="font-montserratAlt flex h-20 items-center justify-between px-8 font-bold text-[#2D3648]">
                    <ul>
                        <li className="">
                            <Link
                                className="rounded-[4px] bg-[#2D3648]  px-6 py-4 text-xl text-white "
                                href={'/'}
                                style={{ whiteSpace: 'nowrap' }}
                            >
                                HOTÉIS ORBITAIS
                            </Link>
                        </li>
                    </ul>
                    <div className="absolute right-0 mr-8 sm:hidden">
                        <DropdownMenuDemo />
                    </div>
                    <ul
                        style={{ whiteSpace: 'nowrap' }}
                        className="flex items-center gap-7 text-sm max-[838px]:gap-4 max-[640px]:hidden"
                    >
                        <li>
                            <Link href={'#'}>Reserve</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Ofertas</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Hotéis</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Sobre-nos</Link>
                        </li>
                        <li>
                            {!user.isSignedIn && (
                                <SignInButton>
                                    <Button
                                        className="border-2 border-[#2D3648] hover:bg-[#2D3648] hover:text-white"
                                        variant="outline"
                                    >
                                        Login
                                    </Button>
                                </SignInButton>
                            )}
                            {!!user.isSignedIn && (
                                <SignOutButton>
                                    <Button
                                        className="border-2 border-[#2D3648] hover:bg-[#2D3648] hover:text-white"
                                        variant="outline"
                                    >
                                        Sair
                                    </Button>
                                </SignOutButton>
                            )}
                        </li>
                    </ul>
                </ul>
            </nav>
        </header>
    )
}
