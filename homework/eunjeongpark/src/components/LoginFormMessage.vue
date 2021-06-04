<template>
  <p
    class="text-xs italic"
    :class="{ 'text-red' : isError }"
  >
    {{ message }}
  </p>
</template>

<script>
export default {
  props: {
    message: String,
    isError: Boolean
  }
}
</script>

<style>

</style>