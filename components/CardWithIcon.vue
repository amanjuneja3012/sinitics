<template>
    <div class="feature-container" :style="{
    'width': width
  }">
        <div class="icon-div">
            <img :src="iconUrl" class="icon"/>
        </div>
        <p v-html="title" class="title"></p>
        <p v-html="subtitle" class="subtitle"></p>
        <p v-html="detail" class="detail"></p>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle', 'iconUrl', 'detail', 'width']
    }

</script>


<style scoped>
    .feature-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
        border-radius: 3px;
        border: 1px solid #dee0e6;
        position: relative;
    }

    .icon{
        padding: 15px;
        width: 65px;
        height: 65px;
    }
    .icon-div{
        background: none;
        position: absolute;
        top: -30px;
        width: 65px;
        height: 65px;
        border-radius: 65px;
        background-color: white;
        border: 1px solid #dee0e6;
    }
    .title{
        font-size: 20px;
        font-weight: bold;
        color: #1e1e1e;
        margin-top: 60px;
    }
    .subtitle{
        font-size: 16px;
        color: #1e1e1e40;
        margin-top: 5px;
    }
    .detail{
        padding: 15px 26px 40px 26px;
        font-size: 18px;
        color: #1e1e1e;
        text-align: center;
    }
</style>