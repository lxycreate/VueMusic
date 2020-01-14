import Vue from "vue";
import Vuex from "vuex";
import pageInfo from "./modules/page_info"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pageInfo
  },
});

export default store;
