import dbConnect from '@/lib/mongodb'
import Product from '@/models/Products'

export async function GET(request, { params }) {
	await dbConnect()

	const { id } = params

	try {
		const product = await Product.findById(id)

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
