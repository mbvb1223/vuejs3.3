<script>

import {ListData} from '@/components/List.vue'

export default {
  computed: {
    photos() {
      return this.$store.getters['Photo/activePhotos']
    },
    inactivePhotos() {
      return this.$store.getters['Photo/inactivePhotos']
    }
  },
  created() {
    this.$store.dispatch('Photo/all');
  }
}
</script>

<template>
  <va-card
      color="background-element"
      style="padding: 0.75rem;"
  >
    <div class="row">
      <div class="flex flex-col md6">
        <h1>Active components</h1>
        <ListData :data="photos"></ListData>
      </div>
      <div class="flex flex-col md6">
        <h1>Inactive components</h1>
      </div>
    </div>
  </va-card>
</template>



