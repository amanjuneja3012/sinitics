<template>
  <div 
    :style="{
      'width': width,
      'height': height,
      'padding': padding
    }" 
    class="feature-container">
    <img 
      :src="iconUrl" 
      class="icon">
    <p 
      class="title" 
      v-html="title"/>
    <p 
      class="subtitle" 
      v-html="subtitle"/>
  </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle', 'width', 'height', 'padding', 'iconUrl']
    };

</script>


<style scoped>
.feature-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-left: 30px;
  border-radius: 3px;
  cursor: pointer;
}

.icon {
  width: 80px;
  height: 80px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  color: #1e1e1e;
  margin-top: 50px;
  margin-bottom: 30px;
}
.subtitle {
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  color: #1e1e1e;
  margin-top: 10px;
}
.mobile .feature-container .title {
  font-size: 22px;
}
.mobile .feature-container .subTitle {
  font-size: 18px;
}
.mobile .feature-container .icon {
  width: 100px;
  height: 100px;
}
</style>