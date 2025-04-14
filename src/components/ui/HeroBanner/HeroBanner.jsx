'use client'
import styles from '@/components/ui/HeroBanner/HeroBanner.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroBanner = ({ title, href }) => {
	return (
		<div className={`${styles.background}`}>
			<motion.div
				initial={{ scale: 0.7 }}
				animate={{
					scale: 0.95,
				}}
				className={`${styles.container}`}
			>
				<Image
					height={77}
					width={77}
					className={`${styles.logo} `}
					src='/images/shop-page/logo.png'
					alt='logo'
				/>
				<h2 className={`${styles.title}`}>{title}</h2>
				<div className={`${styles.links_row} flex `}>
					<Link className={`${styles.home_link}`} href='/'>
						Home
					</Link>
					<Image
						alt='arrow'
						src='/images/icons/arrow.png'
						width={14}
						height={8}
					/>
					<Link className={`${styles.shop_link}`} href={href}>
						{title}
					</Link>
				</div>
			</motion.div>
		</div>
	)
}

export default HeroBanner
