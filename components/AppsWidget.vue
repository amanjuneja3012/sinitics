<template>
  <div class="apps-widget">
    <div 
      v-for="item in items" 
      class="icon-container">
      <div class="tooltip">
        <div class="tooltip-header">{{ item.name }}</div>
      </div>
      <img 
        :key="item.icon" 
        :src="item.icon" 
        class="icon" >
    </div>
  </div>
</template>

<script>
    export default {
        data: function () {
          return {
            items:[
              {icon: '/images/english/messenger.svg', name: 'messenger'},
              {icon: '/images/english/we-chat.svg', name: 'we-chat'},
              {icon: '/images/english/line.svg', name: 'line'},
              {icon: '/images/english/skype.svg', name: 'skype'},
              {icon: '/images/english/sms.svg', name: 'sms'},
              {icon: '/images/english/messenger.svg', name: 'messenger'}
            ]
          };
        }
    };
</script>

<style scoped>
    .apps-widget{
        display:block;
        height: 100px;
    }
    .icon-container{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .icon{
        width: 60px;
        height: 60px;
        cursor: pointer;
        margin-right: 20px;
        display: inline-block;
        transition: height 0.2s ease-in-out;
    }
    .mobileContentCard .icon{
        width: 60px;
        height: 60px;
        cursor: pointer;
        margin-right: 30px;
        margin-bottom: 10px;
    }
    .icon{
        fill: #ff0033 !important;
    }
    /* .icon:hover:after{
        content: attr('title');
        position: absolute;
    } */
    .icon-container:hover .tooltip{
        visibility: visible;
    }
    .tooltip{
        width: 70px;
        left: -5px;
        top: -22px;
        z-index: 1;
        color: #fff;
        padding: 4px;
        line-height: 12px;
        border-radius: 2px;
        position: absolute;
        visibility: hidden;
        text-align: center;
        background-color: black;
    }
    .tooltip-header{
        font-size: 10px;
        font-weight: 400;
    }
    .mobileContentCard .apps-widget{
        padding-left: 14%;
    }
</style>