import mongoose, { Model, model, models, type InferSchemaType } from 'mongoose'

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
			type: Number,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
)

export type TProduct = InferSchemaType<typeof productsSchema>

const Product: Model<TProduct> =
	models.Product || model<TProduct>('Product', productsSchema)

export default Product
