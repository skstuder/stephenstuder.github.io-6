<script setup>
import { onMounted, ref } from 'vue'
import client from '../sanityConfig.js'
import { useRoute } from 'vue-router'
import Markdown from 'vue3-markdown-it'
import imageUrlBuilder from '@sanity/image-url'
import PortfolioLoader from '../components/PortfolioLoader.vue'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const route = useRoute()

const blogData = ref(null)

onMounted(async () => {
  const blogId = route.params.id
  try {
    blogData.value = await client.fetch(`*[_type == "blogs" && urlParam == "${blogId}"]`)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div v-if="blogData">
    <h3>{{ blogData[0].blogName }}</h3>
    <img :src="urlFor(blogData[0].myImage.asset._ref)" alt="" />
    <Markdown :source="blogData[0].blogContent"></Markdown>
  </div>
  <PortfolioLoader v-else class="w-full"></PortfolioLoader>
</template>

<style scoped>
img {
  height: 250px;
  object-fit: cover;
  width: 100%;
}
.w-full {
  width: 100%;
}
</style>
