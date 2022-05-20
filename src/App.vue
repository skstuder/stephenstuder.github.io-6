<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">Stephen Studer</RouterLink>
    <nav>
      <div>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/normalize.css";
</style>
