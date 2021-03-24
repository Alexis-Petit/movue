<template>
  <!-- searchbar -->
  <section class="hero is-primary">
    <div class="hero-body columns">
      <div
        class="field has-addons column is-two-thirds-tablet is-three-fiths-desktop is-one-quarter-fullhd"
      >
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="Find a repository" />
        </div>
        <div class="control">
          <a class="button is-info">
            Search
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- results -->
  <div class="columns is-multiline is-centered">
    <CardSearchResult
      v-for="cardResult in results"
      :key="cardResult.id"
      class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
      :cardResult="cardResult"
      @click="showCardFilmDetails(cardResult)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { search } from "@/api/movie";
import CardSearchResult from "@/components/CardSearchResult.vue";

export default defineComponent({
  name: "Search",
  components: {CardSearchResult},
  data() {
    return {
      results: [],
    }
  },
  mounted() {
    this.init()

  },
  methods: {
    async init() {
      this.results = await search("home alone");
    },
    showCardFilmDetails(cardResult: { id: any; }) {
      this.$router.push({
        name: "CardFilmDetails",
        params: { id: cardResult.id },
      });
    },
  }
});
</script>
