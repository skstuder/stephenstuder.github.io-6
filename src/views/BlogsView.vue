<script setup>
import BlogCard from '../components/BlogCard.vue'
import { onMounted, ref } from 'vue'
import client from '../sanityConfig.js'
import PortfolioLoader from '../components/PortfolioLoader.vue'

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
  <template v-if="blogsData">
    <template v-for="blog in blogsData" :key="blog.id">
      <BlogCard :blog-data="blog"></BlogCard>
    </template>
  </template>
  <div v-else class="w-full flex flex-justify-center">
    <PortfolioLoader />
  </div>
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
.w-full {
  width: 100%;
}
</style>
