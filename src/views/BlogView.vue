<script>
import BlogOne from "../assets/blogs/tips-for-learning-a-large-new-codebase-quickly.md";
import BlogTwo from "../assets/blogs/should-i-become-a-front-end-developer.md";
export default {
  components: {
    BlogOne,
    BlogTwo,
  },
};
</script>

<template>
  <main>
    <BlogOne
      v-if="
        $route.params.title === 'tips-for-learning-a-large-new-codebase-quickly'
      "
    />
    <BlogTwo
      v-if="
        $route.params.title === 'should-i-become-a-front-end-developer'
      "
    />
  </main>
</template>
