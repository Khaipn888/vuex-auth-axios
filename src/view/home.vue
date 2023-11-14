<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import addProduct from "@/components/addProduct.vue";
import productFilter from "@/components/productFilter.vue";
</script>
<template lang="">
  <div>
    <h1>This is Home page</h1>
    <div class="d-flex flex-row gap-5 mx-5 mt-5 ">
      <addProduct />
      <productFilter />
    </div>
  </div>
</template>

<style lang=""></style>
