import Vue from "vue";
import Vuex from "vuex";
import pageInfo from "./modules/page_info"
import routerInfo from "./modules/router_info"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pageInfo,
    routerInfo
  },
});

export default store;
