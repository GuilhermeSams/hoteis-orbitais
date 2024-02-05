import Link from 'next/link'
import logo from '../../public/icon.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className=" grid h-fit grid-flow-row grid-cols-2 place-items-center bg-[#1A202C] py-20 text-white max-[980px]:grid-cols-1">
            <div className="py-8">
                <Link
                    className="rounded-[4px] bg-[#2D3648] px-6  py-3 text-xl text-white max-[204px]:hidden "
                    href={'/'}
                    style={{ whiteSpace: 'nowrap' }}
                >
                    HOTÉIS ORBITAIS
                </Link>
            </div>
            <div>
                <p>Copyright 1989 Hotéis Orbit.</p>
            </div>
            <div className="mt-8 place-items-center self-start">
                <Image
                    alt="img_logo"
                    src={logo}
                    className="w-24"
                    quality={100}
                    priority={true}
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>
            <div className="mt-8 grid self-start">
                <ul className="grid grid-flow-col gap-4 max-[455px]:grid-flow-row max-[455px]:place-items-center">
                    <li className="transition hover:text-gray-400">
                        <Link href={'#'}>Politica de Privacidade</Link>
                    </li>
                    <li className="transition hover:text-gray-400">
                        <Link href={'#'}>Sobre nós</Link>
                    </li>
                    <li className="transition hover:text-gray-400">
                        <Link href={'#'}>Trabalhe Conosco</Link>
                    </li>
                    <li className="transition hover:text-gray-400">
                        <Link href={'#'}>FAQ</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
