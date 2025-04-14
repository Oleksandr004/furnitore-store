'use client'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/store/features/cart/cartSlise'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
})
