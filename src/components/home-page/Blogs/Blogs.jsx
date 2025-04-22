'use client'
import styles from '@/components/home-page/Blogs/Blogs.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const blogData = [
	{
		img: '/images/main-page/blogs/first.png',
		title: 'Going all-in with millennial design',
		alt: 'first blog logo',
		date: '12th Oct 2022',
		time: '5 min',
	},
	{
		img: '/images/main-page/blogs/second.png',
		title: 'How to build a minimal interior',
		alt: 'second blog logo',
		date: '12th Oct 2022',
		time: '5 min',
	},
	{
		img: '/images/main-page/blogs/third.png',
		title: 'Why color matters in design',
		alt: 'third blog logo',
		date: '12th Oct 2022',
		time: '5 min',
	},
]

const Blogs = () => {
	return (
		<section className='pt-14 pb-14 pl-4 pr-4'>
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

			<div className={styles.container}>
				<div
					className={`${styles.blogs_row} flex gap-8 flex-wrap justify-center`}
				>
					{blogData.map((blog, index) => (
						<div key={index}>
							<motion.div
								whileHover={{
									scale: 1.1,
									boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
									transition: { type: 'spring', stiffness: 300 },
								}}
							>
								<Image
									src={blog.img}
									alt={blog.alt}
									width={392}
									height={392}
									className={`${styles.img} mb-8`}
								/>
							</motion.div>
							<p className={styles.name}>{blog.title}</p>
							<Link href='#!' className={styles.read_more}>
								Read More
							</Link>
							<div className={styles.line} />
							<div className={`${styles.date_row} flex gap-5 flex-wrap`}>
								<div className='flex gap-3'>
									<Image
										width={20}
										height={24}
										src='/images/icons/time.png'
										alt='reading time icon'
									/>
									<p className={styles.time}>{blog.time}</p>
								</div>
								<div className='flex gap-3'>
									<Image
										width={20}
										height={24}
										src='/images/icons/calendar.png'
										alt='publication date icon'
									/>
									<p className={styles.date}>{blog.date}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<Link className={`mt-20 mb-5 ${styles.all_post_link}`} href='#!'>
					View All Post
				</Link>
				<div className={styles.post_link_line} />
			</div>
		</section>
	)
}

export default Blogs
