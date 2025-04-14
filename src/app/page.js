import Header from '@/components/layout/Header/Header'
import HeroBanner from '@/components/home-page/HeroBanner/HeroBanner.jsx'
import CatalogPreview from '@/components/home-page/CatalogPreview/CatalogPreview'
import TopPick from '@/components/home-page/TopPick/TopPick'
import NewArrivals from '@/components/home-page/NewArrivals/NewArrivals'
import Blogs from '@/components/home-page/Blogs/Blogs'
import InstagramFollow from '@/components/home-page/InstagramFollow/InstagramFollow'
import Footer from '@/components/layout/Footer/Footer'

export default function Home() {
	return (
		<>
			<Header background='bg-[#FBEBB5]' />
			<HeroBanner />
			<CatalogPreview />
			<TopPick />
			<NewArrivals />
			<Blogs />
			<InstagramFollow />
			<Footer />
		</>
	)
}
