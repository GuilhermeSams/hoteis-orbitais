import Head from 'next/head'
import NavBar from '../components/Navbar'
import Image from 'next/image'
import img_banner from '../../public/img_banner.jpg'

export default function Home() {
    return (
        <>
            <Head>
                <title>Hotéis Orbitais</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className="min-h-screen">
                <section className="relative">
                    <div className="absolute z-[-1] h-[75vh] w-screen max-w-full">
                        <Image
                            alt="img_rocket"
                            src={img_banner}
                            fill
                            priority={true}
                            style={{
                                objectFit: 'fill',
                            }}
                        />
                    </div>
                </section>
            </main>
        </>
    )
}
