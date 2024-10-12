<template>
  <div class="product_item">

    <div v-if="product" class="product_inner">
      <p ><strong>Name:</strong> {{ props.product.title }}</p>
      <p><strong>Price:</strong> ${{ props.product.price }}</p>
    </div>
    <div v-else>
      <p>Product not found.</p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { Product } from '../types/Product';

const props = defineProps<{ 
  product: Product 
}>();
</script>

<style>
.product_item {
  width: 250px;
}
p {
  white-space: nowrap;
  overflow: hidden;
  width: 230px;
}
</style>
