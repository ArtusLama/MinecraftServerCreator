import { createRouter, createWebHistory } from "vue-router"

import LandingPage from "../views/LandingPage.vue"
import ServersPage from "../views/ServersPage.vue"
import PageNotFoundView from "@views/PageNotFoundView.vue"



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: LandingPage
      },
      {
        path: '/servers',
        name: 'Servers',
        component: ServersPage
      },
      {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFoundView
      }
    ]
  })
  
  router.beforeEach((to, from, next) => {
    document.title = "PAGE · " + to.name;
    next();
  });
  
  export default router;

