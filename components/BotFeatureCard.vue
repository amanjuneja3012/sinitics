<template>
    <div class="feature-container" :style="{
    'width': width,
    'height': height,
    'padding': padding
  }">
        <img :src="iconUrl" class="icon"/>
        <p v-html="title" class="title"></p>
        <p v-html="subtitle" class="subtitle"></p>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle', 'width', 'height', 'padding', 'iconUrl']
    }

</script>


<style scoped>
    .feature-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin-left: 30px;
        border-radius: 3px;
        cursor: pointer;
    }
    .feature-container:hover{
        box-shadow: rgb(230, 230, 230) 0px 2px 17px 5px;
    }

    .icon{
        width: 90px;
        height: 69px;
    }
    .title{
        font-size: 18px;
        font-weight: bold;
        color: #1e1e1e;
        margin-top: 50px;
    }
    .subtitle{
        font-size: 16px;
        color: #1e1e1e;
        margin-top: 10px;
    }
</style>