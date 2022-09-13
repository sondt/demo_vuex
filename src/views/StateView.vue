<template>
  <div class="state">
    <h1>State</h1>
    <p>Name: {{ getName }}</p>
    <p>
      <input type="text" name="name" id="name" placeholder="Enter name">
    </p>
    <p>
      <button @click="updateName">Update Name</button>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "StateView",
  computed: {
    ...mapGetters(['getName'])
  },
  updated() {
    alert('updated')
  },
  methods: {
    updateName() {
      this.$store.dispatch('setName', document.getElementById("name").value);
    },
  },
}

</script>

<style scoped>

</style>