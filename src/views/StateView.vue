<template>
  <div class="state">
    <h1>State</h1>
    <p>Name: {{ $store.getters.getName }}</p>
    <p>
      <input type="text" name="name" id="name" placeholder="Enter name">
    </p>
    <p>
      <button @click="updateName">Update Name</button>
    </p>
  </div>
</template>

<script>
import store from "@/store";
import { mapState } from 'vuex'

export default {
  name: "StateView",
  computed: mapState({
    // arrow functions can make the code very succinct!
    myName: store.state.name,
  }),
  methods: {
    updateName() {
      //this.$store.commit("setName", document.getElementById("name").value);
      store.state.name = document.getElementById("name").value;

    },
  },
}

</script>

<style scoped>

</style>