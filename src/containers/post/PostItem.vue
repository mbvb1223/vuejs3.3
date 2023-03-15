<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    return {
      id
    }
  },
  data() {
    return {
      post: [],
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(response => response.json())
        .then(json => this.post = json)
  }
}
</script>

<template>
  <h1>Post detail page</h1>
  <hr>
  Title: {{ post.title }}
  <hr>
  {{ post.body }}
</template>
