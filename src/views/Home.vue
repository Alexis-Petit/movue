<template>
  <div class="container is-fluid">
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Actuellement au cinéma :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="CardFilm in CardFilmsInTheater"
          :key="CardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :CardFilm="CardFilm"
        />
      </div>
    </section>
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Prochainement :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="CardFilm in CardFilmsComingSoon"
          :key="CardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :CardFilm="CardFilm"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardFilm from "@/components/CardFilm.vue"; // @ is an alias to /src
import { movieInTheaters, movieComingSoon } from "../api/movie";

export default defineComponent({
  name: "Home",
  components: {
    CardFilm,
  },
  data() {
    return {
      CardFilmsInTheater: [],
      CardFilmsComingSoon: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.CardFilmsInTheater = await movieInTheaters();
      this.CardFilmsComingSoon = await movieComingSoon();
    },
  },
});
</script>
