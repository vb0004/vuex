<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div>
    <NavBar />
    <h1 class="text-center m-4">My App</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>
<style scoped>
@import 'style.css';
</style>
