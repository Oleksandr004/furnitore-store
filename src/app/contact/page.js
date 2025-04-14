import Header from '@/components/layout/Header/Header'
import HeroBanner from '@/components/ui/HeroBanner/HeroBanner'
import InfoRow from '@/components/ui/InfoRow/InfoRow'
import Footer from '@/components/layout/Footer/Footer'
import ContactSection from '@/components/contact-page/ContactSection/ContactSection'

export default function Contact() {
	return (
		<>
			<Header />
			<HeroBanner title='Contact' href='/contact' />
			<ContactSection />
			<InfoRow />
			<Footer />
		</>
	)
}
