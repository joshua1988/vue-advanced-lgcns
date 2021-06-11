<template>
  <p>{{ str }}</p>
</template>

<script>
export default {
  data() {
    return {
      str: 'hi',
      // apiUrl: 'users/1'
    }
  },
  methods: {
    fetchUser() {
      fetchUserById().then().catch()
      // const url = 'users/1'
      // axios.get(this.apiUrl).then().catch();
    }
  }
}
</script>

<style>

</style>