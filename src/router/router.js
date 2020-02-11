import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/layout";
import MainContent from "@/views/layout/components/main_content"
import NoSideBarContent from "@/views/layout/components/no_sidebar_content"
import PageContent from "@/views/layout/components/page_content"
import NotFound from "@/views/other/not_found"
Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/mainpage",
    children: [{
      path: "/mainpage",
      name: "mainpage",
      component: MainContent,
      redirect: "/findmusic",
      children: [{
        path: "/findmusic",
        name: "findmusic",
        component: PageContent,
        redirect: "/findmusic/personalrecommend",
        meta: { title: "发现音乐", hasBtn: true },
        children: [{
          path: "/findmusic/personalrecommend",
          name: "personalrecommend",
          component: () => import("@/views/find_music/personal_recommend"),
          meta: { title: "个性推荐", parentPath: "/findmusic", keepAlive: true }
        }, {
          path: "/findmusic/playlist",
          name: "playlist",
          component: PageContent,
          redirect: "/findmusic/playlist/list",
          meta: { title: "歌单", parentPath: "/findmusic" },
          children: [{
            path: "/findmusic/playlist/list",
            name: "list",
            component: () => import("@/views/find_music/play_list"),
            meta: { title: "歌单", parentPath: "/findmusic", keepAlive: true },
          }, {
            path: "/findmusic/playlist/quality",
            name: "quality",
            component: () => import("@/views/find_music/quality_play_list"),
            meta: { title: "精品歌单", parentPath: "/findmusic" },
          }, {
            path: "/playlist/detail",
            name: "listdetail",
            component: () => import("@/views/find_music/play_list_detail"),
            meta: { title: "歌单详情" },
          }]
        }, {
          path: "/artist",
          name: "artist",
          meta: { title: "歌手详情", hidden: true }
        }]
      }, {
        path: "/test",
        component: () => import("@/views/other/test"),
        meta: { title: "测试组件" }
      }, {
        path: "/comment",
        name: "comment",
        component: PageContent,
        redirect: "/comment/hot",
        meta: { title: "评论", hidden: true, hasBtn: true },
        children: [{
          path: "/comment/hot",
          name: "hotcomment",
          component: () => import("@/views/other/hot_comment"),
          meta: { title: "热门评论", parentPath: "/comment" }
        }]
      }]
    }, {
      path: "/nosidebarcontent",
      component: NoSideBarContent,
      children: [{
        path: "/404",
        component: NotFound,
        meta: { title: "错误" }
      }]
    }]
  },

  // 必须放在最后
  {
    path: "*",
    redirect: "/404"
  }]

const createRouter = () =>
  new Router({
    scrollBehavior: (to, from, savedPosition) => {
      return { y: 0 };
    },
    routes: routes
  });

const router = createRouter();

export default router;