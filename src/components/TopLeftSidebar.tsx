'use client'
import CardTravel from './CardTravel'

/*
type dataTravelAvailable = {
    id: number
    departureDate: string
    arrivalDate: string
    departureTime: string
    arrivalTime: string
    departureCity: string
    arrivalHotel: string
    pricePerSeat: Decimal
    pricePerStay: Decimal
    star: number
    rocketName: string
    capacity: number
}
*/
import React from 'react'
import { api } from '~/utils/api'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '../components/components-ui/ui/dropdown-menu'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from '../components/components-ui/ui/input'
import { UserPlus } from 'lucide-react'
import { Checkbox } from '../components/components-ui/ui/checkbox'
import { cn } from '../lib/utils'
import { Button } from '../components/components-ui/ui/button'
import { Calendar } from '../components/components-ui/ui/calendar'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '../components/components-ui/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '../components/components-ui/ui/popover'

//import { Toast } from '../components/components-ui/ui/toast'

const FormSchema = z.object({
    dob: z.date({
        required_error: 'A data é necessária',
    }),
})

export default function TopLeftSidebar() {
    const [position, setPosition] = React.useState('bottom')
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(/*data: z.infer<typeof FormSchema>*/) {
        /*Toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        })
        */
    }

    const { data: travelAvailable } = api.travelsAvailable.getAll.useQuery()

    return (
        <div className="flex bg-[#2D3648]">
            <div className="flex h-full w-[300px] flex-col bg-[#2D3648] text-white">
                <div>
                    <h1 className="mx-auto pt-32 text-center text-lg font-semibold">
                        Filtragem
                    </h1>
                    <div className="ml-4 mt-8">
                        <p className="font-bold">Tipo de Orbita</p>
                        <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight ">
                            <div className="flex w-full flex-row-reverse items-center">
                                <Checkbox
                                    className="ml-auto border-white"
                                    id="low-orbit"
                                />
                                <label
                                    htmlFor="low-orbit"
                                    className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Órbita baixa
                                </label>
                            </div>
                        </div>
                        <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                            <div className="flex w-full flex-row-reverse items-center">
                                <Checkbox
                                    className="ml-auto border-white"
                                    id="medium-orbit"
                                />
                                <label
                                    htmlFor="medium-orbit"
                                    className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Órbita Média
                                </label>
                            </div>
                        </div>
                        <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                            <div className="flex w-full flex-row-reverse items-center">
                                <Checkbox
                                    className="ml-auto border-white"
                                    id="geo-orbit"
                                />
                                <label
                                    htmlFor="geo-orbit"
                                    className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Órbita Geoestacionária
                                </label>
                            </div>
                        </div>
                        <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                            <div className="flex w-full flex-row-reverse items-center">
                                <Checkbox
                                    className="ml-auto border-white"
                                    id="moon-orbit"
                                />
                                <label
                                    htmlFor="moon-orbit"
                                    className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Órbita Lunar
                                </label>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="font-bold">Tipo de Hotel</p>
                            <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                                <div className="flex w-full flex-row-reverse items-center">
                                    <Checkbox
                                        className="ml-auto border-white"
                                        id="star-5"
                                    />
                                    <label
                                        htmlFor="star-5"
                                        className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        5 estrelas
                                    </label>
                                </div>
                            </div>
                            <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                                <div className="flex w-full flex-row-reverse items-center">
                                    <Checkbox
                                        className="ml-auto border-white"
                                        id="star-4"
                                    />
                                    <label
                                        htmlFor="star-4"
                                        className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        4 estrelas
                                    </label>
                                </div>
                            </div>
                            <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                                <div className="flex w-full flex-row-reverse items-center">
                                    <Checkbox
                                        className="ml-auto border-white"
                                        id="gravit-0"
                                    />
                                    <label
                                        htmlFor="gravit-0"
                                        className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Sala com gravidade 0
                                    </label>
                                </div>
                            </div>
                            <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                                <div className="flex w-full flex-row-reverse items-center">
                                    <Checkbox
                                        className="ml-auto border-white"
                                        id="resort"
                                    />
                                    <label
                                        htmlFor="resort"
                                        className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Hotel com Resort
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 mt-8">
                            <p className="font-bold">Tipo de Foguete</p>
                            <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                                <div className="flex w-full flex-row-reverse items-center">
                                    <Checkbox
                                        className="ml-auto border-white"
                                        id="place-12"
                                    />
                                    <label
                                        htmlFor="place-12"
                                        className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        12 Lugares - Startship
                                    </label>
                                </div>
                            </div>
                            <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                                <div className="flex w-full flex-row-reverse items-center">
                                    <Checkbox
                                        className="ml-auto border-white"
                                        id="place-4"
                                    />
                                    <label
                                        htmlFor="place-4"
                                        className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        4 Lugares - BlueOrigin
                                    </label>
                                </div>
                            </div>
                            <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2  font-extralight">
                                <div className="flex w-full flex-row-reverse items-center">
                                    <Checkbox
                                        className="ml-auto border-white"
                                        id="hour-2"
                                    />
                                    <label
                                        htmlFor="hour-2"
                                        className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        2 horas até qualquer hotel
                                    </label>
                                </div>
                            </div>
                            <div className="mr-4 mt-3 flex items-start rounded-[8px] border-2 border-l-[5px] px-2 font-extralight">
                                <div className="flex w-full flex-row-reverse items-center">
                                    <Checkbox
                                        className="ml-auto border-white"
                                        id="unshared-trip"
                                    />
                                    <label
                                        htmlFor="unshared-trip"
                                        className="w-full py-3.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Viagem não compartilhada
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-1 grid-rows-2 gap-0 bg-[#2D3648]">
                    <div className="mx-auto h-fit place-self-start py-14">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="flex flex-wrap items-center max-[599px]:justify-center"
                            >
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => (
                                        <FormItem className="relative flex flex-col">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={'outline'}
                                                            className={cn(
                                                                'w-[190px] rounded-l-[6px] rounded-r-none pl-3 text-left font-normal max-[310px]:rounded',
                                                                !field.value &&
                                                                    'text-muted-foreground'
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(
                                                                    field.value,
                                                                    'PPP'
                                                                )
                                                            ) : (
                                                                <span>
                                                                    Escolha uma
                                                                    data
                                                                </span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                    className="w-auto p-0"
                                                    align="start"
                                                >
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={
                                                            field.onChange
                                                        }
                                                        disabled={(date) =>
                                                            date <
                                                            new Date(
                                                                '1900-01-01'
                                                            )
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage className="absolute -bottom-5 max-[438px]:bottom-10" />
                                        </FormItem>
                                    )}
                                />
                                <div className=" flex h-10 items-center bg-white pr-4 max-[438px]:rounded-r-[6px] max-[310px]:mt-6 max-[310px]:rounded-l-[6px] max-[310px]:rounded-r-none">
                                    <Input className="w-20" type="number" />
                                    <UserPlus
                                        className=""
                                        color="black"
                                        size={24}
                                        opacity={0.3}
                                    />
                                </div>
                                <Button
                                    className="w-32 rounded-l-none rounded-r-[6px] bg-white text-black hover:bg-[#2D3648] hover:text-white max-[438px]:mt-6 max-[438px]:rounded-l-[6px] max-[310px]:rounded-l-none"
                                    type="submit"
                                >
                                    Reserve
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="row-start-2 bg-white">
                        <div className="my-2 ml-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        className="hover:bg-[#2D3648 bg-[#2D3648] text-white hover:text-gray-400"
                                        variant="outline"
                                    >
                                        Ordernar por
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40">
                                    <DropdownMenuRadioGroup
                                        value={position}
                                        onValueChange={setPosition}
                                    >
                                        <DropdownMenuRadioItem value="top">
                                            Menor Preço
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="bottom">
                                            Maior Preço
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="right">
                                            Mais comprado
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="bg-white">
                        {travelAvailable?.map((m, i) => (
                            <CardTravel
                                key={i}
                                departureDate={m.departureDate}
                                departureTime={m.departureTime}
                                arrivalDate={m.arrivalDate}
                                arrivalTime={m.arrivalTime}
                                departureCity={m.departureCity}
                                arrivalHotel={m.arrivalHotel}
                                pricePerSeat={m.pricePerSeat}
                                pricePerStay={m.pricePerStay}
                                star={m.star}
                                rocketName={m.rocketName}
                                capacity={m.capacity}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
