<script>
import ExampleBlog from "../assets/blogs/example-blog.md";
export default {
  components: {
    ExampleBlog,
  },
};
</script>

<template>
  <main>
    <ExampleBlog v-if="$route.params.title === 'example-blog'" />
  </main>
</template>
