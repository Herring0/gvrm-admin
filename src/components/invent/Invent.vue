<template>
    <div class="main-wrapper">

        <SideWrapper></SideWrapper>

        <InventContent></InventContent>
    </div>
</template>
  
<script>
import SideWrapper from './Sidebar.vue';
import InventContent from './Content.vue';

export default {
    name: 'InventItem',
    props: {
    },
    components: {
        SideWrapper,
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