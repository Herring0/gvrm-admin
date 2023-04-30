<template>
  <li v-if="category.children.length" class="tree-item">
    <div class="tree-cat-container" v-bind:id="category.id">
      <div v-on:click="cascade" class="tree-arrow">
        <font-awesome-icon v-if="hidden" icon="fa-solid fa-chevron-right" size="sm"/>
        <font-awesome-icon v-else icon="fa-solid fa-chevron-down" size="sm"/>
      </div>
      <span v-on:click="onItemClick">{{ category.name }}</span>
    </div>
    <ul ref="tree-group" class="tree-group hidden">
      <SidebarTreeItem v-for="cat in category.children" :key="cat.id" :category="cat"></SidebarTreeItem>
    </ul>
  </li>

  <li v-else v-on:click="onItemClick"><span v-bind:id="category.id" class="tree-cat-container">{{
      category.name
    }}</span></li>
</template>

<script>
export default {
  name: "SidebarTreeItem",
  props: {
    category: Object,
  },
  data() {
    return {
      hidden: true
    }
  },
  methods: {
    cascade: function () {
      let el = this.$refs["tree-group"];
      if (el.getAttribute("class").includes("hidden")) {
        el.classList.remove("hidden");
        this.hidden = false;
      } else {
        el.classList.add("hidden");
        this.hidden = true;
      }
    },
    onItemClick: function () {
      this.$store.commit("invent/setSelectedCategory", this.category);
    }
  }
}
</script>

<style scoped>

.tree-arrow:hover {
  background-color: rgba(160, 168, 156, 0.55);
}

.cd-accordion-menu .tree-cat-container {
  padding: 10px 13px 10px 40px;
  font-size: 1rem;
}

.tree-group {
  display: flex;
  flex-direction: column;
}

.hidden {
  display: none;
}

.tree-cat-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.cd-accordion-menu span {
  color: rgb(31, 35, 40);
}

.tree-cat-container:hover {
  background-color: rgba(208, 215, 222, 0.32);;
}

.tree-arrow {
  min-height: 35px;
  min-width: 25px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(101, 109, 118);;
}

.cd-accordion-menu ul {
  padding: 0;
}

.cd-accordion-menu label {
  cursor: pointer;
  user-select: none;
}

.cd-accordion-menu input[type=checkbox]:checked + label + ul,
.cd-accordion-menu input[type=checkbox]:checked + label:nth-of-type(n) + ul {
  display: block;
}

.cd-accordion-menu ul .tree-cat-container {
  padding-left: 90px;
}

.cd-accordion-menu ul ul .tree-cat-container {
  padding-left: 130px;
}

.cd-accordion-menu ul ul ul .tree-cat-container {
  padding-left: 180px;
}

</style>