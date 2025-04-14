'use client'
import styles from '@/components/account-page/RegisterForm/RegisterForm.module.scss'
import ConfirmationModal from '@/components/ui/ConfirmationModal/ConfirmationModal'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({ mode: 'onChange' })

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalMessage, setModalMessage] = useState('')

	const onSubmit = async (data) => {
		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})
			const result = response.json()
			if (response.ok) {
				setModalMessage(result.message || 'Registration successful!')
				setIsModalOpen(true)
			} else {
				setModalMessage(
					result.message || 'An error occurred during registration.'
				)
				setIsModalOpen(true)
			}
		} catch (e) {
			setIsModalOpen(true)
			setModalMessage(e.message || 'Something went wrong. Please try again.')
		}
	}

	return (
		<section>
			<div className={`${styles.container}`}>
				<h2 className={`${styles.title} mb-9`}>Register</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor='login'>
						<p className={`${styles.name_input} mb-5`}>Login:</p>
						<input
							className={`${styles.input}`}
							{...register('login', {
								required: 'Email required',
								minLength: {
									value: 5,
									message: 'Minimum of 5 characters',
								},
							})}
						/>
						{errors.login && (
							<p className={`${styles.errors_text}`}>{errors.login.message}</p>
						)}
					</label>
					<label htmlFor='email'>
						<p className={`${styles.name_input} mt-9 mb-5`}>Email:</p>
						<input
							{...register('email', {
								required: 'Enter email',
								pattern: {
									value: /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
									message: 'Enter a valid email',
								},
							})}
							className={`${styles.input}`}
						/>
						{errors.email && (
							<p className={`${styles.errors_text}`}>{errors.email.message}</p>
						)}
					</label>
					<label htmlFor='password'>
						<p className={`${styles.name_input} mt-9 mb-5`}>Password:</p>
						<input
							type='password'
							className={`${styles.input}`}
							{...register('password', {
								required: 'Password required',
								minLength: {
									value: 8,
									message: 'Minimum of 8 characters',
								},
							})}
						/>
						{errors.password && (
							<p className={`${styles.errors_text}`}>
								{errors.password.message}
							</p>
						)}
					</label>
					<label htmlFor='retypepassword'>
						<p className={`${styles.name_input} mt-9 mb-5`}>Retype Password:</p>
						<input
							type='password'
							className={`${styles.input}`}
							{...register('retypePassword', {
								required: 'Retype password required',
								validate: (value, { password }) =>
									value === password || 'The passwords dont match ',
							})}
						/>
						{errors.retypePassword && (
							<p className={`${styles.errors_text}`}>
								{errors.retypePassword.message}
							</p>
						)}
					</label>
					<button type='submit' className={`${styles.btn}`}>
						Register
					</button>
				</form>
				<ConfirmationModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					message={modalMessage}
				/>
			</div>
		</section>
	)
}

export default RegisterForm
