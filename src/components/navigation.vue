<script setup>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { reactive } from "vue";
import { auth } from "@/config/firebase";

const userInfo = reactive({
  displayName: "",
  email: "",
  isLogin: false,
});
onAuthStateChanged(auth, (user) => {
  if (user) {
    userInfo.displayName = user.displayName;
    userInfo.email = user.email;
    userInfo.isLogin = true;
    console.log(userInfo.displayName + userInfo.email);
  } else {
    console.log("user signed out!");
  }
});
function logOut() {
  signOut(auth)
    .then(() => {
      console.log('logout successfully');
      userInfo.isLogin = false;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<template lang="">
  <div
    class="d-flex justify-content-between gap-5 text-decoration-none px-5 py-3 px-5 fs-3 fw-bold bg-white"
  >
    <div class="d-flex gap-5">
      <router-link to="/">Home</router-link>
      <router-link to="/Product">Product</router-link>
      <router-link to="/Introduction">Introduction</router-link>
      <router-link to="/Contact">Contact</router-link>
    </div>
    <div class="d-flex flex-row gap-5" v-if="userInfo.isLogin">
      <span class="fw-bold">{{ userInfo.displayName }}</span>
      <router-link to="/" @click="logOut()">Logout</router-link>
    </div>
    <div class="d-flex gap-5" v-else>
      <router-link to="/Login">Login</router-link>
      <router-link to="/Register">Register</router-link>
    </div>
  </div>
</template>

<style lang=""></style>
