<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">Stephen Studer</RouterLink>
    <nav>
      <div>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blogs">Blog</RouterLink>
      </div>
    </nav>
  </header>
  <main class="layout">
    <transition name="scale" mode="out-in">
      <RouterView />
    </transition>
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/normalize.css";
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
