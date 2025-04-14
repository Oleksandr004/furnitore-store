'use client'
import { Poppins } from 'next/font/google'
import styles from '@/components/layout/Header/Header.module.scss'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
})

const MotionLink = ({ href, children, ...props }) => {
	return (
		<Link href={href} passHref>
			<motion.div {...props}>{children}</motion.div>
		</Link>
	)
}

const MotionImg = ({ href, src, alt }) => {
	return (
		<Link href={href} passHref>
			<motion.img src={src} alt={alt} />
		</Link>
	)
}

const Header = ({ background }) => {
	const [isActive, setIsActive] = useState(false)
	const burgerMenuRef = useRef(null)
	const headerRef = useRef(null)

	useEffect(() => {
		if (isActive) {
			document.documentElement.classList.add('unscroll')
		} else {
			document.documentElement.classList.remove('unscroll')
		}
	}, [isActive])

	const handleBurgerMenu = () => {
		setIsActive((prev) => !prev)
	}

	return (
		<header
			ref={headerRef}
			className={`${poppins.className} ${background} ${
				isActive ? styles.header_active : ''
			}`}
		>
			<div className={`flex justify-between ${styles.container}`}>
				<div className={styles.helper} />
				<nav className={styles.nav}>
					<ul className={`flex ${styles.nav}`}>
						<li>
							<MotionLink whileHover={{ scale: 1.3 }} href='/'>
								Home
							</MotionLink>
						</li>
						<li>
							<MotionLink whileHover={{ scale: 1.3 }} href='/shop'>
								Shop
							</MotionLink>
						</li>
						<li>
							<MotionLink whileHover={{ scale: 1.3 }} href='#!'>
								About
							</MotionLink>
						</li>
						<li>
							<MotionLink whileHover={{ scale: 1.3 }} href='/contact'>
								Contact
							</MotionLink>
						</li>
					</ul>
				</nav>
				<div>
					<ul className={`flex gap-12 ${styles.icons_row}`}>
						<li>
							<Link href='/auth'>
								<motion.img
									whileHover={{ scale: 1.3 }}
									src='/images/icons/account.png'
									alt=''
								/>
							</Link>
						</li>
						<li>
							<a href='#!'>
								<motion.img
									whileHover={{ scale: 1.3 }}
									src='/images/icons/search.png'
									alt=''
								/>
							</a>
						</li>
						<li>
							<a href='#!'>
								<motion.img
									whileHover={{ scale: 1.3 }}
									src='/images/icons/wish.png'
									alt=''
								/>
							</a>
						</li>
						<li>
							<Link href='/cart'>
								<motion.img
									whileHover={{ scale: 1.3 }}
									src='/images/icons/basket.png'
									alt=''
								/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div
				onClick={handleBurgerMenu}
				ref={burgerMenuRef}
				className={`${styles.burger_menu} ${
					isActive ? styles.burger_active : ''
				}`}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</header>
	)
}

export default Header
