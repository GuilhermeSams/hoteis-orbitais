import Head from 'next/head'
import NavBar from '../components/Navbar'
import Image from 'next/image'
import img_banner from '../../public/img_banner.jpg'
import img_orbit_planet from '../../public/orbit_planet.png'
import { KoulenFont } from '../lib/fonts'
import { InterFont } from '../lib/fonts'
import { CalendarForm } from '~/components/CalendarUi'
import { useState, useEffect } from 'react'
import CardImageDescription from '../components/CardImageDescription'
import stars_img from '../../public/5_stars.png'
import gravitation from '../../public/gravitation_img.png'
import astronaut from '../../public/astronaut_img.png'
import ufo from '../../public/ufo.png'

export default function Home() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 780)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <>
            <Head>
                <title>Hotéis Orbitais</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className="h-[75vh]">
                <section className="relative h-[43vh]">
                    <div className="absolute z-[-1] h-[75vh] w-screen max-w-full">
                        <Image
                            alt="img_rocket"
                            src={img_banner}
                            fill
                            priority={true}
                            style={{
                                objectFit: 'cover',
                                filter: isSmallScreen
                                    ? 'brightness(0.5)'
                                    : 'none',
                            }}
                        />
                    </div>
                    <div className="ml-20 pt-32 max-[599px]:ml-0 max-[599px]:flex max-[599px]:flex-col max-[599px]:items-center">
                        <div className={KoulenFont.className}>
                            <h1 className=" text-7xl text-white  max-[1036px]:text-5xl  max-[350px]:text-4xl ">
                                INICIE SUA ESTADIA <br /> ESPACIAL AGORA
                            </h1>
                        </div>
                        <CalendarForm />
                        <div className={`${InterFont.className} pt-8 `}>
                            <p className="max-w-xl animate-pulse font-bold text-white max-[599px]:px-6 max-[599px]:text-center">
                                Oferecemos a você a oportunidade de viajar com
                                confiança. Um hotel espacial à sua espera. As
                                férias dos seus sonhos estão a apenas alguns
                                clicks e a sua segurança é a nossa prioridade
                                número um.
                            </p>
                        </div>
                    </div>
                    <div className="transforms absolute -bottom-full left-1/2 -translate-x-1/2 max-[690px]:hidden">
                        <div className="mx-auto flex max-w-full gap-x-28 max-[1170px]:gap-x-16 max-[948px]:gap-x-11 max-[815px]:gap-6">
                            <CardImageDescription
                                src={img_orbit_planet}
                                alt="img_orbit_planet"
                                text="Uma estadia segura em orbita"
                            />
                            <CardImageDescription
                                src={stars_img}
                                alt="stars"
                                text="Restaurantes incríveis"
                            />
                            <CardImageDescription
                                src={gravitation}
                                alt="img_gravitation"
                                text="Gravidade artificial"
                            />
                            <CardImageDescription
                                src={astronaut}
                                alt="img_astronaut"
                                text="Sala de gravidade 0"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <div className="h-screen">
                <div className="mx-auto mt-12 flex max-w-full flex-wrap justify-center gap-5 min-[690px]:hidden">
                    <CardImageDescription
                        src={img_orbit_planet}
                        alt="img_orbit_planet"
                        text="Uma estadia segura em orbita"
                    />
                    <CardImageDescription
                        src={stars_img}
                        alt="stars"
                        text="Restaurantes incríveis"
                    />
                    <CardImageDescription
                        src={gravitation}
                        alt="img_gravitation"
                        text="Gravidade artificial"
                    />
                    <CardImageDescription
                        src={astronaut}
                        alt="img_astronaut"
                        text="Sala de gravidade 0"
                    />
                </div>
                <div className="flex items-end justify-center pt-40  max-[690px]:pt-20">
                    <div className="relative w-full  bg-[#4A5468] ">
                        <div className="absolute -top-[3.12rem] left-0 h-0 w-0 border-b-[50px] border-l-[75px] border-t-[50px] border-b-transparent border-l-[#4A5468] border-t-transparent"></div>
                        <div className="absolute -bottom-[3.13rem] left-0 h-0 w-0 border-b-[50px] border-l-[75px] border-t-[50px] border-b-transparent border-l-white border-t-transparent"></div>
                        <div className="absolute -top-[3.12rem] right-0 border-b-[50px] border-r-[75px] border-t-[50px] border-b-transparent border-r-[#4A5468] border-t-transparent"></div>
                        <div className="absolute -bottom-[3.13rem] right-0 border-b-[50px] border-r-[75px] border-t-[50px] border-b-transparent border-r-white border-t-transparent"></div>
                        <div className=" mx-auto max-w-4xl space-y-8 rounded-[8px] px-6 py-16 text-white">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Você está a um passo de Viajar para o espaço
                                </h2>
                                <p className="font-bold text-[#CBD2E0]">
                                    Prepare-se para uma experiência que vai além
                                    da sua imaginação - uma estadia
                                    verdadeiramente única nas alturas do espaço.
                                    Nosso hotel em órbita da Terra é mais do que
                                    uma acomodação; é uma jornada mágica em si
                                    mesma. Bem-vindo a um lugar onde o horizonte
                                    é apenas o começo.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Viva a Magia do Espaço
                                </h2>
                                <p className="font-bold text-[#CBD2E0]">
                                    Imagine acordar todas as manhãs com a Terra
                                    vista de um ângulo que poucos tiveram o
                                    privilégio de presenciar. Nossos quartos
                                    oferecem vistas panorâmicas deslumbrantes,
                                    com janelas amplas que mostram a beleza do
                                    nosso planeta em todo o seu esplendor.
                                    Assista ao nascer do sol no espaço sideral e
                                    desfrute de noites estreladas que nunca
                                    terminam.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Luxo Além das Estrelas
                                </h2>
                                <p className="font-bold text-[#CBD2E0]">
                                    Nossos hotéis é uma fusão de sofisticação e
                                    conforto, projetado para atender às suas
                                    necessidades mais exigentes. De suítes
                                    espaçosas a amenidades de última geração,
                                    cada detalhe foi cuidadosamente planejado
                                    para garantir que sua estadia seja uma
                                    experiência de classe mundial.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Gastronomia Celestial
                                </h2>
                                <p className="font-bold text-[#CBD2E0]">
                                    Nossos restaurantes oferecem uma culinária
                                    celestial que combina o melhor da
                                    gastronomia terrestre com toques de inovação
                                    inspirados no espaço. Saboreie pratos
                                    elaborados por chefs renomados, enquanto
                                    aprecia a vista deslumbrante da Terra.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
