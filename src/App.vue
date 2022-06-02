<script>
export default {
  data() {
    return {
      toggleMenu: false,
      isDesktop: false,
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth > 600) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<template>
  <header v-if="isDesktop">
    <RouterLink to="/">Stephen Studer</RouterLink>
    <nav>
      <div>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/blogs">Blog</RouterLink>
      </div>
    </nav>
  </header>
  <header class="hamburger-menu" v-else>
    <div
      id="nav-icon3"
      :class="{ open: toggleMenu }"
      @click="toggleMenu = !toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>

  <transition name="slide-down" mode="out-in">
    <div class="flex flex-col drop-menu" v-if="toggleMenu">
      <RouterLink
        @click="toggleMenu = !toggleMenu"
        class="drop-menu-item"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        @click="toggleMenu = !toggleMenu"
        class="drop-menu-item"
        to="/about"
        >About</RouterLink
      >

      <RouterLink
        @click="toggleMenu = !toggleMenu"
        class="drop-menu-item"
        to="/projects"
        >Projects</RouterLink
      >
      <RouterLink
        @click="toggleMenu = !toggleMenu"
        class="drop-menu-item"
        to="/blogs"
        >Blog</RouterLink
      >
    </div>
  </transition>
  <main class="layout">
    <router-view v-slot="{ Component }">
      <transition name="scale">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/normalize.css";
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.hamburger-menu {
  justify-content: flex-end;
  display: flex;
}

.drop-menu {
  height: fit-content;
  width: 100vw;
  margin-top: var(--headerHeight);
  background: var(--headerBackground);
  position: fixed;
  z-index: 1;
}

.drop-menu-item {
  text-align: center;
  padding: 10px;
  border-top: white solid 0.5px;
  color: var(--offWhite);
}

.drop-menu-item:last-child {
  border-bottom: white solid 0.5px;
}

#nav-icon3 {
  width: 30px;
  height: 25px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
#nav-icon3 span {
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: var(--offWhite);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 10px;
}

#nav-icon3 span:nth-child(4) {
  top: 20.5px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>
