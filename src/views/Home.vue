<template>
  <div class="container is-fluid">
    <div class="columns is-multiline is-centered">
      <InTheaters
        v-for="inTheater in inTheaters"
        :key="inTheater.id"
        class="column is-half-tablet is-one-quarter-desktop is-one-quarter-widescreen m-3"
        :inTheater="inTheater"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InTheaters from "@/components/InTheaters.vue"; // @ is an alias to /src
import { movieInTheaters, movieComingSoon } from "../api/movie";
import axios from "axios";

const API_KEY = process.env.VUE_APP_NASA_API_KEY;
const VUE_APP_IN_THEATERS = process.env.VUE_APP_IN_THEATERS;

export default defineComponent({
  name: "Home",
  components: {
    InTheaters,
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      inTheaters: new Array(),
    };
  },
  mounted() {
    this.inTheaters = [
      {
        id: "tt8368512",
        title: "The Courier",
        fullTitle: "The Courier (2020)",
        year: "2020",
        releaseState: "Opening This Week - March 19",
        image:
          "https://imdb-api.com/images/original/MV5BYjg4YTJlNzMtY2U0OC00N2FjLWI0ZTgtNGM1NDRhMWNhZmRkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6699_AL_.jpg",
        runtimeMins: "111",
        runtimeStr: "1h 51mins",
        plot:
          "Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.",
        contentRating: "PG-13",
        imDbRating: "",
        imDbRatingCount: "",
        metacriticRating: "63",
        genres: "Thriller",
        genreList: [{ key: "Thriller", value: "Thriller" }],
        directors: "Dominic Cooke",
        directorList: [{ id: "nm4315078", name: "Dominic Cooke" }],
        stars:
          "Benedict Cumberbatch, Merab Ninidze, Rachel Brosnahan, Vladimir Chuprikov",
        starList: [
          { id: "nm1212722", name: "Benedict Cumberbatch" },
          { id: "nm0632457", name: "Merab Ninidze" },
          { id: "nm3014031", name: "Rachel Brosnahan" },
          { id: "nm1078491", name: "Vladimir Chuprikov" },
        ],
      },
      {
        id: "tt4479380",
        title: "SAS: Red Notice",
        fullTitle: "SAS: Red Notice (2021)",
        year: "2021",
        releaseState: "Opening This Week - March 19",
        image:
          "https://imdb-api.com/images/original/MV5BYzVjMWU4OGUtNGEyZS00MjJiLWIzNTMtNDk1NDdmMDUwYTAyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6699_AL_.jpg",
        runtimeMins: "123",
        runtimeStr: "2h 3mins",
        plot:
          "A small army of well trained criminals led by Laszlo Antonov have hijacked the Eurostar deep beneath the English Channel.",
        contentRating: "R",
        imDbRating: "",
        imDbRatingCount: "",
        metacriticRating: "",
        genres: "Action",
        genreList: [{ key: "Action", value: "Action" }],
        directors: "Magnus Martens",
        directorList: [{ id: "nm0994368", name: "Magnus Martens" }],
        stars: "Sam Heughan, Ruby Rose, Andy Serkis, Hannah John-Kamen",
        starList: [
          { id: "nm1537825", name: "Sam Heughan" },
          { id: "nm3199307", name: "Ruby Rose" },
          { id: "nm0785227", name: "Andy Serkis" },
          { id: "nm4789912", name: "Hannah John-Kamen" },
        ],
      },
      {
        id: "tt6523526",
        title: "Last Call",
        fullTitle: "Last Call (2021)",
        year: "2021",
        releaseState: "Opening This Week - March 19",
        image:
          "https://imdb-api.com/images/original/MV5BZjhkZjQxZjctMzkwOS00ZmNmLTkyYTQtYjA0YTljZWYxNDRkXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_Ratio0.6699_AL_.jpg",
        runtimeMins: "102",
        runtimeStr: "1h 42mins",
        plot:
          "A real estate developer returns to his old Philly neighborhood and must decide to raze or resurrect the family bar.",
        contentRating: "R",
        imDbRating: "",
        imDbRatingCount: "",
        metacriticRating: "",
        genres: "Comedy",
        genreList: [{ key: "Comedy", value: "Comedy" }],
        directors: "Paolo Pilladi",
        directorList: [{ id: "nm1713246", name: "Paolo Pilladi" }],
        stars: "Jeremy Piven, Taryn Manning, Bruce Dern, Zach McGowan",
        starList: [
          { id: "nm0005315", name: "Jeremy Piven" },
          { id: "nm0543383", name: "Taryn Manning" },
          { id: "nm0001136", name: "Bruce Dern" },
          { id: "nm2090702", name: "Zach McGowan" },
        ],
      },
      {
        id: "tt9849004",
        title: "Happily",
        fullTitle: "Happily (2021)",
        year: "2021",
        releaseState: "Opening This Week - March 19",
        image:
          "https://imdb-api.com/images/original/MV5BMGMxMzBhNDQtODJhNy00NDBmLWI5NTYtMTJkMjUxYjE0OWZjXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_Ratio0.6699_AL_.jpg",
        runtimeMins: "96",
        runtimeStr: "1h 36mins",
        plot:
          "A dark romantic comedy. Tom and Janet have been happily married for years. But a visit from a mysterious stranger leads to a dead body, a lot of questions, and a tense couples' trip with friends who may not actually be friends at all.",
        contentRating: "R",
        imDbRating: "",
        imDbRatingCount: "",
        metacriticRating: "71",
        genres: "Comedy, Crime, Romance, Thriller",
        genreList: [
          { key: "Comedy", value: "Comedy" },
          { key: "Crime", value: "Crime" },
          { key: "Romance", value: "Romance" },
          { key: "Thriller", value: "Thriller" },
        ],
        directors: "BenDavid Grabinski",
        directorList: [{ id: "nm2818863", name: "BenDavid Grabinski" }],
        stars: "Joel McHale, Natalie Zea, Natalie Morales, Kerry Bishé",
        starList: [
          { id: "nm0570364", name: "Joel McHale" },
          { id: "nm0954036", name: "Natalie Zea" },
          { id: "nm2295540", name: "Natalie Morales" },
          { id: "nm2628935", name: "Kerry Bishé" },
        ],
      },
      {
        id: "tt2677722",
        title: "City of Lies",
        fullTitle: "City of Lies (2018)",
        year: "2018",
        releaseState: "Opening This Week - March 19",
        image:
          "https://imdb-api.com/images/original/MV5BY2YyNTJjYmMtOGQxZC00N2UxLWEzNjMtOGU3ZjA2MGU1NjA5XkEyXkFqcGdeQXVyMTE1Nzg4NjY0._V1_Ratio0.6699_AL_.jpg",
        runtimeMins: "112",
        runtimeStr: "1h 52mins",
        plot:
          "Russell Poole and Jack Jackson investigate the murders of rappers Notorious B.I.G. and Tupac Shakur.",
        contentRating: "R",
        imDbRating: "",
        imDbRatingCount: "",
        metacriticRating: "",
        genres: "Biography, Crime, Drama, Mystery, Thriller",
        genreList: [
          { key: "Biography", value: "Biography" },
          { key: "Crime", value: "Crime" },
          { key: "Drama", value: "Drama" },
          { key: "Mystery", value: "Mystery" },
          { key: "Thriller", value: "Thriller" },
        ],
        directors: "Brad Furman",
        directorList: [{ id: "nm1026778", name: "Brad Furman" }],
        stars: "Johnny Depp, Forest Whitaker, Toby Huss, Dayton Callie",
        starList: [
          { id: "nm0000136", name: "Johnny Depp" },
          { id: "nm0001845", name: "Forest Whitaker" },
          { id: "nm0403947", name: "Toby Huss" },
          { id: "nm0130502", name: "Dayton Callie" },
        ],
      },
    ];
  },
  methods: {
    async inTheatersMovie() {
      // this.inTheaters = Object.assign(this.inTheaters, await movieInTheaters());
      // console.log(this.inTheaters);
    },
  },
});
</script>
