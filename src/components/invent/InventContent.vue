<template>
  <div class="content-wrapper">
    <p id="category"> {{ category }}</p>
  </div>
</template>

<script>


export default {
  name: 'InventContent',
  computed: {
    category() {
      return this.$store.state.invent.selectedCategory
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-wrapper {
  background-color: var(--content-bg-color);
  width: 100%;
  height: auto;
  margin-left: 15px;
}
</style>