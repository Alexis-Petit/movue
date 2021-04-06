<template>
  <div class="container has-text-centered mt-5">
    <img src="@/assets/not-found.png" width="300" alt="search not found logo" />
    <p class="title">
      No results :(
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NoResult",
});
</script>