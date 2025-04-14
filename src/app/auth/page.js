'use client'
import Header from '@/components/layout/Header/Header'
import HeroBanner from '@/components/ui/HeroBanner/HeroBanner'
import InfoRow from '@/components/ui/InfoRow/InfoRow'
import Footer from '@/components/layout/Footer/Footer'
import Forms from '@/components/account-page/Forms/Forms'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Account() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token')

		if (token) {
			router.push('/profile')
		} else {
			setIsLoading(false)
		}
	}, [router])

	if (isLoading) {
		return null
	}

	return (
		<>
			<Header />
			<HeroBanner title='My Account' href='/account' />
			<Forms />
			<InfoRow />
			<Footer />
		</>
	)
}
