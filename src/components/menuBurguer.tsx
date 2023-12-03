import React, { useEffect, useState } from 'react'
//import { useRouter } from 'next/navigation'
import { SignInButton, useUser } from '@clerk/nextjs'
import { SignOutButton } from '@clerk/nextjs'

import { LogOut, Menu } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../components/components-ui/ui/dropdown-menu'

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
            <DropdownMenuContent className="w-56 space-y-4">
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
