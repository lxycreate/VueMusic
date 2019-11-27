import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/layout";
Vue.use(Router);

export const routes = [{
  path: "/404",
  component: () => import("@/views/other/not_found"),
  meta: { title: "错误" }
},
{
  path: "/",
  component: Layout,
  meta: { title: "Layout" }
}, 

// 必须放在最后
{
  path: "*",
  redirect: "/404"
}]

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  });

const router = createRouter();

export default router;