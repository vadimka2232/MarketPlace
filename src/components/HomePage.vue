<template>
  <div class="product-list">
    <div class="product-list__container">
      <div v-for="product in products" :key="product.id" class="product-list__item">
        <ProductComponent :product="product" />
        <router-link :to="`/product/${product.id}`" class="product-list__link">View Details</router-link>
      </div>
    </div>
    <button @click="onButton()" class="product-list__button">Load More</button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useProductStore } from '../store'
import ProductComponent from './ProductItem.vue';

const store = useProductStore();
const products = computed(() => store.products);

onMounted(() => {
  if (!products.value.length) {
    store.fetchProducts();
  }
});

function onButton() {
  debugger
}
</script>

<style>
.product-list {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-list__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  flex: 1;
}

.product-list__item {
  display: flex;
  flex-direction: column;
  width: 250px;
  max-height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s; 
}

.product-list__item:hover {
  transform: scale(1.05);
}

.product-list__button {
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.product-list__link {
  text-decoration: none; /* Убираем подчеркивание */
  color: #007bff; /* Цвет ссылки */
}
</style>
