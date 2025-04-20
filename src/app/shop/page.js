'use client'
import Header from '@/components/layout/Header/Header'
import HeroBanner from '@/components/ui/HeroBanner/HeroBanner'
import FilterBar from '@/components/shop-page/FilterBar/FilterBar'
import Catalog from '@/components/shop-page/Catalog/Catalog'
import InfoRow from '@/components/ui/InfoRow/InfoRow'
import Footer from '@/components/layout/Footer/Footer'
import { useState, useEffect } from 'react'

export default function Shop() {
	const [filters, setFilters] = useState({
		page: 1,
		limit: 16,
	})

	const [products, setProducts] = useState([])
	const [totalPages, setTotalPages] = useState(0)
	const [isLoading, setIsLoading] = useState(true)

	const fetchProducts = async () => {
		try {
			setIsLoading(true)
			const response = await fetch(
				`/api/products?limit=${filters.limit}&page=${filters.page}`
			)
			const data = await response.json()
			setTotalPages(data.totalPages || 0)
			setProducts(data.products || [])
		} catch (error) {
			console.error('Ошибка при загрузке товаров:', error)
			setProducts([])
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [filters])

	return (
		<>
			<Header />
			<HeroBanner title='Shop' href='/shop' />
			<FilterBar filters={filters} setFilters={setFilters} />
			<Catalog
				products={products}
				totalPages={totalPages}
				filters={filters}
				setFilters={setFilters}
				isLoading={isLoading}
			/>
			<InfoRow />
			<Footer />
		</>
	)
}
