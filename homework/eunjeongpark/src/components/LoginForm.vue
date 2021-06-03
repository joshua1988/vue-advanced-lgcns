<template>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login()">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Username" v-model="username">
    </div>

    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
        :class="{ 'border-red': isError }" id="password" type="password" placeholder="******************"
        v-model="password" @keyup="validatePassword()">
      <p class="text-red text-xs italic" v-if="isError">비밀번호를 6자 이상 입력해주세요.</p>
    </div>
    
    <div class="flex items-center justify-between">
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit" :disabled="isError">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</template>

<script>
import { fetchUser } from '../api';

export default {
  data() {
    return {
      username: '',
      password: '',
      isError: false,
    }
  },
  methods: {
    login() {
      fetchUser(this.username, this.password)
        .then((response) => {
          console.log(response);
          alert(`${response.data.name}님 안녕하세요.`);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => this.clearInput());
    },
    clearInput() {
      this.username = '';
      this.password = '';
    },
    validatePassword() {
      this.isError = this.password.length < 6;
    }
  }
}
</script>

<style>

</style>