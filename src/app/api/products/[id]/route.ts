import dbConnect from '@/lib/mongodb'
import Product from '@/models/Products'
import type { NextRequest } from 'next/server'

interface RouteContext {
	params: Promise<{
		id: string
	}>
}

export async function GET(request: NextRequest, context: RouteContext) {
	await dbConnect()

	const { id } = await context.params

	try {
		const product = await Product.findById(id).lean()

		if (!product) {
			return new Response('Product not found', { status: 404 })
		}

		return new Response(JSON.stringify(product), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error) {
		return new Response('Failed to fetch product', { status: 500 })
	}
}
