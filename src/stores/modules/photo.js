import Photo from '@/services/photo'

const getters = {
  activePhotos: (state) => state.photos.filter((item) =>  item.id > 4950)
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
  state,
  getters,
  actions,
  mutations
}
