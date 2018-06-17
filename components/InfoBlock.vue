<template>
    <div class="infoBlock flex card" v-if="visibility">
        <div class="leftImage inlineFlex w40 center vTop" :style="{
            'background-image':'url('+image+')'
        }"></div>
        <div class="column inlineFlex w60 vTop">
            <div class="bold inline-flex f25">{{heading}}</div>
            <div class="text inline-flex f14 mt10">{{text}}</div>
            <div class="mt10">                
                <Button
                    :text="buttonText"
                    backgroundColor="#ff003c"
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