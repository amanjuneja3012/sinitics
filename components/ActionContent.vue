<template>
    <div class="content-container" :style="{
    'width': width,
    'height': (($device.isMobile)?'auto':height),
    'padding': padding
      }">
    <div class="is-hidden-touch">
            <h1 v-if='header' v-html="header"></h1>
            <h3 v-if='subtitle && title' v-html="title"></h3>
            <h3 v-if='subtitle === undefined && title' v-html="title" class='head-mar'></h3>
            <p v-if='subtitle' v-html="subtitle"></p>
            <div class="button-container">
                <div v-if="!externalComponent" class="buttons" v-for="(button, index) in buttons" :key="index">
                    <Button
                        :text="button.text"
                        :to="button.to"
                        :backgroundColor="button.backgroundColor"
                        :color="button.color"
                        :onClick="function(){}"
                        >
                    </Button>
                </div>
                <AppsWidget v-if="externalComponent"></AppsWidget>
                <InputBox v-if="inputBox" :sendText="sendText" :placeHolder="placeHolder" ></InputBox>
                <ListTypes v-if="listTypes"></ListTypes>
            </div>
        </div>
        <div class="mobileContentCard is-hidden-desktop">
            <h1 v-if='header' v-html="header"></h1>
            <h3 v-if='subtitle && title' v-html="title"></h3>
            <h3 v-if='subtitle === undefined && title' v-html="title" class='head-mar'></h3>
            <p v-if='subtitle' v-html="subtitle"></p>
            <div class="button-container">
                <div v-if="!externalComponent" class="buttons" v-for="(button, index) in buttons" :key="index">
                    <Button
                            :text="button.text"
                            :to="button.to"
                            :backgroundColor="button.backgroundColor"
                            :color="button.color"
                            :onClick="function(){}"
                    >
                    </Button>
                </div>
                <AppsWidget v-if="externalComponent"></AppsWidget>
                <InputBox v-if="inputBox" :sendText="sendText" :placeHolder="placeHolder" ></InputBox>
                <ListTypes v-if="listTypes"></ListTypes>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '~/components/Button';
    import AppsWidget from '~/components/AppsWidget'
    import InputBox from '~/components/InputBox'
    import ListTypes from '~/components/ListTypes'
    export default {
        props: ['title', 'header', 'subtitle', 'buttons', 'width', 'height', 'padding', 'externalComponent', 'inputBox', 'listTypes', 'sendText', 'placeHolder' ],
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
        font-size: 2.12em;
        color: #1e1e1e;
        font-weight: bold;
        line-height: 1.36em;
        margin-bottom: 2%;
    }
    .head-mar{
        margin-bottom: 7%;
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
    .mobileContentCard.content-container{
        height: auto;
        text-align: center;
        padding: 5%;
        margin-bottom: 100px;
        box-sizing: border-box;
    }
    .mobileContentCard.content-container h1,.mobileContentCard.content-container h3{
        font-size: 1.8em;
        color: #1e1e1e;
        font-weight: bold;
        line-height: 1.2em;
        margin-bottom: 5%;
    }
    .mobileContentCard.content-container p{
        font-size: 1em;
    }
    .mobileContentCard .button-container{
        margin: 0 auto;
    }
    .mobileContentCard.content-container .input-cont{
        margin: 0 auto;
        width: 350px;
    }
</style>