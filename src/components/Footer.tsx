import Link from 'next/link'

export default function Footer() {
    return (
        <div className=" grid h-fit grid-flow-row grid-cols-2 place-items-center bg-[#1A202C] py-20 text-white max-[980px]:grid-cols-1">
            <div className="mb-8 self-end">
                <Link
                    className="rounded-[4px] bg-[#2D3648]  px-6 py-3 text-xl text-white "
                    href={'/'}
                    style={{ whiteSpace: 'nowrap' }}
                >
                    HOTÉIS ORBITAIS
                </Link>
            </div>
            <div></div>
            <div className="mt-8 place-items-center self-start">
                <p>Copyright 1989 Hotéis Orbit.</p>
            </div>
            <div className="mt-8 grid self-start">
                <ul className="grid grid-flow-col gap-4 max-[455px]:grid-flow-row max-[455px]:place-items-center">
                    <li>
                        <Link href={'#'}>Politica de Privacidade</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Sobre nós</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Trabalhe Conosco</Link>
                    </li>
                    <li>
                        <Link href={'#'}>FAQ</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
