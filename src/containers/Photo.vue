<script>
export default {
  // data() {
  //   // console.log(this.$store.state.Photo.allCities)
  //   // console.log(this.$store.state.allCities)
  //   return {
  //     photos: this.$store.state.Photo.photos,
  //   }
  // },
  computed: {
    photos() {
      return this.$store.getters['Photo/activePhotos']
    }
  },
  created() {
    this.$store.dispatch('Photo/all');
  }
}
</script>

<template>
  <h2>Photo</h2>
  <template v-for="(item, index) in photos" :key="item.id">
    <div>{{ index }} : {{ item.id}}
      <router-link :to="`/photos/` + item.id"> {{ item.title }}</router-link>
    </div>
  </template>
</template>
