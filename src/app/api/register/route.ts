import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
import { registerSchema } from '@/lib/validation/zod-schemas'

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()

		const validationResult = registerSchema.safeParse(body)

		if (!validationResult.success) {
			return NextResponse.json(
				{
					message: 'Validate failed',
					errors: validationResult.error.flatten().fieldErrors,
				},
				{ status: 400 },
			)
		}

		const { email, login, password } = validationResult.data

		await dbConnect()

		const existingUser = await User.findOne({ email }).lean()

		if (existingUser) {
			return NextResponse.json(
				{ message: 'The user already exists' },
				{ status: 400 },
			)
		}

		const hashedPassword = await bcrypt.hash(password, 5)

		await User.create({
			email,
			password: hashedPassword,
			login,
			created_at: new Date(),
		})

		return NextResponse.json(
			{ message: 'Registration successful' },
			{ status: 201 },
		)
	} catch (error) {
		console.error('Registration error:', error)
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 },
		)
	}
}
