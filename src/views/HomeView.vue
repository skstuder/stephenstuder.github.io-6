<script setup></script>

<template>
  <main class="layout">
    <div class="w-100 flex flex-justify-center flex-align-center">
      <div class="circle background flex flex-justify-center flex-align-center">
        <div class="circle flex flex-justify-center flex-align-center">
          <img src="../assets/images/stephen.png" alt="" />
        </div>
      </div>
    </div>
    <h2>I am a User Interface Engineer specialized in <b>Javascript</b>.</h2>
    <p>
      Experienced in intergations with api's and services, developing user
      facing features, and implementing design systems.
    </p>
    <h3>Latest blog posts</h3>
    <ul>
      <li>
        <a href="#"> 8 Tips For Learning a New Codebase Fast </a>
      </li>
      <li>
        <a href="#"> Unit Testing Principles </a>
      </li>
      <li>
        <a class="link" href="#"> Tips for clean code</a>
      </li>
    </ul>
    <h3>Contact</h3>
    <p>Contact: stephenkstuder@gmail.com</p>
    <br />
    <div class="flex flex-between icons">
      <a href="https://www.linkedin.com/in/stephenkstuder/" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="LinkedIn"
          role="img"
          viewBox="0 0 512 512"
          fill="#fff"
          width="54px"
          height="54px"
        >
          <rect width="512" height="512" rx="15%" fill="#0077b5" />
          <circle cx="142" cy="138" r="37" />
          <path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198" />
          <path
            d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"
          />
        </svg>
      </a>
      <a href="https://github.com/stephenstuder" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="GitHub"
          role="img"
          viewBox="0 0 512 512"
          width="54px"
          height="54px"
        >
          <rect width="512" height="512" rx="15%" fill="#181717" />
          <path
            fill="#fff"
            d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
          />
        </svg>
      </a>
      <a href="https://twitter.com/StephenStuder1" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Twitter"
          role="img"
          viewBox="0 0 512 512"
          width="54px"
          height="54px"
        >
          <rect width="512" height="512" rx="15%" fill="#1da1f2" />
          <path
            fill="#fff"
            d="M437 152a72 72 0 01-40 12a72 72 0 0032-40a72 72 0 01-45 17a72 72 0 00-122 65a200 200 0 01-145-74a72 72 0 0022 94a72 72 0 01-32-7a72 72 0 0056 69a72 72 0 01-32 1a72 72 0 0067 50a200 200 0 01-105 29a200 200 0 00309-179a200 200 0 0035-37"
          />
        </svg>
      </a>
    </div>
    <br />
    <br />
    <br />
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
  height: 250px;
}
@media only screen and (min-width: 630px) {
  .circle {
    width: 380px;
    height: 380px;
  }
  .background {
    height: 420px;
    width: 420px;
  }
  img {
    height: 320px;
  }
}
</style>
