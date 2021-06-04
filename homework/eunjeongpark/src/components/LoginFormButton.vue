<template>
  <button 
    class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    :type="buttonType"
    :disabled="isError"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonType: String,
    buttonText: String,
    isError: Boolean,
  }
}
</script>

<style>

</style>