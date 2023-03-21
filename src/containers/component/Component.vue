<script setup>
import ListData from '@/components/List.vue'
import { computed } from "vue";
import { useStore } from 'vuex'

const store = useStore();
store.dispatch('Photo/all')
const activePhotos = computed(() => store.getters['Photo/activePhotos'])
const inactivePhotos = computed(() => store.getters['Photo/inactivePhotos'])
let flag = true;

function getPhotos() {
  console.log('asdf');
  if (flag) {
    flag = false;
    store.dispatch('Photo/all')
  } else {
    flag = true;
    store.dispatch('Photo/getValid')
  }
}
</script>

<template>
  <va-button @click="getPhotos" style="margin: 20px"> Click to test </va-button>
  <va-card
      color="background-element"
      style="padding: 0.75rem;"
  >
    <div class="row">
      <div class="flex flex-col md6">
        <h1>Active components</h1>
        <hr>
        <ListData :data="activePhotos"></ListData>
      </div>
      <div class="flex flex-col md6">
        <h1>Inactive components</h1>
        <hr>
        <ListData :data="inactivePhotos"></ListData>
      </div>
    </div>
  </va-card>
</template>



