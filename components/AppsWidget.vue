<template>
    <div class="apps-widget">
        <img v-for="item in items" v-bind:key=item.icon :src=item.icon class="icon" />
    </div>
</template>

<script>
    export default {
        data: function () {
          return {
            items:[
              {icon: '/images/english/messenger.svg'},
              {icon: '/images/english/we-chat.svg'},
              {icon: '/images/english/line.svg'},
              {icon: '/images/english/skype.svg'},
              {icon: '/images/english/sms.svg'}
            ]
          }
        }
    }
</script>

<style scoped>
    .apps-widget{
        display:block;
        height: 100px;
    }
    .icon{
        width: 60px;
        height: 60px;
        cursor: pointer;
        margin-right: 20px;
        display: inline-block;
        transition: height 0.2s ease-in-out;
    }
    .icon{
        fill: #ff0033 !important;
    }
    .icon:hover:after{
        content: attr('title');
        position: absolute;
    }
</style>