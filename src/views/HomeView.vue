<script setup></script>

<template>
  <main>
    <div class="block-flex flex-align-center flex-justify-center">
      <div class="flex-one flex flex-align-center flex-justify-center">
        <img src="../assets/images/stephen.png" alt="">
      </div>
    <div class="flex-two">
    <h2 class="">
     UI Engineer, Javascript, Vue.js
    </h2>
    <p>
     I &#10084; building and improving user interfaces.
    </p>
    </div>
    </div>
    <h3>Latest blog posts</h3>
    <ul>
      <li>
        <a href="/should-i-become-a-front-end-developer">
          For Beginners: Should I Become a Front End Developer
        </a>
      </li>
      <li>
        <a href="/tips-for-learning-a-large-new-codebase-quickly">
          Tips For Learning a Large New Codebase Quickly
        </a>
      </li>
    </ul>
    
  </main>
</template>

<style scoped>
.circle {
  background: rgb(2, 0, 36, 1);
  background: linear-gradient(90deg, #25253f80, #2a456480, #29698680);
  height: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
}
.background {
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  height: 320px;
  width: 320px;
}
.icons {
  max-width: 300px;
}
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
