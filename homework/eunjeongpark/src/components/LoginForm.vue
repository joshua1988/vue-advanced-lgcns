<template>
  <form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    @submit.prevent="login"
  >
    <div class="mb-4">
      <LoginFormInput
        :labelText="'Username'"
        :inputId="'username'"
        :inputType="'text'"
        :inputPlaceholder="'Username'"
        :inputValue="username"
        @input="updateUsername"
        />
    </div>

    <div class="mb-6">
      <LoginFormInput
        :labelText="'Password'"
        :inputId="'password'"
        :inputType="'password'"
        :inputPlaceholder="'******************'"
        :inputValue="password"
        :isError="isError"
        @input="updatePassword"
      >
        <template slot="message">
          <LoginFormMessage
            :message="'비밀번호를 6자 이상 입력해주세요.'"
            :isError="isError"
            v-if="isError"
          />
        </template>
      </LoginFormInput>
    </div>
    
    <div class="flex items-center justify-between">
      <LoginFormButton
        :buttonType="'submit'"
        :buttonText="'Sign In'"
        :isError="isError"
      />
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</template>

<script>
import { fetchUser } from '../api';
import LoginFormInput from './LoginFormInput.vue';
import LoginFormButton from './LoginFormButton.vue';
import LoginFormMessage from './LoginFormMessage.vue';

export default {
  components: {
    LoginFormInput,
    LoginFormButton,
    LoginFormMessage,
  },
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
    updateUsername(value) {
      this.username = value;
    },
    updatePassword(value) {
      this.password = value;
      this.validatePassword();
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