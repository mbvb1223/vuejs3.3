import Photo from '@/services/photo'

const getters = {
  activePhotos: (state) => state.photos.filter((item) =>  item.id > 50 && item.id < 70),
  inactivePhotos: (state) => state.photos.filter((item) => item.id < 50)
}

const actions = {
  all({ commit }) {
    Photo.all().then((result) => {
      commit('setPhotos', result.data)
    })
  },
  getValid({ commit }, ) {
    Photo.valid().then((result) => {
      commit('setPhotos', result.data)
    })
  }
}

const mutations = {
  setPhotos(state, photos) {
    state.photos = photos
    console.log(state.photos)
  }
}

const state = {
  photos: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
