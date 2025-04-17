'use client'
import Header from '@/components/layout/Header/Header'
import HeroBanner from '@/components/product-page/Herobanner/HeroBanner'
import ProductTabs from '@/components/product-page/AboutProduct/ProductTabs'
import RelatedProducts from '@/components/product-page/RelatedProducts/RelatedProducts'
import Footer from '@/components/layout/Footer/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

const ProductPage = () => {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const baseUrl = window.location.origin
				const response = await fetch(`${baseUrl}/api/products/${id}`)
				if (!response.ok) {
					throw new Error('Failed to fetch')
				}
				const data = await response.json()

				setProduct(data)
			} catch (error) {
				setError(error.massage)
			}
		}
		fetchProduct()
	}, [id])

	if (error) {
		return <p>Error : {error}</p>
	}
	if (!product) {
		return <p>Loading...</p>
	}
	return (
		<>
			<Header />
			<HeroBanner
				name={product.name}
				description={product.description}
				image={product.imageUrl}
				price={product.price}
				id={product._id}
				imageUrl={product.imageUrl}
			/>
			<ProductTabs description={product.description} />
			<RelatedProducts />
			<Footer />
		</>
	)
}

export default ProductPage
