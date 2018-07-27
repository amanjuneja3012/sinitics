<template>
  <a :href="to">
    <div 
      :style="{
        'background-color': backgroundColor,
        'width': width?width:'170px',
        'color': color,
        'justify-content': align?align:'center'}" 
      class="button is-hidden-touch" 
      @click.prevent="onClick" >
      <img 
        v-if="iconUrl !== undefined" 
        :src="iconUrl" 
        class="icon">
      {{ text }}
    </div>
    <div 
      :style="{
        'background-color': backgroundColor,
        'width': width?width:'136px',
        'color': color,
        'display': 'inline-flex',
        'justify-content': align?align:'center'}" 
      class="button is-mobile is-hidden-desktop" 
      @click.prevent="onClick" >
      <img 
        v-if="iconUrl !== undefined" 
        :src="iconUrl" 
        class="icon">
      {{ text }}
    </div>
  </a>
</template>

<script>
    export default {
        props: ['text', 'backgroundColor', 'color', 'width', 'iconUrl', 'showIcon', 'align', 'to', 'onClick']
    };
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
    .is-mobile{
        margin: 0 8px;
        font-size: 14px;
    }
</style>