<template>
  <div class="container">
    <div class="card has-text-left">
      <div class="columns is-left m-3">
        <div class="column is-half">
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
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ cardFilmDetails.fullTitle }}</p>
                <p>{{ cardFilmDetails.releaseState }}</p>
                <p class="subtitle is-6">
                  Réalisateur : {{ cardFilmDetails.directors }}
                </p>
                <article class="media">
                  <h5 class="media-left">Résumé :</h5>
                  <p class="content">{{ cardFilmDetails.plot }}</p>
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
                <a :href="url">Bande annonce</a>
                <br />
                <span class="tag is-info m-2">{{
                  cardFilmDetails.genres
                }}</span>
                <span class="tag is-info">{{
                  cardFilmDetails.runtimeStr
                }}</span>
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
import { youtubeTrailerLink } from "../api/movie";

export default defineComponent({
  name: "CardFilmDetail",
  props: {
    cardFilmId: {},
  },
  data() {
    return {
      cardFilmDetails: {},
      url: "",
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      response: new Array(),
    };
  },
  mounted() {
    this.init();
    this.trailer();
    this.cardFilmDetails = this.response[0];
  },
  methods: {
    async trailer() {
      this.url = await youtubeTrailerLink(String(this.cardFilmId));
    },
    async init() {
      // A modifier : aller chercher l'api https://imdb-api.com/en/API/Name/
      this.response = [
        {
          id: "tt7888964",
          title: "Nobody",
          fullTitle: "Nobody (2021)",
          year: "2021",
          releaseState: "March 26",
          image:
            "https://imdb-api.com/images/original/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6699_AL_.jpg",
          runtimeMins: "92",
          runtimeStr: "1h 32mins",
          plot:
            "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lord.",
          contentRating: "R",
          imDbRating: "",
          imDbRatingCount: "",
          metacriticRating: "",
          genres: "Action, Crime, Drama",
          genreList: [
            {
              key: "Action",
              value: "Action",
            },
            {
              key: "Crime",
              value: "Crime",
            },
            {
              key: "Drama",
              value: "Drama",
            },
          ],
          directors: "Ilya Naishuller",
          directorList: [
            {
              id: "nm5820154",
              name: "Ilya Naishuller",
            },
          ],
          stars:
            "Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen, Christopher Lloyd",
          starList: [
            {
              id: "nm0644022",
              name: "Bob Odenkirk",
            },
            {
              id: "nm0148516",
              name: "Aleksey Serebryakov",
            },
            {
              id: "nm0001567",
              name: "Connie Nielsen",
            },
            {
              id: "nm0000502",
              name: "Christopher Lloyd",
            },
          ],
        },
      ];
    },
  },
});
</script>

<style scoped lang="scss">
.sizeImg {
  max-width: 50vh;
}
</style>
