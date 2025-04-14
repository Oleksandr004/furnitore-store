'use client'
import styles from '@/components/home-page/InstagramFollow/InstagramFollow.module.scss'
import { motion } from 'framer-motion'

const InstagramFollow = () => {
	return (
		<section className={`pt-32 pb-32 ${styles.inst_follow}`}>
			<motion.h3
				initial={{
					opacity: 0,
					scale: 0.85,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				transition={{ duration: 0.6 }}
				className={`${styles.title} text-center`}
			>
				Our Instagram
			</motion.h3>
			<motion.p
				initial={{
					opacity: 0,
					scale: 0.85,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				transition={{ duration: 0.6 }}
				className={`${styles.subtitle} text-center`}
			>
				Follow our store on Instagram
			</motion.p>
			<motion.button
				whileHover={{ scale: 1.15, border: '1px solid #000000' }}
				className={`${styles.follow_btn}`}
			>
				<a href='#!'>Follow Us</a>
			</motion.button>
		</section>
	)
}

export default InstagramFollow
