<script setup>
import { onMounted, ref } from 'vue'
import client from '../sanityConfig.js'
import { useRoute } from 'vue-router'
import Markdown from 'vue3-markdown-it'

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
    <Markdown :source="blogData[0].blogContent"></Markdown>
  </div>
</template>
