<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = computed(() => store.state.product.products);
</script>
<template lang="">
  <div>
    <ol>
      <li
        class="fw-bold"
        v-for="product in products"
        :key="products.indexOf(product)"
      >
        {{ product }}
      </li>
    </ol>
  </div>
</template>

<style lang=""></style>
