<template>
  <div class="container is-fluid">
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Trending movies :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="cardFilm in trendingMovies"
          :key="cardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :cardFilm="cardFilm"
          @click="showDetail(cardFilm)"
        />
      </div>
    </section>
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Trending TV shows :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="cardFilm in trendingSeries"
          :key="cardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :cardFilm="cardFilm"
          @click="showDetail(cardFilm)"
        />
      </div>
    </section>
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Top movies :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="cardFilm in topMovies"
          :key="cardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :cardFilm="cardFilm"
          @click="showDetail(cardFilm)"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardFilm from "@/components/CardFilm.vue"; // @ is an alias to /src
import { top250, mostPopularMovies, mostPopularSeries } from "../api/movie";

export default defineComponent({
  name: "Top",
  components: {
    CardFilm,
  },
  data() {
    return {
      topMovies: [],
      trendingMovies: [],
      trendingSeries: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.topMovies = await top250()
      this.trendingMovies = await mostPopularMovies();
      this.trendingSeries = await mostPopularSeries();
    },
    showDetail(cardFilm: { id: any; }) {
      this.$router.push({
        name: "CardFilmDetails",
        params: { id: cardFilm.id },
      });
    },
  },
});
</script>
