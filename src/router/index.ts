import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Top from "../views/Top.vue";
import CardFilmDetails from "../components/CardFilmDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/top",
    name: "Top",
    component: Top
  },
  {
   path: '/film-detail/:id',
   name: 'FilmDetail',
   props: true,
   component: CardFilmDetails
 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
  linkActiveClass: 'is-active'
});

export default router;
