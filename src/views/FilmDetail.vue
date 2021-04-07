<template>
  <div>
    <CardFilmDetail :id="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardFilmDetail from "@/components/CardFilmDetail.vue";

export default defineComponent({
  name: "FilmDetail",
  components: {
    CardFilmDetail,
  },
  props: {
    id: String,
  },
});
</script>
