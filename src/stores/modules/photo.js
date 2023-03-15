
const getters = {
  allCities: (state) => state.allCities
}

const actions = {
  all({ commit }) {
    commit('setPhotos', [{id: 1, title: 'aaaaaaa'}, {id: 2, title: 'bbbb'}])
  }
}

const mutations = {
  setPhotos(state, photos) {
    state.photos = photos
  }
}

const state = {
  photos: []
}

export default {
  state,
  getters,
  actions,
  mutations
}
