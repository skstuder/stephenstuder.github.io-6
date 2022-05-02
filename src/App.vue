<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1 class="fake-logo">Stephen Studer</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
    </nav>
  </header>
  <main class="layout">
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/normalize.css";
</style>
