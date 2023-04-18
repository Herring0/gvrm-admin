<template>
    <li class="table-row">
        <div class="col col-1" data-label="owner">{{ eds.owner }}</div>
        <div class="col col-2" data-label="notAfter">{{ formatDate(eds.notAfter) }}</div>
        <div class="col col-3" data-label="daysLeft">{{ dayLeft(eds.notAfter) }}</div>
        <div class="col col-4" data-label="type">{{ eds.type }}</div>
        <div class="col col-5" data-label="buttons">{{ eds.sn }}</div>
    </li>
</template>
  
<script>
import { DateTime } from "luxon";

export default {
    name: 'EdsListItem',
    props: {
        eds: Object
    },
    methods: {
        formatDate: function (value) {
            return DateTime.fromISO(value).setLocale("ru").toFormat('dd.LL.yyyy');
        },
        dayLeft: function (date) {
            return Math.trunc(DateTime.fromISO(date).diff(DateTime.now(), 'days').toObject().days);
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-row {
    background-color: #ffffff;
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.1);
}

.responsive-table li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}

@media (max-width: 767px) {

    li {
        display: block;
    }

    .col {
        flex-basis: 100%;
    }

    .col {
        display: flex;
        padding: 10px 0;
    }

    .col:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
}
</style>