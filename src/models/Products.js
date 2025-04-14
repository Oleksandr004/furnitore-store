import mongoose from 'mongoose'

const productsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Product =
	mongoose.models.products || mongoose.model('products', productsSchema)

export default Product
