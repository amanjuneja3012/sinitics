<template>
    <div class="content-container" :style="{
    'width': width,
    'height': height,
    'padding': padding
  }">
        <h1 v-if='header' v-html="header"></h1>
        <h3 v-if='title' v-html="title"></h3>
        <p v-html="subtitle"></p>
        <div class="button-container">
            <div v-if="!externalComponent" class="buttons" v-for="(button, index) in buttons" :key="index">
                <Button
                        :text="button.text"
                        :backgroundColor="button.backgroundColor"
                        :color="button.color">
                </Button>
            </div>
            <AppsWidget v-if="externalComponent"></AppsWidget>
            <InputBox v-if="inputBox"></InputBox>
            <ListTypes v-if="listTypes"></ListTypes>
        </div>
    </div>
</template>

<script>
    import Button from '~/components/Button';
    import AppsWidget from '~/components/AppsWidget'
    import InputBox from '~/components/InputBox'
    import ListTypes from '~/components/ListTypes'
    export default {
        props: ['title', 'header', 'subtitle', 'buttons', 'width', 'height', 'padding', 'externalComponent', 'inputBox', 'listTypes'],
        components: {
            Button,
            AppsWidget,
            InputBox,
            ListTypes
        },
        data: function () {
            return {
            // externalComponent:'externalComponent',
            // inputBox:'inputBox'
            }
        }
    }
</script>

<style scoped>
    h1{
        font-size: 2.7em;
        color: #1e1e1e;
        font-weight: bold;
        line-height: 1.05em;
        margin-bottom: 5%;
    }
    h3{
        font-size: 2em;
        color: #1e1e1e;
        font-weight: bold;
        line-height: 1.1em;
        margin-bottom: 5%;
    }
    p {
        font-size: 1.22em;
        color: #1e1e1e;
        margin-bottom: 7%;
        line-height: 1.4em;
    }
    .button-container{
        display: flex;
        flex-direction: row;
        /* margin-top: 1em; */
        /* justify-content: space-between; */
    }

    .buttons{
        border-radius: 2px;
        display: flex;
        flex-direction: row;
        width: 170px;
        height: 50px;
        margin-right: 1.6em;
        border: none;
    }
    .button{
      border: none;
      border-radius: 2px;
    }
    .content-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }
</style>