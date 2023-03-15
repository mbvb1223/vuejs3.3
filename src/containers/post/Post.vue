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
  <h1>Post listing page</h1>
  <template v-for="(item, index) in posts" :key="item.id">
    <div>{{ index }} :
      <router-link :to="`/posts/` + item.id"> {{ item.title }}</router-link>
    </div>
  </template>
</template>
