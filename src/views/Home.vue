<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button v-on:click="inTheaters">Test</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { movieInTheaters, movieComingSoon } from "../api/movie";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    async inTheaters() {
      const movies = await movieInTheaters();
    },
    async comingSoon() {
      const movies = await movieInTheaters();
    }
  }
});
</script>
