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
	const [viewType, setViewType] = useState('grid')
	const [totalProducts, setTotalProducts] = useState(0)

	const fetchProducts = async () => {
		try {
			setIsLoading(true)
			const response = await fetch(
				`/api/products?limit=${filters.limit}&page=${filters.page}&sort=${
					filters.sort || ''
				}`
			)
			const data = await response.json()
			setTotalPages(data.totalPages || 0)
			setProducts(data.products || [])
			setTotalProducts(data.length)
		} catch (error) {
			console.error('Error loading products:', error)
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
			<FilterBar
				filters={filters}
				setFilters={setFilters}
				products={products}
				setViewType={setViewType}
				totalProducts={totalProducts}
				isLoading={isLoading}
			/>
			<Catalog
				products={products}
				totalPages={totalPages}
				filters={filters}
				setFilters={setFilters}
				isLoading={isLoading}
				viewType={viewType}
			/>
			<InfoRow />
			<Footer />
		</>
	)
}
