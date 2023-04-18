<template>
  <Header user="Гуреев Юрий Сергеевич"></Header>
  <!-- <InventItem></InventItem> -->
  <!-- <EdsList></EdsList> -->
  <router-view />
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
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
