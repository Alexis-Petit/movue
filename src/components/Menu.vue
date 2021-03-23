<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': mobileMenuActive }"
        @click="mobileMenuActive = !mobileMenuActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': mobileMenuActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"> Home </router-link>
        <router-link class="navbar-item" to="/search"> Search </router-link>
        <router-link class="navbar-item" to="/top"> Top </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">

export default {
  name: "Menu",
  data() {
    return {
      mobileMenuActive: false,
    };
  },
};
</script>

<style scoped lang="scss"></style>
