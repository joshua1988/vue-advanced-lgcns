<template>
  <div>
    <label :for="inputId" class="sr-only">Email address</label>
    <input
      :id="inputId"
      name="email"
      type="email"
      autocomplete="email"
      required
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder="Email address"
      @input="inputEmail"
      :value="email"
    />
    <slot></slot>
    <!-- v-model="email" -->
  </div>
</template>

<script>
export default {
  props: {
    email: String,
    inputId: String,
    inputType: String
  },
  // data() {
  //   return {
  //     email: ""
  //   };
  // },
  methods: {
    inputEmail(event) {
      // this.email = event.target.value;
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style></style>
