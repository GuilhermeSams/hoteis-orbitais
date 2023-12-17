import { type AppType } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import NavBar from '../components/Navbar'

import { api } from '~/utils/api'

import '~/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <>
            <ClerkProvider {...pageProps}>
                <NavBar />
                <Component {...pageProps} />
            </ClerkProvider>
        </>
    )
}

export default api.withTRPC(MyApp)
