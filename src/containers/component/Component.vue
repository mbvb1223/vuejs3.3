<script setup>
import ListData from '@/components/List.vue'
import { computed } from "vue";
import { useStore } from 'vuex'

const store = useStore();
store.dispatch('Photo/all')
const activePhotos = computed(() => store.getters['Photo/activePhotos'])
const inactivePhotos = computed(() => store.getters['Photo/inactivePhotos'])
</script>

<template>
  <va-card
      color="background-element"
      style="padding: 0.75rem;"
  >
    <div class="row">
      <div class="flex flex-col md6">
        <h1>Active components</h1>
        <ListData :data="activePhotos"></ListData>
      </div>
      <div class="flex flex-col md6">
        <ListData :data="inactivePhotos"></ListData>
      </div>
    </div>
  </va-card>
</template>



