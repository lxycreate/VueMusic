/**
 * @Description: 页面信息
 * @Author: lixianying
 * @Date: 2020-01-14
 */
const state = {
  pageBtns: []
}

const mutations = {
  setPageBtns(state, btns) {
    state.pageBtns = btns;
  }
}

const actions = {
  setPageBtnsAction({ commit }, btns) {
    commit("setPageBtns", btns);
  }
}

const getters = {
  pageBtns: state => state.pageBtns
}

export default {
  state,
  mutations,
  actions,
  getters
};