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

export default function DropdownMenuDemo() {
    return (
        <DropdownMenu>
            <div className="flex flex-row-reverse">
                <DropdownMenuTrigger asChild className="flex">
                    <Button
                        className="rounded-l-none bg-[#2D3648] font-bold text-white max-[640px]:hidden"
                        variant="default"
                    >
                        {GetName()}
                    </Button>
                </DropdownMenuTrigger>
                <div
                    className="h-10 w-10 rounded-l-[8px] bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${GetImageUrlProfile()})` }}
                ></div>
            </div>
            <DropdownMenuContent className="mr-8 w-56">
                <Link href={'/menage-profile'}>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span className="">Gerenciar Perfil</span>
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
