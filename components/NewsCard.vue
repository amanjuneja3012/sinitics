<template>
  <div class="card news column zeroPadding">
    <div 
      :style="{
        'background-image':'url('+image+')'
      }" 
      class="image"/>
    <div class="text">{{ content }}</div>
  </div>
</template>

<script>
    export default {
        props: ['image','content']
    };

</script>


<style scoped>
    .news{
        display: inline-flex;
        width: 240px;
    }
</style>