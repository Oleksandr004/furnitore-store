import mongoose, {
	Document,
	Model,
	model,
	models,
	Schema,
	type InferSchemaType,
} from 'mongoose'

export interface IUser extends Document {
	login: string
	email: string
	password?: string
	created_at: Date
}

const userSchema: Schema<IUser> = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		login: { type: String, required: true },
		password: {
			type: String,
			required: true,
		},
		created_at: { type: Date, default: Date.now },
	},
	{ timestamps: true },
)

export type TUser = InferSchemaType<typeof userSchema>

const User: Model<IUser> =
	(mongoose.models.User as Model<IUser>) ||
	mongoose.model<IUser>('User', userSchema)
export default User
