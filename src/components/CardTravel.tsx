import ReactStars from 'react-rating-stars-component'
import React from 'react'

type dataTravelAvailable = {
    departureDate: string
    arrivalDate: string
    departureTime: string
    arrivalTime: string
    departureCity: string
    arrivalHotel: string
    pricePerSeat: number
    pricePerStay: number
    star: number
    rocketName: string
    capacity: number
}

export default function CardTravel(props: dataTravelAvailable) {
    return (
        <div className="mx-auto my-8 w-[700px] animate-fade-up space-y-4 rounded-[8px] border-[1px] border-[#2D3648] bg-[#E2E7F0] p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
            <div>
                <ul>
                    <li>
                        Valor por assento:{' '}
                        <span className=" font-bold text-green-500">
                            R$ {props.pricePerSeat}
                        </span>
                    </li>
                    <li>
                        Valor por estádia:{' '}
                        <span className=" font-bold text-green-500">
                            R$ {props.pricePerStay}
                        </span>
                    </li>
                </ul>
            </div>
            <div className="flex gap-10">
                <div>
                    <p>Qualidade do Hotel</p>
                    <li className="list-none">
                        <ReactStars
                            count={5}
                            edit={false}
                            size={24}
                            isHalf={true}
                            value={props.star}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                            color="#bbbaba"
                        />
                    </li>
                </div>
                <div>
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
            </div>
        </div>
    )
}
