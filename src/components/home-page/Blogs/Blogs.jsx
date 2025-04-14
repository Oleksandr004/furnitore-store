'use client'
import styles from '@/components/home-page/Blogs/Blogs.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Blogs = () => {
	const MotionImage = motion(Image)

	return (
		<section className={`pt-14 pb-14 pl-4 pr-4`}>
			<motion.h3
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className={`${styles.title} text-center mb-3`}
			>
				Our Blogs
			</motion.h3>
			<p className={`${styles.subtitle} text-center`}>
				Find a bright ideal to suit your taste with our great selection
			</p>
			<div className={`${styles.container}`}>
				<div
					className={`${styles.blogs_row} flex gap-8 flex-wrap justify-center`}
				>
					<div>
						<MotionImage
							whileHover={{
								scale: 1.1,
								boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
								transition: { type: 'spring', stiffness: 300 },
							}}
							width={392}
							height={392}
							className={`${styles.img} mb-8`}
							src='/images/main-page/blogs/first.png'
							alt=''
						/>
						<p className={`${styles.name}`}>
							Going all-in with millennial design
						</p>
						<a href='#!' className={`${styles.read_more}`}>
							Read More
						</a>
						<div className={styles.line} />
						<div className={`${styles.date_row} flex gap-5 flex-wrap`}>
							<div className='flex gap-3'>
								<Image
									height={24}
									width={20}
									src='/images/icons/time.png'
									alt=''
								/>
								<p className={`${styles.time}`}>5 min</p>
							</div>
							<div className='flex gap-3'>
								<Image
									width={20}
									height={24}
									src='/images/icons/calendar.png'
									alt='calendar'
								/>
								<p className={`${styles.date}`}>12th Oct 2022</p>
							</div>
						</div>
					</div>
					<div>
						<MotionImage
							whileHover={{
								scale: 1.1,
								boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
								transition: { type: 'spring', stiffness: 300 },
							}}
							width={392}
							height={392}
							className={`${styles.img} mb-8`}
							src='/images/main-page/blogs/second.png'
							alt=''
						/>
						<p className={`${styles.name}`}>
							Going all-in with millennial design
						</p>
						<a href='#!' className={`${styles.read_more}`}>
							Read More
						</a>
						<div className={styles.line} />
						<div className={`${styles.date_row} flex gap-5 flex-wrap`}>
							<div className='flex gap-3'>
								<Image
									width={20}
									height={24}
									src='/images/icons/time.png'
									alt='time'
								/>
								<p className={`${styles.time}`}>5 min</p>
							</div>
							<div className='flex gap-3'>
								<Image
									width={20}
									height={24}
									src='/images/icons/calendar.png'
									alt='calendar'
								/>
								<p className={`${styles.date}`}>12th Oct 2022</p>
							</div>
						</div>
					</div>
					<div>
						<MotionImage
							whileHover={{
								scale: 1.1,
								boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
								transition: { type: 'spring', stiffness: 300 },
							}}
							width={392}
							height={392}
							className={`${styles.img} mb-8`}
							src='/images/main-page/blogs/third.png'
							alt=''
						/>
						<p className={`${styles.name}`}>
							Going all-in with millennial design
						</p>
						<a href='#!' className={`${styles.read_more}`}>
							Read More
						</a>
						<div className={styles.line} />
						<div className={`${styles.date_row} flex gap-5 flex-wrap`}>
							<div className='flex gap-3'>
								<Image
									height={24}
									width={20}
									src='/images/icons/time.png'
									alt='time'
								/>
								<p className={`${styles.time}`}>5 min</p>
							</div>
							<div className='flex gap-3'>
								<Image
									width={20}
									height={24}
									src='/images/icons/calendar.png'
									alt='calendar'
								/>
								<p className={`${styles.date}`}>12th Oct 2022</p>
							</div>
						</div>
					</div>
				</div>

				<a className={`mt-20 mb-5  ${styles.all_post_link}`} href='#!'>
					View All Post
				</a>
				<div className={`${styles.post_link_line} `} />
			</div>
		</section>
	)
}

export default Blogs
