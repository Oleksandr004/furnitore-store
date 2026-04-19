import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
	rememberMe: z.boolean(),
})

export const registerSchema = z.object({
	login: z.string().min(5, 'Login must be at least 5 characters long'),
	email: z.string().email(),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
})
