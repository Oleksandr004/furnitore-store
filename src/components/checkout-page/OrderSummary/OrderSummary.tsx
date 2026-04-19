'use client'
import styles from '@/components/checkout-page/OrderSummary/OrderSummary.module.scss'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const OrderSummary = () => {
	const { items, totalQuantity, totalPrice } = useSelector(
		(state) => state.cart
	)

	return (
		<div className={`${styles.container} mt-14`}>
			<div className={`${styles.order_summary} flex justify-between`}>
				<div className={`${styles.order_summary_left_column}`}>
					<p className={`${styles.column_title}`}>Product</p>
					<ul>
						{items.map((item, index) => (
							<li key={index} className={styles.product_name}>
								{item.product.name}
							</li>
						))}
					</ul>
					<p className={styles.total_title}>Total</p>
				</div>
				<div className={`${styles.order_summary_right_column}`}>
					<p className={`${styles.column_title}`}>Subtotal</p>
					<ul>
						{items.map((item, index) => (
							<li key={index} className={styles.product_price}>
								{item.price}
							</li>
						))}
					</ul>
					<p className={styles.total_price}>Rs. {totalPrice}</p>
				</div>
			</div>
			<div className={`${styles.line}`} />
			<div className={styles.payment_methods}>
				<label className={styles.payment_option}>
					<input
						className='mr-3'
						type='radio'
						name='payment'
						value='direct_bank_transfer'
						defaultChecked
					/>
					<span>Direct Bank Transfer</span>
				</label>
				<p className={styles.payment_info}>
					Make your payment directly into our bank account. Please use your
					Order ID as the payment reference. Your order will not be shipped
					until the funds have cleared in our account.
				</p>
				<label className={styles.payment_option}>
					<input
						className='mr-3'
						type='radio'
						name='payment'
						value='cash_on_delivery'
					/>
					<span>Direct Bank Transfer</span>
				</label>
				<label className={styles.payment_option}>
					<input
						className='mr-3'
						type='radio'
						name='payment'
						value='cash_on_delivery'
					/>
					<span>Cash On Delivery</span>
				</label>
			</div>
			<p className={styles.privacy_policy}>
				Your personal data will be used to support your experience throughout
				this website, to manage access to your account, and for other purposes
				described in our{' '}
				<a href='' className={styles.link}>
					privacy policy
				</a>
				.
			</p>
			<motion.button
				whileHover={{
					backgroundColor: '#000000',
					color: '#fff',
				}}
				className={styles.place_order_btn}
			>
				Place order
			</motion.button>
		</div>
	)
}

export default OrderSummary
