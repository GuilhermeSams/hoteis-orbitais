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
        <div className="mx-auto my-8 w-[700px] space-y-4 rounded-[8px] border-[1px] border-[#2D3648] bg-[#E2E7F0] p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className=" flex items-center space-x-6">
                <ul className=" border-r-2 border-black pr-8">
                    <li>{props.departureDate}</li>
                    <li className="mb-2">{props.departureTime}</li>
                    <li>{props.arrivalDate}</li>
                    <li>{props.arrivalTime}</li>
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
            <div>
                <p>Qualidade do Hotel</p>
                <li>{props.star}</li>
            </div>
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
    )
}
