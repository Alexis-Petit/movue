<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="columns is-multiline">
      <InTheaters
        v-for="inTheater in inTheaters"
        :key="inTheater.id"
        class="column is-half-tablet is-one-quarter-desktop is-one-quarter-widescreen"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InTheaters from "@/components/InTheaters.vue"; // @ is an alias to /src
import { movieInTheaters, movieComingSoon } from "../api/movie";
import axios from "axios";

const API_KEY = process.env.VUE_APP_NASA_API_KEY;
const VUE_APP_IN_THEATERS = process.env.VUE_APP_IN_THEATERS;

export default defineComponent({
  name: "Home",
  components: {
    InTheaters,
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      inTheaters: new Array()
    };
  },
  mounted() {
    axios
      .get("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=512042839_composteurs-quartier-nantes-metropole&rows=100")
      .then(response => {
        this.inTheaters = response.data.records;
        console.log(this.inTheaters);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    async inTheatersMovie() {
      this.inTheaters = Object.assign(this.inTheaters, await movieInTheaters());
      // console.log(this.inTheaters);
    },
  },
});
</script>
