<template>
    <div>
      <h1>Your Cart</h1>
      <div v-for="product in cart" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} USD</p>
        <button @click="removeFromCart(product.id)">Remove</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useProductStore } from '../store'
  
  const store = useProductStore()
  const cart = store.cart
  
  function removeFromCart(productId) {
    store.removeFromCart(productId)
  }
  </script>
  