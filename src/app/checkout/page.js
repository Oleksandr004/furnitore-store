'use client'
import Header from '@/components/layout/Header/Header'
import HeroBanner from '@/components/ui/HeroBanner/HeroBanner'
import InfoRow from '@/components/ui/InfoRow/InfoRow'
import Footer from '@/components/layout/Footer/Footer'
import PlaceOrderSection from '@/components/checkout-page/PlaceOrderSection/PlaceOrderSection'
export default function Checkout() {
	return (
		<>
			<Header />
			<HeroBanner title='Checkout' href='/checkout' />
			<PlaceOrderSection />
			<InfoRow />
			<Footer />
		</>
	)
}
