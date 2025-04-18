'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			const { id, price, quantity } = action.payload

			const existingItem = state.items.find((item) => item.id === id)

			const cleanedPrice =
				typeof price === 'string'
					? parseInt(price.replace(/[,.]/g, ''), 10)
					: price

			if (existingItem) {
				existingItem.quantity += quantity
				existingItem.totalPrice += cleanedPrice * quantity
			} else {
				state.items.push({
					...action.payload,

					totalPrice: cleanedPrice * quantity,
				})
			}

			state.totalPrice += cleanedPrice * quantity
		},
		removeItem: (state, action) => {
			const id = action.payload
			state.items = state.items.filter((item) => item.id !== id)

			state.totalPrice = state.items.reduce(
				(sum, item) => sum + item.totalPrice,
				0
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
