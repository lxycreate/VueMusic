/**
 * @Description: 路由信息
 * @Author: lixianying
 * @Date: 2020-01-14
 */
const routerInfo = {
  state: {
    cutFlag: false,  // 为了解决前进或后退后，再点击某个页面，前进和后退与浏览器不一致的问题
    currentIndex: 0, // 当前记录位置
    recordFlag: true, // 记录历史记录的标志
    history: [], // 路由历史记录
  },
  mutations: {
    setBrowserEventFlag(state, flag) {
      state.browserEventFlag = flag;
    },
    setCutFlag(state, flag) {
      state.cutFlag = flag;
    },
    setRecordFlag(state, flag) {
      state.recordFlag = flag;
    },
    setHistory(state, url) {
      state.history.push(url);
    },
    cutHistory(state, url) {
      state.history = state.history.slice(0, state.currentIndex);
      state.history.push(url);
    },
    setCurrentIndex(state, index) {
      state.currentIndex = index;
    }
  },
  actions: {
    setCutFlagAction({ commit }, flag) {
      commit("setCutFlag", flag);
    },
    setRecordFlagAction({ commit }, flag) {
      commit("setRecordFlag", flag);
    },
    setHistoryAction({ commit }, url) {
      commit("setHistory", url);
    },
    cutHistoryAction({ commit }, url) {
      commit("cutHistory", url);
    },
    setCurrentIndexAction({ commit }, index) {
      commit("setCurrentIndex", index);
    }
  },
  getters: {
    cutFlag: state => state.cutFlag,
    recordFlag: state => state.recordFlag,
    currentIndex: state => state.currentIndex,
    historyLength: state => state.history.length,
    history: state => state.history
  }
}

export default routerInfo