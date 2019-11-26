import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export const routes = []

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  });

const router = createRouter();

export default router;