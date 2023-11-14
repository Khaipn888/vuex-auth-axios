<!-- eslint-disable no-unused-vars -->
<script setup>
    import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

    const store = useStore();
    const keyword = ref('');
    let result = ref([])  ;
    watch(keyword, () => {result = store.getters.findProduct(keyword)});
    //const result = store.getters.findProduct()
</script>
<template lang="">
  <div class="">
    <label class="d-block fs-2 fw-bold mb-1" for="search">Find product here</label>
    <input id="search" type="text" class="rounded-5 p-2 d-block mb-3 w-100" v-model="keyword">
    <ol>
        <li v-for="product in result" :key="result.indexOf(product)">{{product}}</li>
    </ol>
  </div>
</template>

<style lang=""></style>
