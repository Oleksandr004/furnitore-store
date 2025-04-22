'use client'
import styles from '@/components/home-page/TopPick/TopPick.module.scss'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
})

const MotionLink = motion(Link)

const TopPick = () => {
	return (
		<section className={`${styles.top_pick} ${poppins.className}`}>
			<motion.h2
				initial={{
					scale: 0.85,
					opacity: 0,
				}}
				whileInView={{
					scale: 1,
					opacity: 1,
				}}
				transition={{ duration: 0.45 }}
				className='text-center text-4xl'
			>
				Top Picks For You
			</motion.h2>
			<motion.p
				initial={{
					scale: 0.85,
					opacity: 0,
				}}
				whileInView={{
					scale: 1,
					opacity: 1,
				}}
				transition={{ duration: 0.45 }}
				className={`text-center mt-3 font-medium ${styles.subtitle}`}
			>
				Find a bright ideal to suit your taste with our great selection of
				suspension, floor, and table lights.
			</motion.p>
			<div className={`${styles.container}`}>
				<div className={styles.grid}>
					<MotionLink
						href='/shop/672bd1240eece6e60a540022'
						whileHover={{
							scale: 1.1,
						}}
					>
						<Image
							height={282}
							width={282}
							src='/images/items/Trenton modular sofa_3.png'
							alt='Trenton modular sofa_3'
						/>
						<p className={styles.name}>Trenton modular sofa_3</p>
						<p className={styles.price}>Rs. 25,000.00</p>
					</MotionLink>
					<MotionLink
						href='/shop/672bd1240eece6e60a540023'
						whileHover={{
							scale: 1.1,
						}}
					>
						<Image
							height={282}
							width={282}
							src='/images/items/Granite dining table with dining chair.png'
							alt='Granite dining table with dining chair'
						/>
						<p className={styles.name}>
							Granite dining table with <br /> dining chair
						</p>
						<p className={styles.price}>Rs. 25,000.00</p>
					</MotionLink>

					<MotionLink
						href='/shop/672bd1240eece6e60a540024'
						whileHover={{
							scale: 1.1,
						}}
					>
						<Image
							height={282}
							width={282}
							src='/images/items/Outdoor bar table and stool.png'
							alt='Outdoor bar table and stool'
						/>
						<p className={styles.name}>
							Outdoor bar table and <br /> stool
						</p>
						<p className={styles.price}>Rs. 25,000.00</p>
					</MotionLink>

					<MotionLink
						href='/shop/672bd1240eece6e60a540025'
						whileHover={{
							scale: 1.1,
						}}
					>
						<Image
							height={282}
							width={282}
							src='/images/items/Plain console with teak mirror.png'
							alt='Plain console with teak mirror'
						/>
						<p className={styles.name}>
							Plain console with teak <br /> mirror
						</p>
						<p className={styles.price}>Rs. 25,000.00</p>
					</MotionLink>
				</div>
				<Link
					href='/shop'
					className={`text-center text-xl font-medium ${styles.link}`}
				>
					View More
				</Link>
				<div className={styles.line} />
			</div>
		</section>
	)
}

export default TopPick
