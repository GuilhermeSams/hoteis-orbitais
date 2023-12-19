import { LifeBuoy, LogOut, User, ShoppingBag } from 'lucide-react'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'

import { Button } from '~/components/components-ui/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '~/components/components-ui/ui/dropdown-menu'
const { isSignedIn, user, isLoaded } = useUser()

export default function DropdownMenuDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="bg-[#2D3648] font-bold text-white"
                    variant="default"
                >
                    {user.fullName}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-8 w-56">
                <Link href={'/menage-profile'}>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Gerenciar Perfil</span>
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
                <DropdownMenuSeparator />
                <SignOutButton>
                    <DropdownMenuItem>
                        <span className="flex  flex-row items-center">
                            <LogOut className="mr-2 h-4 w-4" />
                            Sair
                        </span>
                    </DropdownMenuItem>
                </SignOutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
