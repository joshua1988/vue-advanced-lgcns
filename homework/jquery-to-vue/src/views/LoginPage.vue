<template>
  <div>
    <div id="10" :id="divId"></div>


    <LoginFormInput
      labelText="Username"
      inputId="username"

      :labelText="'Username'"
      :inputId="'username'"
      :inputType="'text'"
      :inputPlaceholder="'Username'"
      :inputValue="username"
      @input="updateUsername"
    />

    <!-- #2 -->
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
            slot="message"
            :message="'비밀번호를 6자 이상 입력해주세요.'"
            :isError="isError"
            v-if="isError"
          />
        </template>
      </LoginFormInput>

      <!-- #3 -->
      <LoginFormButton
        :buttonType="'submit'"
        :buttonText="'Sign In'"
        :isError="isError"
      />
        <!-- :isLoading="isSubmitting" -->
  </div>
</template>

<script>
// @ts-check
import LoginForm from "../components/LoginForm.vue";
import { fetchUser} from '@/api/index'
// import {} from '@/components/LoginForm.vue'

export default {
  components: { LoginForm }, 
  data() {
    return {
      divId: 10
    }
  },
  methods: {
    fetchUserData() {
      // var a ='a'
      // a.charAt
      fetchUser('test', 1234);
    }
  }
}
</script>

<style>

</style>