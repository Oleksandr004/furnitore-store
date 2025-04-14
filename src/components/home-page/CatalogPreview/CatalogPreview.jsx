'use client'
import styles from '@/components/home-page/CatalogPreview/CatalogPreview.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CatalogPreview = () => {
	return (
		<section className='bg-[#FAF4F4]'>
			<div className={`${styles.container} flex `}>
				<motion.div
					initial={{
						x: -100,
					}}
					whileInView={{
						x: 0,
					}}
					transition={{ duration: 0.5 }}
					className={`pr-5 ${styles.left_side}`}
				>
					<Image
						className={`${styles.left_img}`}
						src='/images/main-page/left-table.png'
						width={435}
						height={347}
						alt='left-table'
					/>
					<p className={`${styles.title_left}`}>Side table</p>
					<p className={`${styles.subtitle}`}>View More</p>
					<div className={`${styles.line}`} />
				</motion.div>
				<motion.div
					initial={{
						x: 100,
					}}
					whileInView={{
						x: 0,
					}}
					transition={{ duration: 0.5 }}
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
