<script setup>
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
  <main>
    <div class="block-flex flex-align-center flex-justify-center">
      <div class="flex-one flex flex-align-center flex-justify-center">
        <img src="../assets/images/stephen.png" alt="" />
      </div>
      <div class="flex-three">
        <h2>User Interface Engineer</h2>
        <p>
          I &#10084; web development. Specialized on the client side but always working to expand
          out. I also like to blog about technology and developer mindset.
        </p>
      </div>
    </div>
    <h3>Latest blog posts</h3>
    <ul>
      <li v-for="blog in blogsData" :key="blog.id">
        <a :href="'blog/' + blog.urlParam">
          {{ blog.blogName }}
        </a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
img {
  object-fit: cover;
}
.block-flex {
  display: block;
}

@media only screen and (min-width: 900px) {
  .block-flex {
    display: flex;
  }
}
</style>
