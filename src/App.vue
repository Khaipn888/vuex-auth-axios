<script setup>
  import navigation from "./components/navigation.vue"
</script>
<template>
  <div class=" ">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<style>
a {
  text-decoration: none !important;
}
</style>
