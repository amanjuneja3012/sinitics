<template>
    <div class="infoBlock card mobile column is-hidden-desktop" v-if="visibility">
        <div class="leftImage center w100" :style="{
            'background-image':'url('+image+')'
        }"></div>
        <div class="column">
            <h3 class="bold inline-flex f25">{{heading}}</h3>
            <p class="text inline-flex f18 mt10">{{text}}</p>
            <div class="mt10 center">
                <Button
                    :text="buttonText"
                    backgroundColor="#ff003c"
                    :onClick="function(){}"
                    color="white">
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "~/components/Button"
    export default {
        props: ["buttonText","heading","text","image","visibility"],
        components:{
            Button
        }
    }
</script>
<style scoped>
    .infoBlock{
        box-sizing:border-box;
        padding:5%;
    }
    .leftImage{
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>