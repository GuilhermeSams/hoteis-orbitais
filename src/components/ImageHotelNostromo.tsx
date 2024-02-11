import Image from 'next/image'
import HotelNostromo1 from '../../public/hotel_nostromo/Hotel_Nostromo_1.jpg'
import HotelNostromo2 from '../../public/hotel_nostromo/Hotel_Nostromo_2.jpg'
import HotelNostromo3 from '../../public/hotel_nostromo/Hotel_Nostromo_3.jpg'
import HotelNostromo4 from '../../public/hotel_nostromo/Hotel_Nostromo_4.jpg'
import HotelNostromo5 from '../../public/hotel_nostromo/Hotel_Nostromo_5.jpg'
import HotelNostromo6 from '../../public/hotel_nostromo/Hotel_Nostromo_6.jpg'

export default function ImageHotelNostromo() {
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
                            src={HotelNostromo1}
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
                            src={HotelNostromo2}
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
                        src={HotelNostromo3}
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
                            src={HotelNostromo4}
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
                            src={HotelNostromo5}
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
                        src={HotelNostromo6}
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
