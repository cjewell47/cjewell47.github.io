<template>
  <div>
    <app-header />
    <!-- <nuxt /> -->
    <transition name="router-anim" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import header from '../components/Header.vue'
export default {
  components: {
    'app-header': header
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
body {
  -webkit-font-smooting: antialiased !important;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: 'Titillium Web', Arial, sans-serif;
  font-weight: 300;
  background: #BCFFFF;
  background: -webkit-linear-gradient(to right, #BCFFFF ,#FFADE0);
  background: linear-gradient(to right, #BCFFFF, #FFADE0);
  background-size: 300% 300%;
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite;
  h1 {
    font-weight: 400;
  }
  .page {
    width: inherit;
    max-width: 900px;
    margin: auto;
    padding: 140px 15px 80px;
  }
  @media screen and (min-width: 768px) {
    .router-anim-enter-active {
      animation: coming 0.6s;
      animation-delay: 0.3s;
      -webkit-animation: coming 0.6s;
      -webkit-animation-delay: 0.3s;
      opacity: 0;
    }
    .router-anim-leave-active {
      animation: going 0.6s;
      -webkit-animation: going 0.6s;
    }
  }
  button {
    cursor: pointer;
      border: none;
      padding: 0;
      font-family: 'Titillium Web', Arial, sans-serif;
  }
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@-webkit-keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
