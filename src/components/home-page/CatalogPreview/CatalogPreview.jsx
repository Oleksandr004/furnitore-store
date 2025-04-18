'use client'
import styles from '@/components/home-page/CatalogPreview/CatalogPreview.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const CatalogPreview = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkScreen = () => {
			setIsMobile(window.innerWidth <= 768)
		}
		checkScreen()
		window.addEventListener('resize', checkScreen)

		return () => window.removeEventListener('resize', checkScreen)
	}, [])

	return (
		<section className='bg-[#FAF4F4]'>
			<div className={`${styles.container} flex `}>
				<motion.div
					initial={isMobile ? { x: 0 } : { x: -100 }}
					whileInView={isMobile ? { x: 0 } : { x: 0 }}
					transition={{ duration: isMobile ? 0 : 0.5 }}
					className={styles.left_side}
				>
					<Image
						className={styles.left_img}
						src='/images/main-page/left-table.png'
						height={289}
						width={435}
						alt='right-img'
					/>
					<p className={`${styles.title_left}`}>Side table</p>
					<p className={`${styles.subtitle}`}>View More</p>
					<div className={`${styles.line}`} />
				</motion.div>
				<motion.div
					initial={isMobile ? { x: 0 } : { x: 100 }}
					whileInView={isMobile ? { x: 0 } : { x: 0 }}
					transition={isMobile ? { x: 0 } : { duration: 0.5 }}
					className={styles.right_side}
				>
					<Image
						className={`${styles.right_img}`}
						src='/images/main-page/right-table.png'
						height={289}
						width={435}
						alt='right-img'
					/>
					<p className={`${styles.title_right}`}>Side table</p>
					<p className={`${styles.subtitle}`}>View More</p>
					<div className={`${styles.line}`} />
				</motion.div>
			</div>
		</section>
	)
}

export default CatalogPreview
