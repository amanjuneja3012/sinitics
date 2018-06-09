<template>
    <div class="content-container" :style="{
    'width': width,
    'height': height,
    'padding': padding
  }">
        <h3 v-html="title"></h3>
        <p v-html="subtitle"></p>
        <div class="button-container">
            <div class="buttons" v-for="(button, index) in buttons" :key="index">
                <Button
                        :text="button.text"
                        :backgroundColor="button.backgroundColor"
                        :color="button.color">
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '~/components/Button';
    export default {
        props: ['title', 'subtitle', 'buttons', 'width', 'height', 'padding'],
        components: {
            Button
        }
    }

</script>


<style scoped>
    h3{
        font-size: 48px;
        color: #1e1e1e;
    }
    p {
        font-size: 22px;
        color: #1e1e1e;
        margin-top: 21px;
    }
    .button-container{
        display: flex;
        flex-direction: row;
        margin-top: 32px;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        width: 170px;
        height: 50px;
        margin-left: 30px;
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