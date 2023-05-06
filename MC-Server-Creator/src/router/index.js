import { createRouter, createWebHistory } from "vue-router"

import LandingPage from "@views/LandingPage.vue"
import ServersPage from "@views/ServersPage.vue"
import SettingsPage from "@views/SettingsPage.vue"
import PageNotFoundView from "@views/PageNotFoundView.vue"
import OverviewPage from "@views/serverPages/OverviewPage.vue"
import CreateNewServer from "@views/serverPages/CreateNewServer.vue"




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
        path: '/createserver',
        name: 'Create new Server',
        component: CreateNewServer
      },
      {
        path: '/settings',
        name: 'Settings',
        component: SettingsPage
      },
      {
        path: '/overview',
        name: 'Server Overview',
        component: OverviewPage
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

