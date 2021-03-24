<template>
  <!-- searchbar -->
  <section class="hero is-primary">
    <div class="hero-body columns">
      <div
        class="field has-addons column is-two-thirds-tablet is-three-fiths-desktop is-one-quarter-fullhd"
      >
        <div class="control is-expanded">
          <input v-model="query" class="input" type="text" placeholder="Find a movie" />
        </div>
        <div @click="onSearchClick()" class="control">
          <button class="button is-info" v-bind:class="{'is-loading': isLoading}" :disabled="queryIsEmpty || isLoading">
            Search
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- results -->

  <div v-if="results.length>0" class="columns is-multiline is-centered">
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
      isLoading: false,
      query: ""
    }
  },
  computed: {
    queryIsEmpty: function():boolean {
      return this.query.length==0
    }

  },
  methods: {
    async onSearchClick() {
      this.isLoading = true
      console.log(this.query)
      this.results = await search(this.query)
      this.isLoading = false
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
