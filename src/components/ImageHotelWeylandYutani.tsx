import Image from 'next/image'
import HotelWeylandYutani1 from '../../public/hotel_weyland_yutani/Hotel_Weyland_Yutani_1.jpg'
import HotelWeylandYutani2 from '../../public/hotel_weyland_yutani/Hotel_Weyland_Yutani_2.jpg'
import HotelWeylandYutani3 from '../../public/hotel_weyland_yutani/Hotel_Weyland_Yutani_3.jpg'
import HotelWeylandYutani4 from '../../public/hotel_weyland_yutani/Hotel_Weyland_Yutani_4.jpg'
import HotelWeylandYutani5 from '../../public/hotel_weyland_yutani/Hotel_Weyland_Yutani_5.jpg'
import HotelWeylandYutani6 from '../../public/hotel_weyland_yutani/Hotel_Weyland_Yutani_6.jpg'

export default function ImageHotelWeylandYutani() {
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
                            src={HotelWeylandYutani1}
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
                            src={HotelWeylandYutani2}
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
                        src={HotelWeylandYutani3}
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
                            src={HotelWeylandYutani4}
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
                            src={HotelWeylandYutani5}
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
                        src={HotelWeylandYutani6}
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
