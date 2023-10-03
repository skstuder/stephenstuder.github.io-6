<script setup>
import BlogCard from '../components/BlogCard.vue'
import { onMounted, ref } from 'vue'
import client from '../sanityConfig.js'

const blogsData = ref(null)

onMounted(async () => {
  try {
    blogsData.value = await client.fetch(`*[_type == "blogs"] | order(createdDate desc)`)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <h2>Blogs</h2>
  <template v-for="blog in blogsData" :key="blog.id">
    <BlogCard :blog-data="blog"></BlogCard>
  </template>
</template>

<style>
a {
  text-decoration: none;
  color: var(--black);
}
.tag {
  display: inline-block;
  padding: 0px 10px;
  margin-bottom: 10px;
}
</style>
