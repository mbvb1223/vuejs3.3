import Photo from '@/services/photo'

const getters = {
  activePhotos: (state) => state.photos.filter((item) =>  item.id > 4950),
  inactivePhotos: (state) => state.photos.filter((item) =>  item.id > 255 && item.id < 288)
}

const actions = {
  all({ commit }) {
    Photo.all().then((result) => {
      commit('setPhotos', result.data)
    })
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
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
