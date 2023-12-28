import React, { useEffect, useState } from 'react'
//import { useRouter } from 'next/navigation'
import { SignInButton, useUser } from '@clerk/nextjs'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import { LogOut, Menu, User, ShoppingBag, LifeBuoy } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuPortal,
} from '../components/components-ui/ui/dropdown-menu'

function GetName() {
    const { isSignedIn, user } = useUser()
    if (!isSignedIn) {
        return null
    }
    return <span>{user.firstName}</span>
}

function GetImageUrlProfile() {
    const { isSignedIn, user } = useUser()

    if (!isSignedIn) {
        return null
    }

    return user.imageUrl || null
}

export function DropdownMenuDemo() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)
    //const router = useRouter()
    const user = useUser()

    const toggleDropdown = () => {
        setIsDropdownVisible((prev) => !prev)
    }
    useEffect(() => {
        console.log('O estado isDropdownVisible mudou:', isDropdownVisible)
    }, [isDropdownVisible])
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Menu
                    size={30}
                    onClick={toggleDropdown}
                    className="cursor-pointer text-right"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 space-y-4">
                <DropdownMenuGroup className="space-y-2">
                    <DropdownMenuItem>
                        <span>Reserve</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Ofertas</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Hotéis</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Sobre-nós</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {!!user.isSignedIn && (
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <div
                                    className="mr-2 h-10 w-10 rounded-[8px] bg-contain bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${GetImageUrlProfile()})`,
                                    }}
                                ></div>
                                <span>{GetName()}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <Link href={'/menage-profile'}>
                                        <DropdownMenuItem>
                                            <User className="mr-2 h-4 w-4" />
                                            <span className="">
                                                Gerenciar Perfil
                                            </span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <ShoppingBag className="mr-2 h-4 w-4" />
                                        <span>Histórico de Compras</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem>
                                        <LifeBuoy className="mr-2 h-4 w-4" />
                                        <span>Ajuda & Suporte</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>
                )}
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>
                        {!user.isSignedIn && <SignInButton>Login</SignInButton>}
                        {!!user.isSignedIn && (
                            <SignOutButton>Sair</SignOutButton>
                        )}
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
