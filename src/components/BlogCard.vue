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
      <template v-for="tag in props.blogData.Tags" :key="tag.id">
        <span class="tag">{{ tag }}</span>
      </template>
      <p>
        {{ props.blogData.shortDescription }}
      </p>
    </div>
  </a>
</template>
