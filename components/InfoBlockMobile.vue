<template>
  <div 
    v-if="visibility" 
    class="infoBlock card mobile column is-hidden-desktop">
    <div 
      :style="{
        'background-image':'url('+image+')'
      }" 
      class="leftImage center w100"/>
    <div class="column">
      <h3 class="bold inline-flex f25">{{ heading }}</h3>
      <p class="text inline-flex f18 mt10">{{ text }}</p>
      <div class="mt10 center">
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