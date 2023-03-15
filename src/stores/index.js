import {createStore} from 'vuex'
import Photo from "@/stores/modules/photo";

// Create a new store instance.
const store = createStore({
  modules: {
    Photo
  }
})

export default store