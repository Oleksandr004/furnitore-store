import styles from '@/components/checkout-page/PlaceOrderSection/PlaceOrderSection.module.scss'
import OrderForm from '@/components/checkout-page/OrderForm/OrderForm.jsx'
import OrderSummary from '../OrderSummary/OrderSummary'

const PlaceOrderSection = () => {
	return (
		<section className='mt-24'>
			<div className={`${styles.container} flex justify-between flex-wrap`}>
				<OrderForm />
				<OrderSummary />
			</div>
		</section>
	)
}

export default PlaceOrderSection
