<template>
  <div class="container">
    <div class="card has-text-left">
      <div class="columns m-2">
        <div class="column is-two-fifths">
          <div class="card-image">
            <figure class="image">
              <img
                class="sizeImg is-centered"
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
                  Director : {{ cardFilmDetails.directors }}
                </p>
                <p class="subtitle is-6">
                  Duration : {{ cardFilmDetails.runtimeStr }}
                </p>
                <div class="tags">
                  <span
                    v-for="genre in cardFilmDetails?.genres?.split(',')"
                    :key="genre"
                    class="tag is-primary"
                  >
                    {{ genre }}
                  </span>
                </div>
                <article class="media mt-2">
                  <h5 class="media-left">Abstract :</h5>
                  <p class="content">{{ cardFilmDetails.plot }}</p>
                </article>
                <article class="media">
                  <h5 class="media-left">Actors :</h5>
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
                    <span class="tag is-info"
                      >{{ cardFilmDetails.ratings?.imDb || "N/A" }} / 10
                    </span>
                    rottenTomatoes :
                    <span class="tag is-info"
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
  },
  methods: {
    // API calls
    async init() {
      this.cardFilmDetails = await movieWithId(String(this.id));
      this.url = await youtubeTrailerLink(String(this.id));
    },
    // Capacitor method call on click button to share the current film
    async shareMovie() {
      await Share.share({
        title: "Check that !",
        text: "This movie looks really nice !",
        url: window.location.href,
        dialogTitle: "Send this movie on :",
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
