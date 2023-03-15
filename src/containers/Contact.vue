<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.posts = json)
  }
}
</script>

<template>
  <h1>Contact</h1>
  <template v-for="(item, index) in posts" :key="item.id">
    <div>{{ index }} : {{ item.title }}</div>
  </template>
</template>
