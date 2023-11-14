<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
const newProduct = reactive({
  name: "",
});

const addNewProduct = (productName) => {
  store.dispatch("addNewProduct", productName);
  alert("add new product successfully");
  newProduct.name = "";
};
</script>
<template>
  <div class="">
    <label class="d-block fs-2 fw-bold mb-1" for="newProduct"
      >Add new Product
    </label>
    <input
      id="newProduct"
      type="text"
      class="rounded-3 p-2 d-block mb-3 w-100"
      v-model="newProduct.name"
    />
    <button
      class="rounded-3 btn btn-info"
      @click="addNewProduct(newProduct.name)"
    >
      Add
    </button>
  </div>
</template>

<style lang=""></style>
