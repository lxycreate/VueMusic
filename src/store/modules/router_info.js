/**
 * @Description: 路由信息
 * @Author: lixianying
 * @Date: 2020-01-14
 */
const routerInfo = {
  state: {
    currentIndex: 0, // 当前记录位置
    recordFlag: true, // 记录历史记录的标志
    history: [], // 路由历史记录
  },
  mutations: {
    setRecordFlag(state, flag) {
      state.recordFlag = flag;
    },
    setHistory(state, url) {
      state.history.push(url);
      console.log(state.history);
    },
    setCurrentIndex(state, index) {
      state.currentIndex = index;
    }
  },
  actions: {
    setRecordFlagAction({ commit }, flag) {
      commit("setRecordFlag", flag);
    },
    setHistoryAction({ commit }, url) {
      commit("setHistory", url);
    },
    setCurrentIndexAction({ commit }, index) {
      commit("setCurrentIndex", index);
    }
  },
  getters: {
    recordFlag: state => state.recordFlag,
    currentIndex: state => state.currentIndex,
    historyLength: state => state.history.length
  }
}

export default routerInfo