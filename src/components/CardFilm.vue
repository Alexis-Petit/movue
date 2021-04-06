<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="imgSrc" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content ">
      <div class="media ">
        <div class="media-content">
          <p class="title is-4">{{ cardFilm.title }}</p>
          <p class="subtitle is-6">Director : {{ cardFilm.directors }}</p>
          <p class="subtitle is-6">Actors : {{ cardFilm.stars }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardFilm",
  props: ["cardFilm"],
  data() {
    return {
      imgSrc: this.cardFilm.image,
    };
  },
  mounted() {
    // this.imgSrc = String(this.cardFilm.image).slice(0, this.cardFilm.image.length - 3);
    this.imgSrc = String(this.cardFilm.image).slice(
      0,
      this.cardFilm.image.length - 4
    );
  },
});
</script>

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
img {
  cursor: pointer;
}
</style>
