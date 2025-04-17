'use client'
import styles from '@/components/shop-page/Catalog/Catalog.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Catalog = ({ products = [], totalPages, filters, setFilters }) => {
	const handlePageChange = (page) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			page,
		}))
	}

	const MotionLink = ({ href, children, ...props }) => {
		return (
			<Link href={href} passHref>
				<motion.div {...props}>{children}</motion.div>
			</Link>
		)
	}
	return (
		<section className={`${styles.catalog} mb-24`}>
			<div className={`${styles.container}`}>
				<div className={`${styles.grid} mb-28`}>
					{products.length > 0 ? (
						products.map((product) => (
							<MotionLink
								whileHover={{ scale: 1.1 }}
								href={`/shop/${product._id}`}
								key={product._id}
								className='product'
							>
								<Image
									className={styles.product_img}
									height={287}
									width={287}
									src={product.imageUrl}
									alt={product.name}
								/>
								<h3 className={`${styles.name} mt-4 mb-3`}>
									<Link href={`/shop/${product._id}`}>{product.name}</Link>
								</h3>
								<p className={`${styles.price}`}>{`Rs. ${product.price}`}</p>
							</MotionLink>
						))
					) : (
						<p>Нет доступных товаров.</p>
					)}
				</div>

				<div className='pagination flex gap-9 justify-center'>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<motion.button
							whileHover={{
								border: '2.5px solid #000000',
							}}
							transition={{ duration: 0 }}
							className={`${styles.btn} ${`${
								page === filters.page ? styles.active : ''
							}`}`}
							key={page}
							disabled={page === filters.page}
							onClick={() => handlePageChange(page)}
						>
							{page}
						</motion.button>
					))}
					<motion.button
						whileHover={{
							border: '2px solid #000000',
						}}
						transition={{ duration: 0 }}
						className={`${styles.btn_next} ${totalPages === 1 ? 'hidden' : ''}`}
						onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
					>
						Next
					</motion.button>
				</div>
			</div>
		</section>
	)
}

export default Catalog
