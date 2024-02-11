import React from 'react'

import { ScrollArea } from '../../src/components/components-ui/ui/scroll-area'
import ImageHotelCarlSagan from './ImageHotelCarlSagan'
import ImageHotelSignus from './ImageHotelSignus'
import ImageHotelNostromo from './ImageHotelNostromo'
import ImageHotelWeylandYutani from './ImageHotelWeylandYutani'

type modalTravelAvailable = {
    departureDate: string
    arrivalDate: string
    departureTime: string
    arrivalTime: string
    departureCity: string
    arrivalHotel: string
    rocketName: string
    capacity: number
    typeNumberHotel: number
}

export default function CardTravel(props: modalTravelAvailable) {
    const { typeNumberHotel } = props
    let ImageComponent

    switch (typeNumberHotel) {
        case 1:
            ImageComponent = ImageHotelCarlSagan
            break
        case 2:
            ImageComponent = ImageHotelSignus
            break
        case 3:
            ImageComponent = ImageHotelNostromo
            break
        case 4:
            ImageComponent = ImageHotelWeylandYutani
            break
        default:
            ImageComponent = null
            break
    }
    return (
        <ScrollArea className="h-[70vh] w-full rounded-md">
            <div className="space-y-4 py-6">
                <div className=" flex items-center space-x-6">
                    <ul className=" border-r-2 border-black pr-8">
                        <div className="flex">
                            <span className="mr-[33px]">Saíra {'->'}</span>
                            <div>
                                <li>{props.departureDate}</li>
                                <li className="mb-2">{props.departureTime}</li>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="mr-2">Chegará {'->'}</span>
                            <div>
                                <li>{props.arrivalDate}</li>
                                <li>{props.arrivalTime}</li>
                            </div>
                        </div>
                    </ul>
                    <ul className="flex flex-col space-y-10">
                        <li>{props.departureCity}</li>
                        <li>{props.arrivalHotel}</li>
                    </ul>
                </div>
                {ImageComponent && <ImageComponent />}
                <div>
                    <ul>
                        <li>
                            <p>Foguete da Viagem</p>
                            <li>{props.rocketName}</li>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Capacidade Total: {props.capacity}</li>
                    </ul>
                </div>
            </div>
        </ScrollArea>
    )
}
