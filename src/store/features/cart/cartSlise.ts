'use client'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type TCartItem = {
	id: number
	price: string
	quantity: number
	totalPrice: number
	imageUrl: string
	product: {
		name: string
	}
}

export interface CartState {
	items: TCartItem[]
	totalPrice: number
}

const initialState: CartState = {
	items: [],
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<TCartItem>) => {
			const { id, price, quantity } = action.payload

			const existingItem = state.items.find((item) => item.id === id)

			const cleanedPrice =
				typeof price === 'string'
					? parseInt((price as string).replace(/[,.]/g, ''), 10)
					: price

			if (existingItem) {
				existingItem.quantity += quantity
				existingItem.totalPrice += cleanedPrice * quantity
			} else {
				state.items.push({
					...action.payload,
					price: String(cleanedPrice),
					totalPrice: cleanedPrice * quantity,
				})
			}

			state.totalPrice += cleanedPrice * quantity
		},
		removeItem: (state, action: PayloadAction<number>) => {
			const id = action.payload
			state.items = state.items.filter((item) => item.id !== id)

			state.totalPrice = state.items.reduce(
				(sum, item) => sum + item.totalPrice,
				0,
			)
		},
		clearCart: (state) => {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
