<template>
  <TheHeader user="Гуреев Юрий Сергеевич"></TheHeader>
  <!-- <InventItem></InventItem> -->
  <!-- <EdsList></EdsList> -->
  <router-view />
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
:root {
  --main-bg-color: #2a6e52;
  --content-bg-color: #2a6e5214;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
