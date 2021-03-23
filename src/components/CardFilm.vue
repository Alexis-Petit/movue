<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by3 ">
        <img :src="CardFilm.image" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content ">
      <div class="media ">
        <div class="media-content">
          <p class="title is-4">{{ CardFilm.title }}</p>
          <p class="subtitle is-6">Réalisateur : {{ CardFilm.directors}}</p>
          <p class="subtitle is-6">Acteurs : {{ CardFilm.stars}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardFilm",
  props: {
    CardFilm: {}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
