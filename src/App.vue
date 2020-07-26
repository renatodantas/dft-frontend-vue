<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view />
    </div>
    <Avisos />
  </div>
</template>

<script>
import Navbar from './components/shared/Navbar.vue';
import Avisos from './components/shared/Avisos.vue';

export default {
  components: {
    Navbar,
    Avisos,
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
