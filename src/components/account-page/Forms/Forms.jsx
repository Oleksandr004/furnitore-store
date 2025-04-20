import styles from '@/components/account-page/Forms/Forms.module.scss'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
const Forms = () => {
	return (
		<section className={styles.forms}>
			<div className={`${styles.container}`}>
				<div className={`${styles.row} flex justify-between flex-wrap`}>
					<LoginForm />
					<RegisterForm />
				</div>
			</div>
		</section>
	)
}

export default Forms
