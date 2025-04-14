'use client'
import Header from '@/components/layout/Header/Header'
import HeroBanner from '@/components/ui/HeroBanner/HeroBanner'
import CartSection from '@/components/cart-page/CartSection/CartSection'
import InfoRow from '@/components/ui/InfoRow/InfoRow'
import Footer from '@/components/layout/Footer/Footer'

export default function Cart() {
	return (
		<>
			<Header />
			<HeroBanner title='Cart' href='/cart' />
			<CartSection />
			<InfoRow />
			{/* <Footer /> */}
		</>
	)
}
