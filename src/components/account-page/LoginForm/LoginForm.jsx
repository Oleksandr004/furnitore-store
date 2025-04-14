'use client'
import styles from '@/components/account-page/LoginForm/LoginFoorm.module.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
	const router = useRouter()

	const { register, handleSubmit } = useForm({ mode: 'onChange' })
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const onSubmit = async (data) => {
		setLoading(true)
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})
			const result = await response.json()

			if (response.ok) {
				const storage = data.rememberMe ? localStorage : sessionStorage
				storage.setItem('token', result.token)
				router.push('/profile')
			} else {
				setErrorMessage(result.message)
			}
		} catch (e) {
			setErrorMessage('Something went wrong. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<section>
			<div className={`${styles.container}`}>
				<h2 className={`${styles.title} mb-9`}>Log In</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor='username'>
						<span className={`${styles.name_input} `}>Email address:</span>
						<input
							{...register('email')}
							className={`${styles.input} mb-9 mt-5`}
						/>
					</label>
					<label htmlFor='password'>
						<span className={`${styles.name_input} `}>Password:</span>
						<input
							{...register('password')}
							type='password'
							className={`${styles.input} mt-5`}
						/>
					</label>
					<label htmlFor='rememberMe' className='flex gap-5 mt-11'>
						<input
							{...register('rememberMe')}
							type='checkbox'
							name='rememberMe'
							id='rememberMe'
						/>
						<span className='select-none'>Remember me</span>
					</label>
					<button className={`${styles.btn}`} disabled={loading}>
						{loading ? 'Loading...' : 'Log In'}
					</button>
					<a className={`${styles.lost_pass} ml-8`} href='#!'>
						Lost Your Password?
					</a>
				</form>
			</div>
		</section>
	)
}

export default LoginForm
