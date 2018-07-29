<template>
  <div 
    :style="{
      'width': width
    }" 
    class="feature-container">
    <div class="icon-div">
      <img 
        :src="iconUrl" 
        class="icon">
    </div>
    <p 
      class="title" 
      v-html="title"/>
    <p 
      class="subtitle" 
      v-html="subtitle"/>
    <p 
      class="detail" 
      v-html="detail"/>
    <div 
      :style="{ backgroundImage: `url('${hoverImage}')` }" 
      class="bot-image"/>
  </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle', 'iconUrl', 'detail', 'width', 'hoverImage']
    };

</script>


<style scoped>
    .feature-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        margin-left: 30px;
        border-radius: 3px;
        border: 1px solid #dee0e6;
        
    }
    .feature-container:hover .bot-image{
        opacity: 1;
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
    .bot-image{
        top: 0;
        opacity: 0;
        width: 268px;
        height: 305px;
        position: absolute;
        transition: 0.3s opacity ease-in-out;
    }
</style>