import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { MongoClient } from 'mongodb'

export async function POST(req) {
	let client

	try {
		const body = await req.json()

		const { email, password, rememberMe } = body
		if (!email || !password) {
			return new Response(
				JSON.stringify({ message: 'Email and password are required' }),
				{
					status: 400,
				}
			)
		}

		client = await MongoClient.connect(process.env.MONGODB_URI)
		const db = client.db()
		const userCollection = db.collection('users')

		const user = await userCollection.findOne({ email })
		if (!user) {
			console.log('nf')

			return new Response(JSON.stringify({ message: 'User not found' }), {
				status: 400,
			})
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password)
		if (!isPasswordCorrect) {
			console.log('pass')
			return new Response(JSON.stringify({ message: 'Wrong password' }), {
				status: 400,
			})
		}

		// Генерируем токен
		const expiresIn = rememberMe ? '1d' : '15m'
		if (!process.env.JWT_SECRET) {
			console.error('JWT_SECRET is not defined')
			return new Response(
				JSON.stringify({ message: 'Server configuration error' }),
				{
					status: 500,
				}
			)
		}

		const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
			expiresIn: expiresIn,
		})

		return new Response(
			JSON.stringify({ message: 'Login successful', token }),
			{ status: 200 }
		)
	} catch (error) {
		console.error('Server error:', error)
		return new Response(JSON.stringify({ message: 'Internal server error' }), {
			status: 500,
		})
	} finally {
		if (client) {
			client.close()
		}
	}
}
