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
                <DropdownMenuTrigger className="flex flex-row-reverse outline-none">
                    <Button
                        className="rounded-l-none  bg-gradient-to-r from-[#28F19D] to-[#05A9F0] font-bold text-black ring-offset-0 hover:shadow-[inset_-12px_-8px_40px_#00000054] max-[640px]:hidden"
                        variant="default"
                    >
                        {GetName()}
                    </Button>

                    <div
                        className="h-10 w-10 rounded-l-[8px] bg-contain bg-no-repeat "
                        style={{
                            backgroundImage: `url(${GetImageUrlProfile()})`,
                        }}
                    ></div>
                </DropdownMenuTrigger>
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
