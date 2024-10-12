<template>
  <div id="app">
    <header>
      <h1>My Shop</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/cart">Cart</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style>


header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #42b983;
  color: white;
}
nav {
  display: flex;
  gap: 10px;
}

</style>
