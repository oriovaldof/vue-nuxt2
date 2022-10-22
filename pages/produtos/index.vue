<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <NuxtLink to="/produtos/produto-a"> Produto A </NuxtLink>
    <NuxtLink to="/produtos/produto-b"> Produto B </NuxtLink>

    <div
    v-for="product in products"
    :key="product.id"
    class="border-b border-gray-400 py-3"
    >
      {{product.title}}
    </div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
      lorem, ultricies ut elit eu, fermentum accumsan augue. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Suspendisse viverra,
    </p>
  </div>
</template>
<script>
export default {
  name: "Produtos",
  data: () => ({}),
  async asyncData({$axios}) { //asyncData é executada antes do componente ser criado

    const products = await $axios.$get('posts?_limit=3');

    return {
      products
    };
  },
};
</script>
