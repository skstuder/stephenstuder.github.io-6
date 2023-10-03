<script setup>
const props = defineProps({
  blogData: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <a class="mb-2" :href="'blog/' + props.blogData.urlParam">
    <div class="card">
      <h3>{{ props.blogData.blogName }}</h3>
      <span class="tag">Web Dev</span>
      <p>
        {{ props.blogData.shortDescription }}
      </p>
    </div>
  </a>
</template>
