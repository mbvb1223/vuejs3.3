<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/common/Footer.vue'
import Header from './components/common/Header.vue'
</script>

<template>
  <div class="main">
    <Header></Header>
    <div class="body"><RouterView /></div>
    <div><Footer /></div>
  </div>
</template>

