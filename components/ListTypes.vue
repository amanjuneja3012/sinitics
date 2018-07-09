
<template>
    <div class="types">
      <div v-for="item in items" v-bind:key=item.name v-bind:class="{ disable: item.disable }" class="items">
          <img :src=item.icon class="icon" />
          <p class="title">{{ item.name }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
          return {
            items:[
              {name: 'iGaming', icon: 'igaming@2x.png'},
              {name: 'Finance', icon: 'finance@2x.png'},
              {name: 'Outsourcing', icon: 'outsourcing@2x.png', disable: true}
              // {name: 'Government', icon: 'government@2x.png', disable: true}
            ]
          }
        }
    }
</script>

<style scoped>
    /* .items{
      display: flex;
      align-items: center;
      justify-content: center;
    } */
    .types{
      margin-left: -15px;
    }
    .icon-container{
      display: block;
      margin-top: 75px;
    }
    .title{
      display: block;
      font-size: 16px;
      font-weight: 600;
    }
    .disable{
      opacity: 0.5;
    }
    .icon{
      width: 50px;
      height: 50px;
      margin-bottom: 8px;
    }
</style>