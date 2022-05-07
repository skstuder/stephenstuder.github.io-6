<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1 class="fake-logo">Stephen Studer</h1>
    <nav>
      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </div>
    </nav>
    <p>stephenkstuder@gmail.com</p>
  </header>
  <main class="layout">
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/normalize.css";
</style>
