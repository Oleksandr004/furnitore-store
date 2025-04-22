'use client'
import { Poppins } from 'next/font/google'
import styles from '@/components/layout/Header/Header.module.scss'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
})

const MotionLink = ({ href, children, ...props }) => {
	return (
		<Link href={href}>
			<motion.div {...props}>{children}</motion.div>
		</Link>
	)
}

const Header = ({ background }) => {
	const [isActive, setIsActive] = useState(false)

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
			className={`${poppins.className} ${background} ${
				isActive ? styles.header_active : ''
			}`}
		>
			<div className={`flex justify-between ${styles.container}`}>
				<div className={styles.helper} />
				<nav>
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
			<div
				onClick={handleBurgerMenu}
				className={`${styles.burger_menu} ${
					isActive ? styles.burger_active : ''
				}`}
			>
				<span />
				<span />
				<span />
			</div>
		</header>
	)
}

export default Header
