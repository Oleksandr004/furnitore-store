import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, 'Пароль минимум 8 символов'),
	rememberMe: z.boolean(),
})

export const registerSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, 'Пароль минимум 8 символов'),
	rememberMe: z.boolean(),
})
