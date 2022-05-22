<script>
import BlogOne from "../assets/blogs/tips-for-learning-a-large-new-codebase-quickly.md";
export default {
  components: {
    BlogOne,
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
  </main>
</template>
