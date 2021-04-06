<template>
  <div v-if="!isLoading" class="pageloader">
    <span class="title">Pageloader</span>
  </div>
  <div v-else class="container">
    <div class="card has-text-left">
      <div class="columns m-2">
        <div class="column is-two-fifths">
          <div class="card-image">
            <figure class="image">
              <img
                class="sizeImg"
                :src="cardFilmDetails.image"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="card-content pt-1">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ cardFilmDetails.fullTitle }}</p>
                <p>{{ cardFilmDetails.releaseState }}</p>
                <p class="subtitle is-6">
                  Réalisateur : {{ cardFilmDetails.directors }}
                </p>
                <p class="subtitle is-6">
                  Durée : {{ cardFilmDetails.runtimeStr }}
                </p>
                <span v-if="cardFilmDetails.genres" class="tag is-info">{{
                  cardFilmDetails.genres
                }}</span>
                <article class="media mt-2">
                  <h5 class="media-left">Résumé :</h5>
                  <p class="content">{{ cardFilmDetails.plotLocal }}</p>
                </article>
                <article class="media">
                  <h5 class="media-left">Acteurs :</h5>
                  <nav
                    class="breadcrumb has-bullet-separator"
                    aria-label="breadcrumbs"
                  >
                    <ul>
                      <li
                        v-for="star in cardFilmDetails.starList"
                        :key="star.id"
                      >
                        &nbsp;{{ star.name }}&nbsp;
                      </li>
                    </ul>
                  </nav>
                </article>
                <article class="media">
                  <h5 class="media-left">Notation</h5>
                  <div class="content">
                    imDb :
                    <span class="tag is-warning"
                      >{{ cardFilmDetails.ratings?.imDb || "N/A" }} / 10
                    </span>
                    rottenTomatoes :
                    <span class="tag is-warning"
                      >{{ cardFilmDetails.ratings?.rottenTomatoes || "N/A" }} /
                      100
                    </span>
                  </div>
                </article>
                <article class="media">
                  <div class="media-left">
                    <a :href="url.videoUrl">
                      <img :src="ytImage" class="logo" alt="trailer" />
                    </a>
                  </div>
                  <div class="media-right">
                    <img
                      alt="share"
                      :src="shareImage"
                      class="logo"
                      @click="shareMovie"
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { movieWithId, youtubeTrailerLink } from "../api/movie";
import { Plugins } from "@capacitor/core";
const { Share } = Plugins;

export default defineComponent({
  name: "CardFilmDetail",
  props: {
    id: String,
  },
  data() {
    return {
      isLoading: true,
      ytImage: "./assets/youtube.png",
      shareImage: "./assets/share.png",
      cardFilmDetails: [],
      url: "",
    };
  },
  mounted() {
    this.init();
    // this.trailer();
  },
  methods: {
    async trailer() {
      // this.url = await youtubeTrailerLink(String(this.id));
    },
    async init() {
      this.cardFilmDetails = await movieWithId(String(this.id));
    },
    // Capacitor method call on click button to share the current film
    async shareMovie() {
      await Share.share({
        title: "Regarde ça !",
        text: "Ce film a l'air vraiment hyper sympa !",
        url: window.location.href,
        dialogTitle: "Envoyer ce film sur :",
      });
    },
  },
});
</script>

<style scoped lang="scss">
.sizeImg {
  max-width: 50vh;
}

.logo {
  max-width: 4vh;
  cursor: pointer;
}
</style>
