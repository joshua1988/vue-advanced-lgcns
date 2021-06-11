<template>
  <div>
    <p>{{ person.name }}</p>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     person: null
  //   }
  // },

  props: {
    person: Object, // { name: '', age: '', skill: ''}
  },

  computed: {
    personName() {
      // if (!this.person) {
      //   return;
      // }
      return this.person?.name;
    }
  },
}
</script>

<style>

</style>