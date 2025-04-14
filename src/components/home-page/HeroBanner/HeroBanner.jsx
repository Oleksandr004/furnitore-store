'use client'
import { Poppins } from 'next/font/google'
import style from './HeroBanner.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
})

const MotionImg = motion(Image)

const HeroBanner = () => {
	return (
		<div className={`bg-[#FBEBB5]`}>
			<div className={`flex ${style.container} flex justify-between`}>
				<motion.div className={`${poppins.className} ${style.text}`}>
					<motion.h1
						initial={{
							opacity: 0,
							x: -100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{ duration: 0.3 }}
						className={style.title}
					>
						Rocket single <br /> seater
					</motion.h1>
					<motion.a
						style={{ display: 'block' }}
						initial={{
							opacity: 0,
							x: -100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{ duration: 0.3 }}
						className={style.subtitle}
						href='#!'
					>
						Shop Now
					</motion.a>
					<motion.div
						initial={{
							opacity: 0,
							x: -100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{ duration: 0.3 }}
						className={`${style.line}`}
					/>
				</motion.div>
				<MotionImg
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					transition={{ duration: 0.5 }}
					className={style.main__img}
					style={{ left: 100 }}
					src='/images/main-page/main-chair.png'
					alt='main-chair'
					height={653}
					width={653}
				/>
			</div>
		</div>
	)
}

export default HeroBanner
