<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

const router = useRouter();
const formData = reactive({
  username: "",
  password: "",
  email: "",
});

function onSubmit() {
  createUserWithEmailAndPassword(auth, formData.email,formData.password, formData.username)
    .then((userCredential) => {
      // Signed up
      updateProfile(userCredential.user, {displayName: formData.username })
      const user = userCredential.user;
      console.log(user);
      router.push({ name: "Home", params: {} });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    });
  
}
</script>

<template>
  <div class="w-50 py-5 mx-auto px-5">
    <form
      @submit.prevent="onSubmit()"
      class="w-full bg-white rounded-3 shadow-lg gap-3 mx-auto d-flex p-5 flex-column justify-content-between"
    >
      <div class="d-flex flex-column">
        <label for="username" class="">User Name</label>
        <input
          v-model="formData.username"
          type="text"
          id="username"
          class="border rounded-2 p-2 w-full"
          placeholder="Your user name..."
        />
      </div>
      <div class="d-flex flex-column">
        <label for="email" class="">Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="border rounded-2 p-2 w-full"
          placeholder="Your email..."
        />
      </div>
      <div class="d-flex flex-column">
        <label for="password" class="">Password</label>
        <input
          v-model="formData.password"
          type="password"
          id="password"
          class="border rounded-2 p-2 w-full"
          placeholder="Your password..."
        />
      </div>
      <div class="d-flex justify-content-center">
        <button
          type="submit"
          class="w-25 mx-auto rounded-3 border border-primary bg-primary text-white fw-bold"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<style lang=""></style>
