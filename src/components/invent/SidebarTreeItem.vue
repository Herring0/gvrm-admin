<template>

    <li v-if="category.children.length" class="has-children">
      <input type="checkbox" v-bind:name="'group-' + category.id" v-bind:id="'group-' + category.id">
      <label v-bind:for="'group-' + category.id" v-bind:id="category.id" class="clickable">{{ category.name }}</label>
      <ul>
        <SidebarTreeItem v-for="cat in category.children" :key="cat.id" :category="cat"></SidebarTreeItem>
      </ul>
    </li>

    <li v-else><a href="#" v-bind:id="category.id" class="clickable">{{ category.name }}</a></li>

</template>

<script>
export default {
  name: "SidebarTreeItem",
  props: {
    category: Object
  },
  mounted() {

  }
}
</script>

<style scoped>
input[type=checkbox] {
  position: absolute;
  opacity: 0;
}

label,
a {
  position: relative;
  display: block;
  padding: 18px 18px 18px 64px;
  background: #4d5158;
  box-shadow: inset 0 -1px #555960;
  color: #ffffff;
  font-size: 1rem;
}


ul {
  display: none;
  padding: 0;
}

label {
  cursor: pointer;
  user-select: none;
}

input[type=checkbox]:checked + label + ul,
input[type=checkbox]:checked + label:nth-of-type(n) + ul {
  display: block;
}


ul label,
ul a {
  background: #35383d;
  box-shadow: inset 0 -1px #41444a;
  padding-left: 82px;
}

ul label::before {
  left: 36px;
}

ul label::after,
ul a::after {
  left: 59px;
}

ul ul label,
ul ul a {
  padding-left: 110px;
}

ul ul label::before {
  left: 54px;
}

ul ul label::after,
ul ul a::after {
  left: 77px;
}

ul ul ul label,
ul ul ul a {
  padding-left: 130px;
}

ul ul ul label::before {
  left: 72px;
}

ul ul ul label::after,
ul ul ul a::after {
  left: 95px;
}
</style>