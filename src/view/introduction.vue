<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import axios from "axios";
import { ref } from "vue";

let users = ref([]);
const user = ref({});
const userId = ref(1);
const userInfo = ref({
  name: "",
  email: "",
});
function getAllUser() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => (users.value = res.data));
  console.log(users.value);
}
function getOneUser() {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
    .then((res) => (user.value = res.data));
  console.log(user.value);
}

function postUser() {
  axios
    .post(`https://jsonplaceholder.typicode.com/users`, userInfo.value)
    .then((response) => console.log(response));
}

</script>
<template lang="">
  <div class="">
    <h1>This is Introduction page</h1>
    <h2>Call API with axios</h2>
    <div class="d-flex flex-row justify-content-around ">
      <div class="">
        <button @click="getAllUser()">GET all user</button>
        <ul>
          <li v-for="item in users" :key="item.id">
            {{ `Name: ${item.name}, Email: ${item.email}` }}
          </li>
        </ul>
      </div>
      <div class="">
        <div class="d-flex">
          <button @click="getOneUser()">GET 1 user</button>
          <span> &nbsp; with id </span>
          <input
            type="text"
            v-model="userId"
            class="mx-2"
            style="width: 30px"
          />
          <span>(id from 1 to 10)</span>
        </div>
        <ul v-if="user.name">
          <li>
            {{ `Name: ${user.name}, Email: ${user.email}` }}
          </li>
        </ul>
      </div>
      <div class="">
        <form @submit.prevent="postUser()" class="bg-light-subtle p-3">
          <label for="name" class="d-block">Name</label>
          <input id="name" type="text" class="" v-model="userInfo.name" />
          <label for="email" class="d-block">Email</label>
          <input id="email" type="email" class="" v-model="userInfo.email" />
          <button type="submit" class="d-block mt-3">POST user</button>
        </form>
      </div>
    </div>
    <div class="d-flex justify-content-around mt-5 pt-5">
      
      
    </div>
  </div>
</template>

<style lang=""></style>
