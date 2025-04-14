import styles from '@/components/ui/CartPopup/CartPopup.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CartPopup = ({ onClose }) => {
	const { items, totalQuantity, totalPrice } = useSelector(
		(state) => state.cart
	)
	const router = useRouter()
	const [showArrow, setShowArrow] = useState(false)
	const itemsRef = useRef(null)

	const handleViewCart = () => {
		onClose()
		router.push('/cart')
	}
	const handleCheckout = () => {
		onClose()
		router.push('/checkout')
	}

	useEffect(() => {
		if (itemsRef.current) {
			const isScrollable =
				itemsRef.current.scrollHeight > itemsRef.current.clientHeight
			setShowArrow(isScrollable)
		}
	}, [items])

	return (
		<div className={`${styles.popup_overlay}`}>
			<div className={`${styles.body} relative`}>
				<h2 className={`${styles.title}`}>Shopping Cart</h2>
				<button onClick={() => onClose()}>
					<Image
						className='absolute top-9 right-10'
						src='/images/icons/close popup.png'
						height={19}
						width={16.63}
						alt=''
					/>
				</button>
				<div className={`${styles.top_line}`} />
				<ul ref={itemsRef} className={`flex flex-col gap-3  ${styles.items}`}>
					{items.map((item) => (
						<li key={item.id}>
							<div className='flex gap-8 items-center'>
								<img className={styles.img} src={item.imageUrl} alt='' />
								<div>
									<p className={`${styles.name} mb-2`}>{item.product.name}</p>
									<p>{`${item.quantity} x ${item.price}`}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
				{showArrow && (
					<Image
						src='/images/icons/arrow-down.png'
						className={styles.arrow_down}
						width={40}
						height={40}
						alt='arrow-down'
					/>
				)}
				<div className='flex gap-24 ml-8 absolute bottom-28'>
					<p className={`${styles.subtotal}`}>Subtotal</p>
					<p className={`${styles.total_price}`}>
						Rs. <span>{`${totalPrice}`}</span>
					</p>
				</div>
				<div className={`${styles.bottom_line}`} />
				<div className='flex gap-7 absolute bottom-7 ml-7'>
					<button onClick={() => handleViewCart()} className={`${styles.btn}`}>
						View Cart
					</button>
					<button onClick={() => handleCheckout()} className={`${styles.btn}`}>
						Checkout
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartPopup
