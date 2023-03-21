<script>
export default {
  props: ['data']
}
</script>

<template>
  <h2>hello</h2>
  <div v-for="(item, index) in data" :key="item.id">
    <div>{{ index }} : {{item.id}} ==>
      <router-link :to="`/photos/` + item.id"> {{ item.title }}</router-link>
    </div>
  </div>
</template>

