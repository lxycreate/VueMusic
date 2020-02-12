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
    keepAliveArr: ['test']
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
    },
    setKeepAliveArr(state, obj) {
      if (!obj || obj.type === undefined || obj.name === undefined) {
        console.log('出错了');
        return;
      }
      if (obj.type === 'add') {
        if (!state.keepAliveArr.includes(obj.name)) {
          state.keepAliveArr.push(obj.name);
        }
      } else if (obj.type === 'remove') {
        state.keepAliveArr=[];
        // state.keepAliveArr = state.keepAliveArr.filter((name) => { return name !== obj.name });
      }
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
    },
    setKeepAliveArrAction({ commit }, obj) {
      commit('setKeepAliveArr', obj);
    }
  },
  getters: {
    pageBtns: state => state.pageBtns,
    showSearchPanel: state => state.showSearchPanel,
    jsPageScroll: state => state.jsPageScroll,
    keepAliveArr: state => state.keepAliveArr
  }
}

export default pageInfo