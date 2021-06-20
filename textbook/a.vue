<template>
  <div>
    {{ counter }}
  </div>
</template>

<script>
import { displayProfile } from '@/utils'

export default defineComponent({
  data() {
    return {
      counter: 1
    }
  },

  setup() {
    const counter = ref(0)
    displayProfile();

    return { counter }
  },

  computed: {
    doubleCounter() {
      return this.counter * 2;
    }
  },
  
  methods: {
    addCounter: function() {
      this.counter++;
    },
    // X
    addCounter: () => {
      this.counter++;
    }
  },

  created: function() {

  },
  // X
  created: () => {

  }
})
</script>

<style>

</style>