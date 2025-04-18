'use client'
import styles from '@/components/product-page/Herobanner/HeroBanner.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '@/store/features/cart/cartSlise'
import CartPopup from '@/components/ui/CartPopup/CartPopup'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroBanner = ({ name, description, image, price, id, imageUrl }) => {
	const [activeSize, setActiveSize] = useState('L')
	const [activeColor, setActiveColor] = useState()
	const [quantity, setQuantity] = useState(1)
	const [isPopUpOpen, setIsPopUpOpen] = useState(false)

	const dispatch = useDispatch()

	const handleSizeSelect = (size) => {
		setActiveSize(size)
	}
	const handleColorSelect = (color) => {
		setActiveColor(color)
	}

	const handleAddToCart = () => {
		dispatch(
			addItem({
				id: id,
				quantity: quantity,
				size: activeSize,
				color: activeColor,
				product: { name: name },
				price: price,
				imageUrl: imageUrl,
			})
		)
		setIsPopUpOpen(true)
	}
	const quantityPlus = () => {
		setQuantity(quantity + 1)
	}
	const quantityMinus = () => {
		if (quantity - 1 < 1) return
		setQuantity(quantity - 1)
	}

	const MotionLink = motion(Link)
	const baseUrl = window.location.origin

	return (
		<div className={`${styles.product}`}>
			<div className={`${styles.container}`}>
				<div className={`${styles.links_row} flex items-center pt-8 pb-8 `}>
					<MotionLink
						whileHover={{
							color: '#000000',
							scale: 1.05,
						}}
						className={`${styles.home_link}`}
						href='/'
					>
						Home
					</MotionLink>
					<img
						className='ml-5 mr-7'
						src={`${baseUrl}/images/icons/arrow.png`}
						alt='arrow img'
					/>
					<MotionLink
						whileHover={{
							color: '#000000',
							scale: 1.05,
						}}
						className={`${styles.shop_link}`}
						href='/shop'
					>
						Shop
					</MotionLink>
					<img
						className='ml-7 mr-8'
						src={`${baseUrl}/images/icons/arrow.png`}
						alt='arrow img'
					/>
					<div className={`${styles.line}`} />
					<p className={`${styles.name} ml-8`}>{name}</p>
				</div>
				<div className={`${styles.body} mt-8 flex justify-between flex-wrap`}>
					<div className={`${styles.img}`}>
						<Image
							height={500}
							width={423}
							src={`${baseUrl}${imageUrl}`}
							alt={`${baseUrl}${imageUrl}`}
						/>
					</div>
					<div className={`${styles.text} `}>
						<h2 className={`${styles.title}`}>{name}</h2>
						<p className={`${styles.price}`}>Rs.{price}</p>
						<p className={`${styles.description}`}>{description}</p>
						<p className={`${styles.size}`}>Size</p>
						<div className={`${styles.size_btns} flex gap-4`}>
							{['L', 'XL', 'XS'].map((size) => {
								return (
									<motion.button
										whileHover={{
											border: '1.5px solid black',
										}}
										style={{
											backgroundColor: activeSize === size ? '#FBEBB5' : '',
										}}
										onClick={() => handleSizeSelect(size)}
										key={size}
									>
										{size}
									</motion.button>
								)
							})}
						</div>
						<p className={`${styles.color}`}>Color</p>
						<div className={`${styles.color_btns} flex gap-4`}>
							{['#816DFA', '#000000', '#CDBA7B'].map((color) => {
								return (
									<button
										onClick={() => {
											handleColorSelect()
										}}
										key={color}
										style={{ background: color }}
										className={`${styles.color_btn}`}
									></button>
								)
							})}
						</div>
						<div
							className={`${styles.order_row} flex gap-5 mt-8 items-center flex-wrap`}
						>
							<div
								className={`${styles.quantity_btn} flex gap-9 relative justify-between`}
							>
								<a className={`${styles.btn_minus}`} onClick={quantityMinus}>
									-
								</a>
								<p className={`${styles.quantity}`}>{quantity}</p>
								<a className={`${styles.btn_plus}`} onClick={quantityPlus}>
									+
								</a>
							</div>
							<motion.button
								whileHover={{
									backgroundColor: '#000000',
									color: '#ffffff',
								}}
								className={`${styles.btn_add}`}
								onClick={handleAddToCart}
							>
								Add To Cart
							</motion.button>
							{isPopUpOpen && (
								<CartPopup onClose={() => setIsPopUpOpen(false)} />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroBanner
