<template>
  <div>
    <div class="email-container is-hidden-touch" >
      <input 
        v-if="placeHolder" 
        :placeholder="placeHolder" 
        class="input">
      <input 
        v-else 
        class="input" 
        :placeholder="$t('inputBox.placeholder')">
      <div 
        :click="onSubmit" 
        class="submit">{{ sendText ? sendText : $t('inputBox.onSubmitText') }}</div>
    </div>
    <div class="email-container is-hidden-desktop mobileContentCard" >
      <input 
        v-if="placeHolder" 
        :placeholder="placeHolder" 
        class="input">
      <input 
        v-else 
        class="input" 
        :placeholder="$t('inputBox.placeholder')">
      <div 
        class="submit" 
        @click="onSubmit">{{ sendText ? sendText : $t('inputBox.onSubmitText') }}</div>
    </div>
  </div>
</template>

<script>
    export default {
        components: {
        },
        props: ['sendText', 'placeHolder', 'onSubmit'],
    };
</script>

<style scoped>
.email-container {
  /* margin-top: 25px; */
  display: flex;
}
.input {
  width: 300px;
  height: 50px;
  box-shadow: none;
  line-height: 50px;
  border: solid 1.3px #dee0e6;
  background-color: rgba(255, 255, 255, 0.9);
}
.mobileContentCard .input {
  width: 250px;
}
.mobileContentCard .submit {
  padding: 0px 10px;
}
input::-webkit-input-placeholder {
  color: #1e1e1e;
  font-size: 16px;
  opacity: 0.5;
}
.submit {
  height: 50px;
  color: #fff;
  z-index: 1;
  font-size: 16px;
  font-weight: 500;
  line-height: 50px;
  padding: 0px 20px;
  margin-left: -18px;
  border-radius: 2px;
  background-color: #ff003c;
}
.icon-container {
  display: flex;
  margin-top: 75px;
}
.is-hidden-tablet .submit {
  font-size: 13px;
}
</style>
