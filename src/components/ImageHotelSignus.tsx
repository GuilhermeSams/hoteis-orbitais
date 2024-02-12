'use client'

import Image from 'next/image'
import suiteHotelSignus from '../../public/hotel_signus/suite_Hotel_Signus.jpg'
import salaEstarHotelSignus from '../../public/hotel_signus/sala_estar_hotel_signus.jpg'
import walkMoonHotelSignus from '../../public/hotel_signus/walking_moon_hotel_signus.jpg'
import restauranteHotelSignus from '../../public/hotel_signus/restaurant_hotel_signus.jpg'
import poolHotelSignus from '../../public/hotel_signus/pool_hotel_signus.jpeg'
import astanaHorizon from '../../public/hotel_signus/spacecraft-3589965_1280.png'

export default function ImageHotelSignus() {
    return (
        <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Hotel</h2>
            <div className="space-y-6">
                <div className="flex justify-evenly">
                    <div>
                        <Image
                            className="w-80 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                            alt="img_rocket"
                            quality={100}
                            src={suiteHotelSignus}
                            priority={true}
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                        <p className="text-center">
                            Suíte com vista para terra a 35.000 km
                        </p>
                    </div>
                    <div>
                        <Image
                            className="w-80 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                            alt="img_rocket"
                            quality={100}
                            src={salaEstarHotelSignus}
                            priority={true}
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                        <p className="text-center">Salas de estar</p>
                    </div>
                </div>
                <div className="">
                    <Image
                        className="mx-auto w-80 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                        alt="img_rocket"
                        quality={100}
                        src={walkMoonHotelSignus}
                        priority={true}
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                    <p className="text-center">Basquete em gravidade 0</p>
                </div>
                <div className="flex justify-evenly">
                    <div>
                        <Image
                            className="w-80 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                            alt="img_rocket"
                            quality={100}
                            src={restauranteHotelSignus}
                            priority={true}
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                        <p className="text-center">
                            Restaurantes 5 estrelas Com Chefes renomados
                        </p>
                    </div>
                    <div>
                        <Image
                            className="w-80 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                            alt="img_rocket"
                            quality={100}
                            src={poolHotelSignus}
                            priority={true}
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                        <p className="text-center">Open Bar</p>
                    </div>
                </div>
                <div>
                    <Image
                        className="w-80 rounded-sm"
                        alt="img_rocket"
                        quality={100}
                        src={astanaHorizon}
                        priority={true}
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
