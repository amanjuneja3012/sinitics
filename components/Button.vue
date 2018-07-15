<template>
    <a v-bind:href="to"><div  class="button" :style="{
        'background-color': backgroundColor,
        'width': width?width:'170px',
        'color': color,
        'justify-content': align?align:'center'}" v-on:click='onClick' >
        <img :src="iconUrl" v-if="iconUrl !== undefined" class="icon"/>
        {{text}}
    </div></a>
</template>

<script>
    export default {
        props: ['text', 'backgroundColor', 'color', 'width', 'iconUrl', 'showIcon', 'align', 'to', 'onClick']
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
        border: none;
        position: relative;
    }
    .icon{
        width: 38px;
        height: 38px;

    }
</style>