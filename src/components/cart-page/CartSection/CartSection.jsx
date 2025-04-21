'use client'
import styles from '@/components/cart-page/CartSection/CartSection.module.scss'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { removeItem } from '@/store/features/cart/cartSlise'
import { motion } from 'framer-motion'

const CartSection = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { items, totalPrice } = useSelector((state) => state.cart)

	const deleteItem = (id) => {
		dispatch(removeItem(id))
	}

	return (
		<section className='mt-20'>
			<div className={styles.container}>
				<div className='flex gap-5 flex-wrap'>
					<div className={`${styles.cart_products} relative`}>
						<div
							className={`${styles.cart_products_headers} flex justify-around items-center mb-14`}
						>
							<p>Product</p>
							<p>Price</p>
							<p>Quantity</p>
							<p>Subtotal</p>
						</div>
						{items.map((item) => (
							<ul key={item.id}>
								<li className={`${styles.products_list} `}>
									<div className={`flex items-center`}>
										<Image
											className={styles.products_list_img}
											src={item.imageUrl}
											height={106}
											width={106}
											alt=''
										/>
										<p className={`${styles.name} mb-2`}>{item.product.name}</p>
									</div>
									<p className={styles.price}>Rs.{item.price}</p>
									<p className={styles.quantity}>{item.quantity}</p>
									<p className={styles.subtotal_items}>
										Rs.
										{parseFloat(item.price.replace(/,/g, '')) * item.quantity}
									</p>
									<button
										onClick={() => deleteItem(item.id)}
										className={styles.remove_btn}
									>
										<Image
											src='/images/icons/remove.png'
											height={22}
											width={21}
											alt=''
										/>
									</button>
									<div className={styles.line} />
								</li>
							</ul>
						))}
					</div>
					<div className={styles.total_card}>
						<h2 className={styles.total_card_title}>Cart Totals</h2>
						<p className={`${styles.subtotal} mb-8`}>
							Subtotal <span>Rs. 0</span>
						</p>
						<p className={styles.total}>
							Total <span>Rs. {totalPrice}</span>
						</p>
						<motion.button
							whileHover={{
								backgroundColor: '#000000',
								color: 'rgb(255, 249, 229)',
							}}
							onClick={() => router.push('/checkout')}
							className={styles.check_btn}
						>
							Check Out
						</motion.button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CartSection
