'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format, parse, differenceInDays } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from '../components/components-ui/ui/input'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'
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
import { useRouter } from 'next/router'

//import { Toast } from '../components/components-ui/ui/toast'

function getDate() {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    return `${month}/${date}/${year}`
}

const FormSchema = z.object({
    dob: z.date({
        required_error: 'A data é necessária',
    }),
})

export const dynamic = 'force-dynamic'

export function CalendarForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    const router = useRouter()

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const formattedDate = format(data.dob, 'dd/MM/yyyy')
        //console.log('Data do calendario', formattedDate)

        const currentDate = parse(getDate(), 'MM/dd/yyyy', new Date())
        const formattedCurrentDate = format(currentDate, 'dd/MM/yyyy')
        //console.log('Data local:', formattedCurrentDate)

        const difference = differenceInDays(
            parse(formattedDate, 'dd/MM/yyyy', new Date()),
            currentDate
        )

        let message = ''

        // Lógica de mensagens
        if (difference === 0) {
            message = 'Viagens saindo hoje'
        } else if (difference === 1) {
            message = 'Viagens saindo amanhã'
        } else {
            message = `Viagens saindo em ${formattedDate}`
        }

        Promise.resolve()
            .then(() => {
                void router.push({
                    pathname: '/reserve',
                    query: { day: message },
                })
            })
            .catch(() => console.log('Algo inesperado aconteceu'))
    }

    return (
        <Form {...form}>
            <div className="mt-16 flex flex-wrap items-center max-[599px]:justify-center">
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
                                                format(field.value, 'PPP')
                                            ) : (
                                                <span>Escolha uma data</span>
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
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date('1900-01-01')
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
                <Link href="/reserve">
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        className="w-32 rounded-l-none rounded-r-[6px] bg-white text-black hover:bg-[#2D3648] hover:text-white max-[438px]:mt-6 max-[438px]:rounded-l-[6px] max-[310px]:rounded-l-none"
                        type="submit"
                    >
                        Reserve
                    </Button>
                </Link>
            </div>
        </Form>
    )
}
function Toast(arg0: {
    title: string
    description: import('react').JSX.Element
}) {
    throw new Error('Function not implemented.')
}
