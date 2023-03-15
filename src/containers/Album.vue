<script>
import albumService from '@/services/album'

export default {
  data() {
    return {
      albums: [],
    }
  },
  created() {
    albumService.all().then((result) => {
      this.albums = result.data
    })
  }
}
</script>

<template>
  <h1>Album page</h1>
  <template v-for="(item, index) in albums" :key="item.id">
    <div>{{ index }} : {{ item.title }}</div>
  </template>
</template>
