/**
 * @Description: 页面信息
 * @Author: lixianying
 * @Date: 2020-01-14
 */
const pageInfo = {
  state: {
    pageBtns: [],  // 页面按钮
    showSearchPanel: false, // 显示搜索面板
  },
  mutations: {
    setPageBtns(state, btns) {
      state.pageBtns = btns;
    },
    setShowSearchPanel(state, flag) {
      state.showSearchPanel = flag;
    }
  },
  actions: {
    setPageBtnsAction({ commit }, btns) {
      commit("setPageBtns", btns);
    },
    setShowSearchPanelAction({ commit }, flag) {
      commit("setShowSearchPanel", flag);
    }
  },
  getters: {
    pageBtns: state => state.pageBtns,
    showSearchPanel: state => state.showSearchPanel
  }
}

export default pageInfo