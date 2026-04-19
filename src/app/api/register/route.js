import bcrypt from 'bcrypt'
import { MongoClient } from 'mongodb'
import { dbConnect } from '../../../lib/mongodb'

export async function POST(req) {
	const { login, email, password } = await req.json()

	if (!login || !email || !password) {
		return new Response(
			JSON.stringify({ message: 'Fill in all fields' }, { status: 400 }),
		)
	}

	const client = await MongoClient.connect(process.env.MONGODB_URI)
	const db = client.db()
	// const db = dbConnect()
	const userCollections = db.collection('users')

	const existingUser = await userCollections.findOne({ email })
	console.log('existingUser', existingUser._id)

	if (existingUser._id) {
		console.log(123)
		client.close()
		return new Response(
			JSON.stringify({ message: 'The user already exists' }), // Скобка закрылась!
			{ status: 400 }, // Второй аргумент для Response
		)
	}
	const hashedPassword = await bcrypt.hash(password, 5)
	try {
		await userCollections.insertOne({
			email,
			password: hashedPassword,
			login,
			created_at: new Date(),
		})
	} catch (error) {
		console.log(error)
	}
	client.close()
	return new Response(
		{
			message: 'Registration successful',
		},
		{ status: 201 },
	)
}
