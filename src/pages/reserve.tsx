import TopLeftSidebar from '~/components/TopLeftSidebar'
import Footer from '~/components/Footer'
import { useRouter } from 'next/router'

export default function Reserve() {
    const router = useRouter()
    const { day } = router.query
    const safeDay = Array.isArray(day) ? day.join(', ') : day ?? 'Carregando...'

    return (
        <>
            <main className="h-full">
                <TopLeftSidebar dayInfo={safeDay} />
            </main>
            <Footer />
        </>
    )
}
