'use client'
import styles from '@/components/product-page/RelatedProducts/RelatedProducts.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const RelatedProducts = () => {
	return (
		<>
			<section className={`${styles.top_pick} `}>
				<h2 className={`${styles.title} text-center `}>Related Products</h2>

				<div className={`${styles.container} `}>
					<div className={`${styles.products_row} mb-16`}>
						<motion.div
							whileHover={{
								scale: 1.1,
							}}
						>
							<Image
								height={274.5}
								width={274.5}
								src='/images/items/Trenton modular sofa_3.png'
								alt=''
							/>
							<p className={`${styles.name}`}>Trenton modular sofa_3</p>
							<p className={`${styles.price}`}>Rs. 25,000.00</p>
						</motion.div>
						<motion.div
							whileHover={{
								scale: 1.1,
							}}
						>
							<Image
								height={274.5}
								width={274.5}
								src='/images/items/Granite dining table with dining chair.png'
								alt=''
							/>
							<p className={`${styles.name}`}>
								Granite dining table with <br /> dining chair
							</p>
							<p className={`${styles.price}`}>Rs. 25,000.00</p>
						</motion.div>
						<motion.div
							whileHover={{
								scale: 1.1,
							}}
						>
							<Image
								height={274.5}
								width={274.5}
								src='/images/items/Outdoor bar table and stool.png'
								alt=''
							/>
							<p className={`${styles.name}`}>
								Outdoor bar table and <br /> stool
							</p>
							<p className={`${styles.price}`}>Rs. 25,000.00</p>
						</motion.div>
						<motion.div
							whileHover={{
								scale: 1.1,
							}}
						>
							<Image
								height={274.5}
								width={274.5}
								src='/images/items/Plain console with teak mirror.png'
								alt=''
							/>
							<p className={`${styles.name}`}>
								Plain console with teak <br /> mirror
							</p>
							<p className={`${styles.price}`}>Rs. 25,000.00</p>
						</motion.div>
					</div>
					<p className={`text-center text-xl font-medium mb-5`}>View More</p>
					<div className={`${styles.line}`} />
				</div>
			</section>
		</>
	)
}

export default RelatedProducts
