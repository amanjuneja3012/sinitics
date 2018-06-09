<template>
    <div  class="button" :style="{
        'background-color': backgroundColor,
        'color': color}">
        {{text}}
    </div>
</template>

<script>
    export default {
        props: ['text', 'backgroundColor', 'color']
    }

</script>


<style scoped>
    .button {
        width: 170px;
        height: 50px;
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        box-shadow: 0 3px 9px 0 #e6e6e6;
        cursor: pointer;
        font-size: 16px;
    }
</style>