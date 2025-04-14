'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
export default function Profile() {
	const router = useRouter()

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (!token) {
			router.push('/auth')
		}
	}, [router])

	return (
		<>
			<Header />
			{/* <Footer /> */}
		</>
	)
}
