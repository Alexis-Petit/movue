<template>
  <div class="container">
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
                    <span class="tag is-warning">{{
                      cardFilmDetails.ratings.imDb
                    }}</span>
                    rottenTomatoes :
                    <span class="tag is-warning">{{
                      cardFilmDetails.ratings.rottenTomatoes
                    }}</span>
                  </div>
                </article>
                <article class="media">
                  <a :href="url.videoUrl">Bande annonce</a>
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

export default defineComponent({
  name: "CardFilmDetail",
  props: {
    id: String,
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
    // Pour le mock
    // this.cardFilmDetails = this.response[0];
  },
  methods: {
    async trailer() {
      this.url = await youtubeTrailerLink(String(this.id));
    },
    async init() {
      this.cardFilmDetails = await movieWithId(String(this.id));
      // this.response = [
      //   {
      //     id: "tt0411008",
      //     title: "Lost",
      //     originalTitle: "",
      //     fullTitle: "Lost (TV Series 2004–2010)",
      //     type: "TVSeries",
      //     year: "2004",
      //     image:
      //       "https://imdb-api.com/images/original/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6791_AL_.jpg",
      //     releaseDate: "2004-09-22",
      //     runtimeMins: "44",
      //     runtimeStr: "44mins",
      //     plot:
      //       "The past, present, and future lives of surviving Oceanic Flight 815 passengers are dramatically intertwined as a fight for survival ensues in a quest for answers after crashlanding on a mysterious island. Each discovery prompts yet more secrets, as the hastily-formed colony search for a way off the island, or is this their home?",
      //     plotLocal:
      //       "Après le crash de leur avion sur une île perdue, les survivants doivent apprendre à cohabiter et survivre dans cet environnement hostile. Bien vite, ils se rendent compte qu'une menace semble planer sur l'île...",
      //     plotLocalIsRtl: false,
      //     awards: "Won 1 Golden Globe. Another 112 wins & 396 nominations.",
      //     directors: "",
      //     directorList: [],
      //     writers: "",
      //     writerList: [],
      //     stars: "Jorge Garcia, Josh Holloway, Yunjin Kim, Evangeline Lilly",
      //     starList: [
      //       {
      //         id: "nm0306201",
      //         name: "Jorge Garcia",
      //       },
      //       {
      //         id: "nm0391326",
      //         name: "Josh Holloway",
      //       },
      //       {
      //         id: "nm0453746",
      //         name: "Yunjin Kim",
      //       },
      //       {
      //         id: "nm1431940",
      //         name: "Evangeline Lilly",
      //       },
      //     ],
      //     actorList: [
      //       {
      //         id: "nm0306201",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTUyNTkxODIxN15BMl5BanBnXkFtZTgwOTU2MDAwMTE@._V1_Ratio0.7273_AL_.jpg",
      //         name: "Jorge Garcia",
      //         asCharacter: "Hugo 'Hurley' Reyes 118 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0391326",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTk5NTQ2NjMzNl5BMl5BanBnXkFtZTYwOTExMzY1._V1_Ratio0.7273_AL_.jpg",
      //         name: "Josh Holloway",
      //         asCharacter: "James 'Sawyer' Ford 118 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0453746",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMjI0NTQ4MzgxMl5BMl5BanBnXkFtZTcwMzI1MzU2Nw@@._V1_Ratio1.0455_AL_.jpg",
      //         name: "Yunjin Kim",
      //         asCharacter: "Sun-Hwa Kwon 118 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm1431940",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTc2MDMzODU0OV5BMl5BanBnXkFtZTgwODIwOTAxMzI@._V1_Ratio0.8636_AL_.jpg",
      //         name: "Evangeline Lilly",
      //         asCharacter: "Kate Austen 118 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0642368",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMjA2NDY4Nzg5Ml5BMl5BanBnXkFtZTYwMjcwODA2._V1_Ratio0.7273_AL_.jpg",
      //         name: "Terry O'Quinn",
      //         asCharacter: "John Locke / ... 118 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0004710",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BNTk4MzU0MTcwNl5BMl5BanBnXkFtZTgwMTQ3OTI1MDE@._V1_Ratio0.7727_AL_.jpg",
      //         name: "Naveen Andrews",
      //         asCharacter: "Sayid Jarrah 118 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0289142",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTcyMjA4OTQwMF5BMl5BanBnXkFtZTcwNTQwMzgyMQ@@._V1_Ratio0.7273_AL_.jpg",
      //         name: "Matthew Fox",
      //         asCharacter: "Dr. Jack Shephard 118 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0196654",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BOTRjYWNmNmMtYTFjZi00MWEzLWFhNjEtNWQwMTlkNDc0MzQzXkEyXkFqcGdeQXVyMjgyODMzNw@@._V1_Ratio0.9091_AL_.jpg",
      //         name: "Daniel Dae Kim",
      //         asCharacter: "Jin-Soo Kwon 118 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0211087",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTUyNmNiZTUtMzA4NS00OWZmLThiNzEtNGY1MDYyOTNhY2E3XkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_Ratio0.7727_AL_.jpg",
      //         name: "Emilie de Ravin",
      //         asCharacter: "Claire Littleton 95 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0256237",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BY2Q5YmMyNzAtMmYyZi00YTgzLTgxM2EtZWM3OThlMjcyNjQxXkEyXkFqcGdeQXVyNzk5ODE2NDA@._V1_Ratio0.7727_AL_.jpg",
      //         name: "Michael Emerson",
      //         asCharacter: "Ben Linus / ... 78 episodes, 2006-2010",
      //       },
      //       {
      //         id: "nm0193738",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTU3NTIxMTctZDAzZC00NDc0LTkxODgtYTIxYmUyMmU4MTE0XkEyXkFqcGdeQXVyMTI4OTM0NTM@._V1_Ratio1.3636_AL_.jpg",
      //         name: "Henry Ian Cusick",
      //         asCharacter: "Desmond Hume 74 episodes, 2005-2010",
      //       },
      //       {
      //         id: "nm0597480",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTg0MTc2ODIwNl5BMl5BanBnXkFtZTcwMjQ4MjEwMw@@._V1_Ratio0.7273_AL_.jpg",
      //         name: "Dominic Monaghan",
      //         asCharacter: "Charlie Pace 74 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0674782",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMjE4MDE4ODA5Nl5BMl5BanBnXkFtZTYwMzg0MjE0._V1_Ratio0.8182_AL_.jpg",
      //         name: "Harold Perrineau",
      //         asCharacter: "Michael Dawson 63 episodes, 2004-2010",
      //       },
      //       {
      //         id: "nm0593310",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTY4OTk4NjE2N15BMl5BanBnXkFtZTgwNzMxODk1MzE@._V1_Ratio0.7727_AL_.jpg",
      //         name: "Elizabeth Mitchell",
      //         asCharacter: "Dr. Juliet Burke / ... 55 episodes, 2006-2010",
      //       },
      //       {
      //         id: "nm0504962",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BZThiZmNkNTMtZWNmYS00Y2NkLTg4MzItZWRiZTZkNWFiMTliXkEyXkFqcGdeQXVyMTA4MDAxMzI@._V1_Ratio0.7273_AL_.jpg",
      //         name: "Ken Leung",
      //         asCharacter: "Miles Straume 48 episodes, 2008-2010",
      //       },
      //     ],
      //     fullCast: null,
      //     genres: "Adventure, Drama, Fantasy, Mystery, Sci-Fi, Thriller",
      //     genreList: [
      //       {
      //         key: "Adventure",
      //         value: "Adventure",
      //       },
      //       {
      //         key: "Drama",
      //         value: "Drama",
      //       },
      //       {
      //         key: "Fantasy",
      //         value: "Fantasy",
      //       },
      //       {
      //         key: "Mystery",
      //         value: "Mystery",
      //       },
      //       {
      //         key: "Sci-Fi",
      //         value: "Sci-Fi",
      //       },
      //       {
      //         key: "Thriller",
      //         value: "Thriller",
      //       },
      //     ],
      //     companies: "Bad Robot, Touchstone Television, ABC Signature",
      //     companyList: [
      //       {
      //         id: "co0021593",
      //         name: "Bad Robot",
      //       },
      //       {
      //         id: "co0067205",
      //         name: "Touchstone Television",
      //       },
      //       {
      //         id: "co0209226",
      //         name: "ABC Signature",
      //       },
      //     ],
      //     countries: "ETATS-UNIS",
      //     countryList: [
      //       {
      //         key: "USA",
      //         value: "ETATS-UNIS",
      //       },
      //     ],
      //     languages:
      //       "Anglais, Portugais, Espagnol, Arabe, Français, Coréen, Allemand, Latin, Russe, Japonais",
      //     languageList: [
      //       {
      //         key: "English",
      //         value: "Anglais",
      //       },
      //       {
      //         key: "Portuguese",
      //         value: "Portugais",
      //       },
      //       {
      //         key: "Spanish",
      //         value: "Espagnol",
      //       },
      //       {
      //         key: "Arabic",
      //         value: "Arabe",
      //       },
      //       {
      //         key: "French",
      //         value: "Français",
      //       },
      //       {
      //         key: "Korean",
      //         value: "Coréen",
      //       },
      //       {
      //         key: "German",
      //         value: "Allemand",
      //       },
      //       {
      //         key: "Latin",
      //         value: "Latin",
      //       },
      //       {
      //         key: "Russian",
      //         value: "Russe",
      //       },
      //       {
      //         key: "Japanese",
      //         value: "Japonais",
      //       },
      //     ],
      //     contentRating: "TV-14",
      //     imDbRating: "8.3",
      //     imDbRatingVotes: "493411",
      //     metacriticRating: "84",
      //     ratings: {
      //       imDbId: "tt0411008",
      //       title: "Lost",
      //       fullTitle: "Lost (TV Series 2004–2010)",
      //       type: "TVSeries",
      //       year: "2004",
      //       imDb: "8.3",
      //       metacritic: "84",
      //       theMovieDb: "7.9",
      //       rottenTomatoes: "85",
      //       tVcom: "9.1",
      //       filmAffinity: "7.9",
      //       errorMessage: "",
      //     },
      //     wikipedia: null,
      //     posters: null,
      //     images: null,
      //     trailer: null,
      //     boxOffice: {
      //       budget: "",
      //       openingWeekendUSA: "",
      //       grossUSA: "",
      //       cumulativeWorldwideGross: "",
      //     },
      //     tagline: "Destiny Found (Season 6)",
      //     keywords: "plane crash,survival,destiny,flashback,south pacific",
      //     keywordList: [
      //       "plane crash",
      //       "survival",
      //       "destiny",
      //       "flashback",
      //       "south pacific",
      //     ],
      //     similars: [
      //       {
      //         id: "tt0455275",
      //         title: "Prison Break",
      //         fullTitle: "Prison Break (2005–2017)",
      //         year: "2005–2017",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_Ratio0.6737_AL_.jpg",
      //         plot:
      //           "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
      //         directors: "",
      //         stars: "Dominic Purcell, Wentworth Miller, Amaury Nolasco",
      //         genres: "Action, Crime, Drama",
      //         imDbRating: "8.3",
      //       },
      //       {
      //         id: "tt0773262",
      //         title: "Dexter",
      //         fullTitle: "Dexter (2006–2021)",
      //         year: "2006–2021",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_Ratio0.7368_AL_.jpg",
      //         plot:
      //           "By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
      //         directors: "",
      //         stars: "Michael C. Hall, Jennifer Carpenter, David Zayas",
      //         genres: "Crime, Drama, Mystery",
      //         imDbRating: "8.6",
      //       },
      //       {
      //         id: "tt1520211",
      //         title: "The Walking Dead",
      //         fullTitle: "The Walking Dead (TV Series 2010)",
      //         year: "TV Series 2010",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.6737_AL_.jpg",
      //         plot:
      //           "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
      //         directors: "",
      //         stars: "Andrew Lincoln, Norman Reedus, Melissa McBride",
      //         genres: "Drama, Horror, Thriller",
      //         imDbRating: "8.2",
      //       },
      //       {
      //         id: "tt0412142",
      //         title: "House",
      //         fullTitle: "House (2004–2012)",
      //         year: "2004–2012",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6737_AL_.jpg",
      //         plot:
      //           "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
      //         directors: "",
      //         stars: "Hugh Laurie, Omar Epps, Robert Sean Leonard",
      //         genres: "Drama, Mystery",
      //         imDbRating: "8.7",
      //       },
      //       {
      //         id: "tt1796960",
      //         title: "Homeland",
      //         fullTitle: "Homeland (2011–2020)",
      //         year: "2011–2020",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMjA4MWM1OWQtMDdlMS00MmE4LWI2YTItODhhMGI5NTg0ODFhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_Ratio0.7474_AL_.jpg",
      //         plot:
      //           "A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.",
      //         directors: "",
      //         stars: "Claire Danes, Mandy Patinkin, Damian Lewis",
      //         genres: "Crime, Drama, Mystery",
      //         imDbRating: "8.3",
      //       },
      //       {
      //         id: "tt2085059",
      //         title: "Black Mirror",
      //         fullTitle: "Black Mirror (TV Series 2011)",
      //         year: "TV Series 2011",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6737_AL_.jpg",
      //         plot:
      //           "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
      //         directors: "",
      //         stars: "Daniel Lapaine, Hannah John-Kamen, Michaela Coel",
      //         genres: "Drama, Sci-Fi, Thriller",
      //         imDbRating: "8.8",
      //       },
      //       {
      //         id: "tt0944947",
      //         title: "Game of Thrones",
      //         fullTitle: "Game of Thrones (2011–2019)",
      //         year: "2011–2019",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7368_AL_.jpg",
      //         plot:
      //           "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      //         directors: "",
      //         stars: "Emilia Clarke, Peter Dinklage, Kit Harington",
      //         genres: "Action, Adventure, Drama",
      //         imDbRating: "9.3",
      //       },
      //       {
      //         id: "tt1856010",
      //         title: "House of Cards",
      //         fullTitle: "House of Cards (2013–2018)",
      //         year: "2013–2018",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_Ratio0.6737_AL_.jpg",
      //         plot:
      //           "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
      //         directors: "",
      //         stars: "Kevin Spacey, Michel Gill, Robin Wright",
      //         genres: "Drama",
      //         imDbRating: "8.7",
      //       },
      //       {
      //         id: "tt0475784",
      //         title: "Westworld",
      //         fullTitle: "Westworld (TV Series 2016)",
      //         year: "TV Series 2016",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6737_AL_.jpg",
      //         plot:
      //           "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be indulged without consequence.",
      //         directors: "",
      //         stars: "Evan Rachel Wood, Jeffrey Wright, Ed Harris",
      //         genres: "Drama, Mystery, Sci-Fi",
      //         imDbRating: "8.7",
      //       },
      //       {
      //         id: "tt0106179",
      //         title: "The X-Files",
      //         fullTitle: "The X-Files (1993–2018)",
      //         year: "1993–2018",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BZDA0MmM4YzUtMzYwZC00OGI2LWE0ODctNzNhNTkwN2FmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6737_AL_.jpg",
      //         plot:
      //           "Two F.B.I. Agents, Fox Mulder the believer and Dana Scully the skeptic, investigate the strange and unexplained, while hidden forces work to impede their efforts.",
      //         directors: "",
      //         stars: "David Duchovny, Gillian Anderson, Mitch Pileggi",
      //         genres: "Crime, Drama, Mystery",
      //         imDbRating: "8.6",
      //       },
      //       {
      //         id: "tt0460649",
      //         title: "How I Met Your Mother",
      //         fullTitle: "How I Met Your Mother (2005–2014)",
      //         year: "2005–2014",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_Ratio0.7474_AL_.jpg",
      //         plot:
      //           "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
      //         directors: "",
      //         stars: "Josh Radnor, Jason Segel, Cobie Smulders",
      //         genres: "Comedy, Romance",
      //         imDbRating: "8.3",
      //       },
      //       {
      //         id: "tt4574334",
      //         title: "Stranger Things",
      //         fullTitle: "Stranger Things (TV Series 2016)",
      //         year: "TV Series 2016",
      //         image:
      //           "https://imdb-api.com/images/original/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_Ratio0.6737_AL_.jpg",
      //         plot:
      //           "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
      //         directors: "",
      //         stars: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
      //         genres: "Drama, Fantasy, Horror",
      //         imDbRating: "8.7",
      //       },
      //     ],
      //     tvSeriesInfo: {
      //       yearEnd: "2010",
      //       creators: "J.J. Abrams, Jeffrey Lieber, Damon Lindelof",
      //       creatorList: [
      //         {
      //           id: "nm0009190",
      //           name: "J.J. Abrams",
      //         },
      //         {
      //           id: "nm0509340",
      //           name: "Jeffrey Lieber",
      //         },
      //         {
      //           id: "nm0511541",
      //           name: "Damon Lindelof",
      //         },
      //       ],
      //       seasons: ["1", "2", "3", "4", "5", "6"],
      //     },
      //     tvEpisodeInfo: null,
      //     errorMessage: "",
      //   },
      // ];
    },
  },
});
</script>

<style scoped lang="scss">
.sizeImg {
  max-width: 50vh;
}
</style>
