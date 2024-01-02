import React, { type ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}
