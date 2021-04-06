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
          <p class="title is-4">{{ cardResult.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardResult",
  props: ["cardResult"],
  data() {
    return {
      imgSrc: this.cardResult.image,
    };
  },
  mounted() {
    // this.imgSrc = String(this.cardFilm.image).slice(0, this.cardFilm.image.length - 3);
    this.imgSrc = String(this.cardResult.image).slice(
      0,
      this.cardResult.image.length - 4
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
