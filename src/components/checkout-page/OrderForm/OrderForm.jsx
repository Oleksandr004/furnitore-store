import styles from '@/components/checkout-page/OrderForm/OrderForm.module.scss'
import { useForm } from 'react-hook-form'

const OrderForm = () => {
	const inputs = [
		'Company Name (Optional)',
		'Street address',
		'Town / City ',
		'ZIP code',
		'Phone',
		'Email address',
	]
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	return (
		<section className={`${styles.billing_details} pr-6 `}>
			<div className={`${styles.container}`}>
				<h2 className={`${styles.title}`}>Billing details</h2>
				<form>
					<div className={`${styles.full_name} flex gap-8`}>
						<label>
							<p className={`${styles.input_name}`}>First name</p>
							<input className={`${styles.input} max-w-52`} type='text' />
						</label>
						<label>
							<p className={`${styles.input_name}`}>Last name</p>
							<input className={`${styles.input} max-w-52`} type='text' />
						</label>{' '}
					</div>
					{inputs.map((input) => {
						return (
							<label>
								<p className={`${styles.input_name}`}>{input}</p>
								<input className={`${styles.input}`} type='text' />
							</label>
						)
					})}
				</form>
			</div>
		</section>
	)
}

export default OrderForm
