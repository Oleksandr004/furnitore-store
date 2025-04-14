'use client'
import styles from '@/components/home-page/NewArrivals/NewArrivals.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const MotionImg = motion(Image)

const NewArrivals = () => {
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
							initial={{
								opacity: 0,
								x: 100,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{ duration: 0.3 }}
							className={`${styles.title}`}
						>
							New Arrivals<span>Asgaard sofa</span>
						</motion.p>
						<motion.button
							initial={{ opacity: 0, x: 100 }}
							whileHover={{
								backgroundColor: '#000000',
								color: 'rgb(255, 249, 229)',
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
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
