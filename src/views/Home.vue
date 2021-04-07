<template>
  <div class="container is-fluid">
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Currently in theaters :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="cardFilm in cardFilmsInTheater"
          :key="cardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :cardFilm="cardFilm"
          @click="showCardFilmDetails(cardFilm)"
        />
      </div>
    </section>
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Coming soon :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="cardFilm in cardFilmsComingSoon"
          :key="cardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :cardFilm="cardFilm"
          @click="showCardFilmDetails(cardFilm)"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardFilm from "@/components/CardFilm.vue";
import { movieInTheaters, movieComingSoon } from "../api/movie";

export default defineComponent({
  name: "Home",
  components: {
    CardFilm,
  },
  data() {
    return {
      cardFilmsInTheater: [],
      cardFilmsComingSoon: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // API calls
    async init() {
      this.cardFilmsInTheater = await movieInTheaters();
      this.cardFilmsComingSoon = await movieComingSoon();
    },
    // On click route to the films selected
    showCardFilmDetails(cardFilm: { id: number }) {
      this.$router.push({
        name: "FilmDetail",
        params: { id: cardFilm.id },
      });
    },
  },
});
</script>
