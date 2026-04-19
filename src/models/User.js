import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: String,
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true },
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
