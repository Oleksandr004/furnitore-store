'use client'
import { Poppins } from 'next/font/google'
import styles from '@/components/layout/Header/Header.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import Image from 'next/image'

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
})

interface TMotionLinkProps extends HTMLMotionProps<'div'> {
	href: string
}

const MotionLink = ({ href, children, ...props }: TMotionLinkProps) => {
	return (
		<Link href={href}>
			<motion.div {...props}>{children}</motion.div>
		</Link>
	)
}

type TProps = {
	background?: string
}

const Header = ({ background }: TProps) => {
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		const html = document.documentElement
		isActive
			? html.classList.add('unscroll')
			: html.classList.remove('unscroll')

		return () => html.classList.remove('unscroll')
	}, [isActive])

	const handleBurgerMenu = () => {
		setIsActive((prev) => !prev)
	}

	return (
		<header
			className={`${poppins.className} ${background} ${
				isActive ? styles.header_active : ''
			}`}
		>
			<div className={`flex justify-between ${styles.container}`}>
				<div className={styles.helper} />
				<nav>
					<ul className={`flex ${styles.nav}`}>
						{[
							{ id: 1, title: 'Home', href: '/' },
							{ id: 2, title: 'Shop', href: '/shop' },
							{ id: 3, title: 'About', href: '/about' },
							{ id: 4, title: 'Contact', href: '/contact' },
						].map((el) => (
							<li key={el.id}>
								<MotionLink whileHover={{ scale: 1.3 }} href={el.href}>
									{el.title}
								</MotionLink>
							</li>
						))}
					</ul>
				</nav>
				<div>
					<ul className={`flex gap-12 ${styles.icons_row}`}>
						<li>
							<Link href='/auth'>
								<motion.div whileHover={{ scale: 1.3 }}>
									<Image
										src='/images/icons/account.png'
										alt='profile account logo'
										height={19}
										width={24}
									/>
								</motion.div>
							</Link>
						</li>
						<li>
							<Link href='#!'>
								<motion.div whileHover={{ scale: 1.3 }}>
									<Image
										width={25}
										height={25}
										src='/images/icons/search.png'
										alt='search logo'
									/>
								</motion.div>
							</Link>
						</li>
						<li>
							<Link href='#!'>
								<motion.div whileHover={{ scale: 1.3 }}>
									<Image
										src='/images/icons/wish.png'
										alt='wishlist logo'
										height={23}
										width={26}
									/>
								</motion.div>
							</Link>
						</li>
						<li>
							<Link href='/cart'>
								<motion.div whileHover={{ scale: 1.3 }}>
									<Image
										src='/images/icons/basket.png'
										alt='shopping cart logo'
										height={23}
										width={25}
									/>
								</motion.div>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<button
				onClick={handleBurgerMenu}
				className={`${styles.burger_menu} ${
					isActive ? styles.burger_active : ''
				}`}
			>
				<span />
				<span />
				<span />
			</button>
		</header>
	)
}

export default Header
