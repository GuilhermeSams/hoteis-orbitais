'use client'

import Image from 'next/image'
import suiteHotelCarlSagan from '../../public/hotel_carl_sagan/suite_Hotel_Carl_Sagan.jpg'
import salaEstarHotelCarlSagan from '../../public/hotel_carl_sagan/sala_estar_Hotel_Carl_Sagan.jpg'
import basqueteHotelCarlSagan from '../../public/hotel_carl_sagan/basquete_Hotel_Carl_Sagan.jpg'
import restauranteHotelCarlSagan from '../../public/hotel_carl_sagan/restaurante_Hotel_Carl_Sagan.png'
import barHotelCarlSagan from '../../public/hotel_carl_sagan/bar_Hotel_Carl_Sagan.jpg'
import fogueteHotelCarlSagan from '../../public/hotel_carl_sagan/starship_hotel_carl_sagan.png'

export default function ImageHotelCarlSagan() {
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
                            src={suiteHotelCarlSagan}
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
                            src={salaEstarHotelCarlSagan}
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
                        src={basqueteHotelCarlSagan}
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
                            src={restauranteHotelCarlSagan}
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
                            src={barHotelCarlSagan}
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
                        src={fogueteHotelCarlSagan}
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
