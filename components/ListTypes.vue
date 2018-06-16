
<template>
    <div class="types">
      <div v-for="item in items" class="items">
          <img :src=item.icon class="icon" />
          <p class="title">{{ item.name }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        data: () => {
          items:[
            {name: 'iGaming', icon: 'government.png'},
            {name: 'Finance', icon: 'government.png'},
            {name: 'Outsourcing', icon: 'government.png'},
            {name: 'Government', icon: 'government.png'}
          ]
        }
    }
</script>

<style scoped>
    .email-container{
        margin-top: 25px;
        display: flex;
    }
    .input{
        width: 300px;
        height: 50px;
        border: solid 1.3px #dee0e6;
        background-color: rgba(255, 255, 255, 0.9);
        padding-left: 25px;
    }
    .submit{
        height: 50px;
        color: #fff;
        line-height: 50px;
        padding: 0px 20px;
        border-radius: 2px;
        background-color: #ff003c;
    }
    .icon-container{
        display: flex;
        margin-top: 75px;
    }
</style>