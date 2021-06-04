<template>
  <div>
    <label
      class="block text-grey-darker text-sm font-bold mb-2"
      :for="inputId"
    >
      {{ labelText }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      :id="inputId"
      :type="inputType"
      :class="inputClassObject"
      :placeholder="inputPlaceholder"
      :value="inputValue"
      @keyup="handleInput"
    />
    <slot name="message"></slot>
  </div>
</template>

<script>
export default {
  props: {
    labelText: String,
    inputId: String,
    inputType: String,
    inputPlaceholder: String,
    inputValue: String,
    isError: Boolean,
  },
  computed: {
    inputClassObject() {
      return {
        'border-red': this.isError,
        'mb-3': this.inputType === 'password'
      }
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>