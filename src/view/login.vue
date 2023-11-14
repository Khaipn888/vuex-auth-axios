<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from "vue-router";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { reactive } from "vue";

const router = useRouter();
const formData = reactive({
  email: "",
  password: "",
  err: ""
});
function onSubmit() {
  signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      router.push({ name: "Home", params: {} });
    })
    .catch((error) => {
      formData.err = error.message;
      console.log(formData.err);
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
        <label for="email" class="">Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="border rounded-2 p-2 w-full"
          placeholder="Your Email address..."
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
          Sign In
        </button>
      </div>
      <p class="text-danger justify-content-center d-flex " v-if="formData.err">{{formData.err}}</p>
    </form>
  </div>
</template>

<style lang=""></style>
