<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  components: { LoginForm }
};
</script>

<style></style>
