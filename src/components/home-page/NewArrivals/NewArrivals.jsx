'use client'
import styles from '@/components/home-page/NewArrivals/NewArrivals.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const MotionImg = motion(Image)

const NewArrivals = () => {
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
		<section className=' bg-[#FFF9E5]'>
			<div className={`${styles.container}`}>
				<div className={`${styles.row} flex justify-between flex-wrap`}>
					<MotionImg
						initial={{
							opacity: 0,
						}}
						whileInView={{
							opacity: 1,
						}}
						transition={{ duration: 0.5 }}
						width={678}
						height={461}
						className={`${styles.img} mt-28 mb-16 pr-5`}
						src='/images/items/Asgaard sofa.png'
						alt='Asgaard sofa'
					/>
					<div className={`${styles.text}`}>
						<motion.p
							initial={isMobile ? { x: 0 } : { x: 100 }}
							whileInView={isMobile ? { x: 0 } : { x: 0 }}
							transition={{ duration: isMobile ? 0 : 0.3 }}
							className={`${styles.title}`}
						>
							New Arrivals<span>Asgaard sofa</span>
						</motion.p>
						<motion.button
							initial={
								isMobile ? { x: 0, opacity: 0 } : { x: -100, opacity: 0 }
							}
							whileHover={{
								backgroundColor: '#000000',
								color: 'rgb(255, 249, 229)',
							}}
							whileInView={
								isMobile ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
							}
							className={`${styles.order_btn}`}
						>
							<a href='#!'>Order Now</a>
						</motion.button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NewArrivals
