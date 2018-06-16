<template>
    <div class="content-container" :style="{
    'width': width,
    'height': height,
    'padding': padding
  }">
        <h3 v-html="title"></h3>
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
        props: ['title', 'subtitle', 'buttons', 'width', 'height', 'padding', 'externalComponent', 'inputBox', 'listTypes'],
        components: {
            Button,
            AppsWidget,
            InputBox,
            ListTypes
        },
        data:{
            externalComponent:'externalComponent',
            inputBox:'inputBox',
            listTypes:'listTypes'
        }
    }
</script>

<style scoped>
    h3{
        font-size: 2em;
        color: #1e1e1e;
        font-weight: bold;
        line-height: 1.1em;
    }
    p {
        font-size: 1em;
        color: #1e1e1e;
        margin-top: .5em;
    }
    .button-container{
        display: flex;
        flex-direction: row;
        margin-top: 1em;
        justify-content: space-between;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        width: 170px;
        height: 50px;
        margin-left: 1em;
    }
    .buttons:first-child{
        margin-left: 0;
    }
    .content-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }
</style>