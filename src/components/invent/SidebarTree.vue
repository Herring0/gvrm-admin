<template>
  <div class="side-wrapper">
    <ul class="cd-accordion-menu animated" id="categories-list">
      <SidebarTreeItem v-for="el in categories" :key="el.id" :category="el"></SidebarTreeItem>
    </ul>
  </div>
</template>

<script>
import SidebarTreeItem from "@/components/invent/SidebarTreeItem";
import axios from "axios"


export default {
  name: 'SidebarTree',
  data() {
    return {
      categories: null
    }
  },
  components: {
    SidebarTreeItem
  },
  mounted() {
    axios
        .get(`${process.env.VUE_APP_BACKEND_HOST}/categories/list`)
        .then(response =>  this.categories = response.data );
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-wrapper {
  background-color: var(--content-bg-color);
  width: 350px;
}

.cd-accordion-menu {
  /*background-color: var(--content-bg-color);*/
  padding: 0;
  margin: auto;
}
</style>