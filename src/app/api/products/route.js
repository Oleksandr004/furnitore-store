import dbConnect from '@/lib/mongodb'
import Products from '@/models/Products'

export async function GET(request) {
	await dbConnect()

	try {
		// Извлекаем параметры запроса из URL
		const { searchParams } = new URL(request.url)
		const limit = parseInt(searchParams.get('limit') || '16') // Лимит товаров на страницу
		const page = parseInt(searchParams.get('page') || '1') // Номер текущей страницы
		const sort = searchParams.get('sort') || 'default'

		// Вычисляем, сколько товаров пропустить
		const skip = (page - 1) * limit

		let sortOptions = {}
		if (sort === 'price_up') {
			sortOptions.price = 1
		} else if (sort === 'price_down') {
			sortOptions.price = -1
		}

		// Получаем товары с учётом пагинации
		const products = await Products.find({})
			.sort(sortOptions)
			.skip(skip)
			.limit(limit)

		// Подсчитываем общее количество товаров
		const totalProducts = await Products.countDocuments()

		// Вычисляем общее количество страниц
		const totalPages = Math.ceil(totalProducts / limit)

		// Формируем ответ с товарами и информацией о пагинации
		const response = {
			products,
			totalPages,
			currentPage: page,
			totalProducts,
		}

		// Возвращаем ответ в формате JSON
		return new Response(JSON.stringify(response), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error) {
		console.error('Error fetching products:', error)
		return new Response('Failed to fetch products', { status: 500 })
	}
}
