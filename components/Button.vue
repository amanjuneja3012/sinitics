<template>
    <div  class="button" :style="{
        'background-color': backgroundColor,
        'width': width?width:'170px',
        'color': color,
        'justify-content': align?align:'center'}">
        <img :src="iconUrl" v-if="iconUrl !== undefined" class="icon"/>
        {{text}}
    </div>
</template>

<script>
    export default {
        props: ['text', 'backgroundColor', 'color', 'width', 'iconUrl', 'showIcon', 'align']
    }

</script>


<style scoped>
    .button {
        height: 50px;
        text-align: center;
        display: flex;
        align-items: center;
        box-shadow: 0 3px 9px 0 #e6e6e6;
        cursor: pointer;
        font-size: 16px;
        padding: 18px;
    }
    .icon{
        width: 20px;
        height: 20px;

    }
</style>