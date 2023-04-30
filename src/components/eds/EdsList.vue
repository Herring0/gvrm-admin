<template>
  <div class="main-wrapper">

    <div class="content-wrapper">
      <div class="table-container">
        <h2>ЭЦП сотрудников</h2>
        <ul class="responsive-table" id="eds-table">
          <li class="table-header">
            <span class="col col-1">ФИО</span>
            <span class="col col-2">Действителен до</span>
            <span class="col col-3">Дней до окончания</span>
            <span class="col col-4">Тип</span>
            <span class="col col-5">Серийный номер</span>
          </li>
          <EdsListItem v-for="el in eds" :key="el.SN" :eds="el"></EdsListItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import EdsListItem from "./EdsListItem.vue";
import axios from "axios"

export default {
  name: 'EdsList',
  components: {
    EdsListItem
  },
  data() {
    return {
      eds: null
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_BACKEND_HOST}/certificates/list`)
      .then(response => { (this.eds = response.data) });
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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

.content-wrapper {
  background-color: var(--content-bg-color);
  width: 100%;
  height: auto;
  margin-left: 15px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}

h2 small {
  font-size: 0.5em;
}

.responsive-table {
  padding: 0 40px 0 40px;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.responsive-table .table-header {
  background-color: #95a5a6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

@media (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
}

.col {
  font-size: 16px;
}

:deep(.col) {
  text-align: center;
}

:deep(.col-1) {
  flex-basis: 30%;
}

:deep(.col-2) {
  flex-basis: 25%;
}

:deep(.col-3) {
  flex-basis: 15%;
}

:deep(.col-4) {
  flex-basis: 15%;
}

:deep(.col-5) {
  flex-basis: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>