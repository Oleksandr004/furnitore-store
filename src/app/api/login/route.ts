import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { loginSchema } from '@/lib/validation/zod-schemas'
import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const validationResult = loginSchema.safeParse(body)

		if (!validationResult.success) {
			return NextResponse.json(
				{
					message: 'Validate failed',
					errors: validationResult.error.flatten().fieldErrors,
				},
				{ status: 400 },
			)
		}

		const { email, password, rememberMe } = validationResult.data

		await dbConnect()

		const user = await User.findOne({ email }).lean()

		if (!user || !user.password) {
			return NextResponse.json(
				{ message: 'Invalid credentials' },
				{ status: 400 },
			)
		}

		if (!user) {
			return NextResponse.json({ message: 'User not found' }, { status: 400 })
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password)
		if (!isPasswordCorrect) {
			console.log('pass')
			return NextResponse.json(
				{ message: 'Wrong password' },
				{
					status: 400,
				},
			)
		}

		const expiresIn = rememberMe ? '1d' : '15m'
		if (!process.env.JWT_SECRET) {
			console.error('JWT_SECRET is not defined')
			return NextResponse.json(
				{ message: 'Server configuration error' },
				{ status: 500 },
			)
		}

		const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
			expiresIn: expiresIn,
		})

		return NextResponse.json(
			{ message: 'Login successful', token },
			{ status: 200 },
		)
	} catch (error) {
		console.error('Server error:', error)

		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 },
		)
	}
}
