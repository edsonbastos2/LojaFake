<template>
  <section>
    <h1>👍Compre ou Venda🤑</h1>
    <ProductList/>
  </section>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'
export default {
  components:{
    ProductList
  }
}
</script>

<style scoped>
h1{
  font-size: 2rem;
  color: var(--cor-secundaria);
  margin-top: 40px;
  text-align: center;
}
</style>
