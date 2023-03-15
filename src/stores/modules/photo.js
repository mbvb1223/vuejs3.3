
const getters = {
  allCities: (state) => state.allCities
}

const actions = {
  getAllCities({ commit }) {
    return new Promise((resolve, reject) => {

    })
  }
}

const mutations = {

}

const state = {
  allCities: ['sadf', 'aaa']
}

export default {
  state,
  getters,
  actions,
  mutations
}
