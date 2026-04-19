import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
	throw new Error('MONGODB_URI не определен в .env.local')
}

interface MongooseCache {
	conn: typeof mongoose | null
	promise: Promise<typeof mongoose> | null
}

declare global {
	var mongoose: MongooseCache
}

let cached = global.mongoose

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
	if (cached.conn) {
		return cached.conn
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		}

		cached.promise = mongoose
			.connect(MONGODB_URI, opts)
			.then((mongoose) => {
				return mongoose
			})
			.catch((err) => {
				console.error('MongoDB connection error:', err)
				throw err
			})
	}

	cached.conn = await cached.promise
	return cached.conn
}

export default dbConnect
