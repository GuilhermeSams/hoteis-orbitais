import Head from 'next/head'
import Image from 'next/image'
import img_banner from '../../public/bg_home.png'
import { KoulenFont } from '../lib/fonts'
import { InterFont } from '../lib/fonts'
import { CalendarForm } from '~/components/CalendarUi'
import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { CounterFont } from '../lib/fonts'
import Faq from '~/components/Faq'
import Newslatter from '~/components/Newslatter'
import Footer from '~/components/Footer'
import CardReviewService from '~/components/CardReviewService'
import React from 'react'
import { api } from '~/utils/api'
import moon from '../../public/moon.png'

export default function Home() {
    const { data: reviewService } = api.reviewsService.getAll.useQuery()

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
        <div className="">
            <Head>
                <title>Hotéis Orbitais</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <div className="h-screen">
                <section className="relative h-screen shadow-[0px_42px_52px_7px_#000000]">
                    <div className="absolute z-[-1] h-screen w-screen max-w-full">
                        <Image
                            alt="img_rocket"
                            src={img_banner}
                            fill
                            quality={100}
                            priority={true}
                            style={{
                                objectFit: 'cover',
                                filter: isSmallScreen
                                    ? 'brightness(0.3)'
                                    : 'none',
                            }}
                        />
                    </div>
                    <div className="ml-20 pt-32 max-[599px]:ml-0 max-[599px]:flex max-[599px]:flex-col max-[599px]:items-center">
                        <div className={KoulenFont.className}>
                            <h1 className=" text-8xl text-white  drop-shadow-glow  max-[1036px]:text-5xl max-[350px]:text-4xl">
                                INICIE SUA ESTADIA <br /> ESPACIAL AGORA
                            </h1>
                        </div>
                        <CalendarForm />
                        <div className={`${InterFont.className} pt-8`}>
                            <p className="max-w-xl animate-pulse font-bold text-white max-[599px]:px-6 max-[599px]:text-center max-[470px]:animate-none max-[470px]:text-sm">
                                Oferecemos a você a oportunidade de viajar com
                                confiança. Um hotel espacial à sua espera. As
                                férias dos seus sonhos estão a apenas alguns
                                clicks e a sua segurança é a nossa prioridade
                                número um.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className=" h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
                <div className=" flex items-end justify-center overflow-hidden">
                    <div className=" text-white">
                        <div
                            className="float-left h-[700px] w-[700px] rounded-full max-[1000px]:h-[500px] max-[1000px]:w-[500px] max-[800px]:h-[300px] max-[800px]:w-[300px] max-[500px]:h-[200px]  max-[500px]:w-[200px]"
                            style={{
                                shapeOutside: 'circle(50%)',
                                clipPath: 'circle()',
                            }}
                        >
                            <Image
                                className="float-left rounded-full "
                                alt="img_rocket"
                                quality={100}
                                src={moon}
                                priority={true}
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                        <div className="max-w-[85rem] space-y-8 px-6 pb-16 pt-24 text-white">
                            <div>
                                <h2 className="text-2xl font-bold max-[400px]:text-xl">
                                    Você está a um passo de Viajar para o espaço
                                </h2>
                                <p className="mt-2 font-bold max-[400px]:text-sm">
                                    Prepare-se para uma experiência que vai além
                                    da sua imaginação, uma estadia
                                    verdadeiramente única nas alturas do espaço.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold max-[400px]:text-xl">
                                    Viva a Magia do Espaço
                                </h2>
                                <p className="mt-2 font-bold max-[400px]:text-sm">
                                    Imagine acordar todas as manhãs com a Terra
                                    vista de um ângulo que poucos tiveram o
                                    privilégio de presenciar.
                                </p>
                            </div>
                            <div className="">
                                <h2 className="text-2xl font-bold max-[400px]:text-xl">
                                    Luxo Além das Estrelas
                                </h2>
                                <p className="mt-2 font-bold max-[400px]:text-sm">
                                    Nossos hotéis é uma fusão de sofisticação e
                                    conforto, projetado para atender às suas
                                    necessidades mais exigentes.
                                </p>
                            </div>
                            <div className="">
                                <h2 className="text-2xl font-bold max-[400px]:text-xl">
                                    Gastronomia Celestial
                                </h2>
                                <p className="mt-2 font-bold max-[400px]:text-sm">
                                    Nossos restaurantes oferecem uma culinária
                                    celestial que combina o melhor da
                                    gastronomia terrestre com toques de inovação
                                    inspirados no espaço.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-8 pt-20 max-[450px]:px-16">
                    <div className="mx-auto flex h-56 max-w-5xl items-center justify-center rounded-[8px] outline outline-2 outline-offset-8 outline-white  drop-shadow-glow max-[450px]:h-full">
                        <div className="flex h-full w-full justify-center rounded-[8px] bg-[#2D3648]">
                            <div
                                className={`${CounterFont.className} flex w-full items-center justify-evenly text-center text-white max-[450px]:flex-col`}
                            >
                                <div className="flex flex-none flex-col max-[450px]:pb-2 max-[450px]:pt-4">
                                    <CountUp
                                        className="text-7xl drop-shadow-glow max-[750px]:text-5xl max-[450px]:text-3xl"
                                        enableScrollSpy={true}
                                        end={458}
                                        scrollSpyOnce={true}
                                    />
                                    <span className="text-xl max-[450px]:text-sm">
                                        Voos
                                    </span>
                                </div>
                                <div className="h-[90px] border-[1px] border-white max-[450px]:h-[40px]"></div>
                                <div className=" flex shrink flex-col max-[450px]:py-2 ">
                                    <CountUp
                                        className="text-7xl  font-light drop-shadow-glow max-[750px]:text-5xl max-[450px]:text-3xl "
                                        enableScrollSpy={true}
                                        scrollSpyOnce={true}
                                        end={5496}
                                        separator=""
                                    />
                                    <span className="text-xl max-[450px]:text-sm">
                                        Passageiros
                                    </span>
                                </div>
                                <div className="h-[90px] border-[1px] border-white max-[450px]:h-[40px]"></div>

                                <div className="flex flex-none flex-col max-[450px]:pb-4 max-[450px]:pt-2">
                                    <CountUp
                                        className="text-7xl drop-shadow-glow max-[750px]:text-5xl max-[450px]:text-3xl"
                                        enableScrollSpy={true}
                                        scrollSpyOnce={true}
                                        end={31}
                                    />
                                    <span className="text-xl max-[450px]:text-sm">
                                        Anos
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${InterFont.className} mt-32`}>
                    <div className="space-y-4 text-center">
                        <h2 className="text-2xl text-white max-[555px]:text-xl">
                            Feedback de nossos clientes
                        </h2>
                        <h2 className="px-4 text-4xl font-extrabold text-[#2ee7ff] max-[555px]:text-3xl">
                            Entenda porque a nossa empresa se destaca
                        </h2>
                        <p className="mx-auto max-w-xl px-4 text-sm text-gray-400">
                            Nota: esses feedbacks são recolhidos no momento em
                            que os clientes estão prestes a voltarem para casa.
                            No nosso site não existe sistema para você avaliar!
                        </p>
                    </div>
                    <div className="mx-10 mt-20">
                        <div className="flex flex-wrap items-center justify-evenly">
                            {reviewService?.map((data, id) => (
                                <CardReviewService
                                    key={id}
                                    star={data.star}
                                    title={data.title}
                                    description={data.description}
                                    profileURL={data.profileURL}
                                    name={data.name}
                                    occupation={data.occupation}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-0 h-full max-[750px]:h-screen">
                    <div className=" flex items-center justify-evenly px-4 max-[1200px]:flex-col-reverse">
                        <div
                            className={`${InterFont.className} space-y-2 pt-12`}
                        >
                            <h2 className=" text-4xl font-extrabold text-white">
                                FAQ
                            </h2>
                            <p className="max-w-2xl text-transparent max-[390px]:text-sm">
                                Explore abaixo algumas das perguntas mais comuns
                                que recebemos. Se você não encontrar a resposta
                                que procura, não hesite em entrar em contato
                                conosco.
                            </p>
                            <Faq />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <Newslatter />
                    </div>
                </div>
                <Footer /> {/* Depois configurar o footer no layout */}
            </div>
        </div>
    )
}
