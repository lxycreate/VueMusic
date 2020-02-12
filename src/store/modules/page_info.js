/**
 * @Description: 页面信息
 * @Author: lixianying
 * @Date: 2020-01-14
 */
const pageInfo = {
  state: {
    pageBtns: [],  // 页面按钮
    showSearchPanel: false, // 显示搜索面板
    jsPageScroll: undefined,
  },
  mutations: {
    setPageBtns(state, btns) {
      state.pageBtns = btns;
    },
    setShowSearchPanel(state, flag) {
      state.showSearchPanel = flag;
    },
    setJsPageScroll(state, jsPageScroll) {
      state.jsPageScroll = jsPageScroll;
    }
  },
  actions: {
    setPageBtnsAction({ commit }, btns) {
      commit("setPageBtns", btns);
    },
    setShowSearchPanelAction({ commit }, flag) {
      commit("setShowSearchPanel", flag);
    },
    setJsPageScrollAction({ commit }, jsPageScroll) {
      commit('setJsPageScroll', jsPageScroll);
    }
  },
  getters: {
    pageBtns: state => state.pageBtns,
    showSearchPanel: state => state.showSearchPanel,
    jsPageScroll: state => state.jsPageScroll,
  }
}

export default pageInfo