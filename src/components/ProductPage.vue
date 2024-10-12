<template>
  <div v-if="product" class="product">
    <div class="product_cart">
      <div>
        <img :src="product.image" alt="Product Image" class="product-image" />
      </div>
      <div>
        <h1 class="product-title">{{ product.title }}</h1> <!-- Заголовок товара -->
        <p class="product-description">{{ product.description }}</p> <!-- Описание товара -->
        <h2 class="product-price">{{ product.price }} ₽</h2> <!-- Цена товара -->
      </div>
    </div>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '../store'
import { useRoute } from 'vue-router'

const store = useProductStore()
const route = useRoute()
const product = store.products.find(p => p.id === parseInt(route.params.id))

function addToCart() {
  store.addToCart(product)
}

onMounted(() => {
  if (!store.products.length) {
    store.fetchProducts()
  }
})
</script>

<style>
.product {
  max-width: 1280px;
  margin: 0 auto;
}

.product-image {
  width: 550px;
  height: 550px;
}

.product_cart {
  display: flex;
  gap: 60px;
  flex-direction: row;
}

.product-title {
  font-size: 36px; /* Увеличенный размер шрифта для названия */
  font-weight: bold; /* Жирный шрифт */
  margin-bottom: 10px; /* Отступ снизу */
}

.product-description {
  font-size: 26px; /* Уменьшенный размер шрифта для описания */
  color: #666; /* Цвет текста описания */
  margin-bottom: 10px; /* Отступ снизу для описания */
}

.product-price {
  font-size: 24px; /* Увеличенный размер шрифта для цены */
  color: #333; /* Цвет текста */
  margin-top: 10px; /* Отступ сверху */
}
</style>
