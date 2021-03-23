<template>
  <div class="container is-fluid">
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Actuellement au cinéma :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="cardFilm in cardFilmsInTheater"
          :key="cardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :cardFilm="cardFilm"
          @click="showCardFilmDetails(cardFilm)"
        />
      </div>
    </section>
    <section class="section">
      <div class="content level">
        <h1 class="level-left">Prochainement :</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <CardFilm
          v-for="cardFilm in cardFilmsComingSoon"
          :key="cardFilm.id"
          class="column is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen m-3"
          :cardFilm="cardFilm"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardFilm from "@/components/CardFilm.vue"; // @ is an alias to /src
import { movieInTheaters, movieComingSoon } from "../api/movie";

export default defineComponent({
  name: "Home",
  components: {
    CardFilm,
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      cardFilmsInTheater: new Array(),
      cardFilmsComingSoon: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.cardFilmsInTheater = [
        {
          id: "tt7888964",
          title: "Nobody",
          fullTitle: "Nobody (2021)",
          year: "2021",
          releaseState: "March 26",
          image: "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX128_CR0,4,128,176_AL_.jpg",
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
        {
          id: "tt2241557",
          title: "Shoplifters of the World",
          fullTitle: "Shoplifters of the World (2021)",
          year: "2021",
          releaseState: "March 26",
          image:
            "https://imdb-api.com/images/original/MV5BMjVlNDYxNjktZmYwNS00NjY0LWI2YTgtZWEzMGUwYTcwN2RmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6699_AL_.jpg",
          runtimeMins: "90",
          runtimeStr: "1h 30mins",
          plot:
            "1987. Denver, Co. One crazy night in the life of four friends reeling from the sudden demise of iconic British band The Smiths, while the local airwaves are hijacked at gunpoint by an impassioned Smiths fan.",
          contentRating: "Not Rated",
          imDbRating: "",
          imDbRatingCount: "",
          metacriticRating: "",
          genres: "Comedy, Drama",
          genreList: [
            {
              key: "Comedy",
              value: "Comedy",
            },
            {
              key: "Drama",
              value: "Drama",
            },
          ],
          directors: "Stephen Kijak",
          directorList: [
            {
              id: "nm0452772",
              name: "Stephen Kijak",
            },
          ],
          stars: "Helena Howard, Elena Kampouris, James Bloor, Nick Krause",
          starList: [
            {
              id: "nm8473220",
              name: "Helena Howard",
            },
            {
              id: "nm4502102",
              name: "Elena Kampouris",
            },
            {
              id: "nm5914751",
              name: "James Bloor",
            },
            {
              id: "nm1975228",
              name: "Nick Krause",
            },
          ],
        },
        {
          id: "tt11263022",
          title: "The Seventh Day",
          fullTitle: "The Seventh Day (2021)",
          year: "2021",
          releaseState: "March 26",
          image:
            "https://imdb-api.com/images/original/MV5BNjc0YjEzZTctMDZiNC00M2FkLTlhZjgtMWUzOTVmNmViNmI5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.6699_AL_.jpg",
          runtimeMins: "87",
          runtimeStr: "1h 27mins",
          plot:
            "A renowned exorcist who teams up with a rookie priest for his first day of training. As they plunge deeper into hell on earth, the lines between good and evil blur, and their own demons emerge.",
          contentRating: "R",
          imDbRating: "",
          imDbRatingCount: "",
          metacriticRating: "",
          genres: "Horror",
          genreList: [
            {
              key: "Horror",
              value: "Horror",
            },
          ],
          directors: "Justin P. Lange",
          directorList: [
            {
              id: "nm3336170",
              name: "Justin P. Lange",
            },
          ],
          stars: "Guy Pearce, Keith David, Stephen Lang, Robin Bartlett",
          starList: [
            {
              id: "nm0001602",
              name: "Guy Pearce",
            },
            {
              id: "nm0202966",
              name: "Keith David",
            },
            {
              id: "nm0002332",
              name: "Stephen Lang",
            },
            {
              id: "nm0000862",
              name: "Robin Bartlett",
            },
          ],
        },
        {
          id: "tt5114840",
          title: "Six Minutes to Midnight",
          fullTitle: "Six Minutes to Midnight (2020)",
          year: "2020",
          releaseState: "March 26",
          image:
            "https://imdb-api.com/images/original/MV5BZGY1YWI4NzEtNmYyMS00NWFjLTk3YTgtNTkzNWFkZDlmNmZkXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_Ratio0.6699_AL_.jpg",
          runtimeMins: "99",
          runtimeStr: "1h 39mins",
          plot:
            "UK, Aug. 15, 1939: 17 days before WWII, an English teacher and his camera disappear on a coastal boarding school with 20 German teen girls. Miller gets the job 6 days later, secretly trying to find out what happened.",
          contentRating: "PG-13",
          imDbRating: "",
          imDbRatingCount: "",
          metacriticRating: "",
          genres: "Drama, Thriller",
          genreList: [
            {
              key: "Drama",
              value: "Drama",
            },
            {
              key: "Thriller",
              value: "Thriller",
            },
          ],
          directors: "Andy Goddard",
          directorList: [
            {
              id: "nm0323758",
              name: "Andy Goddard",
            },
          ],
          stars: "James D'Arcy, Judi Dench, Eddie Izzard, Jim Broadbent",
          starList: [
            {
              id: "nm0195439",
              name: "James D'Arcy",
            },
            {
              id: "nm0001132",
              name: "Judi Dench",
            },
            {
              id: "nm0412850",
              name: "Eddie Izzard",
            },
            {
              id: "nm0000980",
              name: "Jim Broadbent",
            },
          ],
        }
      ];
      // this.cardFilmsInTheater = await movieInTheaters();
      // this.cardFilmsComingSoon = await movieComingSoon();
    },
    showCardFilmDetails(cardFilm: { id: any; }) {
      this.$router.push({
        name: "CardFilmDetails",
        params: { id: cardFilm.id },
      });
    },
  },
});
</script>
