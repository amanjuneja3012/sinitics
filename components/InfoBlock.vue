<template>
  <div 
    v-if="visibility" 
    class="infoBlock flex card is-hidden-touch">
    <div 
      :style="{
        'background-image':'url('+image+')'
      }" 
      class="leftImage inlineFlex w40 center vTop"/>
    <div class="column evenFlex inlineFlex w60 vTop">
      <h3 class="bold inline-flex f25">{{ heading }}</h3>
      <p class="text inline-flex f14 mt10">{{ text }}</p>
      <div class="mt10">
        <Button
          :text="buttonText"
          :onClick="function(){}"
          backgroundColor="#ff003c"
          color="white"/>
      </div>
    </div>
  </div>
</template>

<script>
    import Button from "~/components/Button";
    export default {
        components:{
            Button
        },
        props: ["buttonText","heading","text","image","visibility"],
    };
</script>
<style scoped>
    .evenFlex {
      height: 100%;
      flex-direction: column;
      justify-content: space-evenly;      
    }
    .infoBlock{
        box-sizing:border-box;
        padding:5%;
    }
    .leftImage{
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>