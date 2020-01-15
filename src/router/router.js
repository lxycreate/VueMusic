import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/layout";
import PageContent from "@/views/layout/components/page_content"
Vue.use(Router);

export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/findMusic",
    children: [{
      path: "/findMusic",
      name: "findMusic",
      component: PageContent,
      redirect: "/findMusic/personalRecommend",
      meta: { title: "发现音乐", hasBtn: true },
      children: [{
        path: "/findMusic/personalRecommend",
        name: "personalRecommend",
        component: () => import("@/views/find_music/personal_recommend"),
        meta: { title: "个性推荐" }
      }]
    }, {
      path: "/test",
      component: () => import("@/views/other/test"),
      meta: { title: "测试组件" }
    }, {
      path: "/404",
      component: () => import("@/views/other/not_found"),
      meta: { title: "错误", hidden: true }
    }]
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