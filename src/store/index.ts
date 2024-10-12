import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    cart: [],
  }),
  actions: {
    async fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products') // TODO Поменять потом на новый Api
      this.products = await res.json()
    },
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(p => p.id !== productId)
    },
  },
})
