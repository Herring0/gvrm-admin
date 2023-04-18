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
        .get(`http://localhost:8080/api/categories/list`)
        .then(response =>  this.categories = response.data );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-wrapper {
  background-color: var(--main-bg-color);
  width: 350px;
  height: 700px;
}

.cd-accordion-menu {
  background-color: var(--main-bg-color);
  padding: 0;
  margin: auto;
}

.cd-accordion-menu input[type=checkbox] {
  position: absolute;
  opacity: 0;
}

.cd-accordion-menu label,
.cd-accordion-menu a {
  position: relative;
  display: block;
  padding: 18px 18px 18px 64px;
  background: #4d5158;
  box-shadow: inset 0 -1px #555960;
  color: #ffffff;
  font-size: 1rem;
}


.cd-accordion-menu ul {
  display: none;
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


.cd-accordion-menu ul label,
.cd-accordion-menu ul a {
  background: #35383d;
  box-shadow: inset 0 -1px #41444a;
  padding-left: 82px;
}

.cd-accordion-menu ul label::before {
  left: 36px;
}

.cd-accordion-menu ul label::after,
.cd-accordion-menu ul a::after {
  left: 59px;
}

.cd-accordion-menu ul ul label,
.cd-accordion-menu ul ul a {
  padding-left: 110px;
}

.cd-accordion-menu ul ul label::before {
  left: 54px;
}

.cd-accordion-menu ul ul label::after,
.cd-accordion-menu ul ul a::after {
  left: 77px;
}

.cd-accordion-menu ul ul ul label,
.cd-accordion-menu ul ul ul a {
  padding-left: 130px;
}

.cd-accordion-menu ul ul ul label::before {
  left: 72px;
}

.cd-accordion-menu ul ul ul label::after,
.cd-accordion-menu ul ul ul a::after {
  left: 95px;
}
</style>