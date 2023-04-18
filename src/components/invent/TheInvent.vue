<template>
  <div class="main-wrapper">

    <SidebarTree></SidebarTree>

    <InventContent></InventContent>
  </div>
</template>

<script>
import SidebarTree from './SidebarTree.vue';
import InventContent from './InventContent.vue';

export default {
  name: 'TheInvent',
  props: {},
  components: {
    SidebarTree,
    InventContent
  }
}

</script>

<style scoped>
.main-wrapper {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
</style>