import { Koulen } from '@next/font/google'
import { Inter } from '@next/font/google'
import { Noto_Sans_Arabic } from '@next/font/google'

export const KoulenFont = Koulen({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})

export const InterFont = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})

export const CounterFont = Noto_Sans_Arabic({
    subsets: ['arabic'],
    display: 'swap',
    weight: '300',
})
