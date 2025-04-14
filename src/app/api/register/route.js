import bcrypt from 'bcrypt'
import { MongoClient } from 'mongodb'

export async function POST(req) {
	const { login, email, password } = await req.json()

	if (!login || !email || !password) {
		return new Response(
			JSON.stringify({ message: 'Fill in all fields' }, { status: 400 })
		)
	}

	const client = await MongoClient.connect(process.env.MONGODB_URI)
	const db = client.db()
	const userCollections = db.collection('users')

	const existingUser = await userCollections.findOne({ email })

	if (existingUser) {
		client.close()
		return new Response(
			JSON.stringify({ message: 'The user already exists' }, { status: 400 })
		)
	}
	const hashedPassword = await bcrypt.hash(password, 5)
	await userCollections.insertOne({
		email,
		password: hashedPassword,
		login,
		createdAt: new Date(),
	})
	client.close()
	return new Response(
		{
			message: 'Registration successful',
		},
		{ status: 201 }
	)
}
