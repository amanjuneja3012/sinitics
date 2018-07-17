<template>
    <div class="infoBlock flex card" v-if="visibility && $device.isDesktop">
        <div class="leftImage inlineFlex w40 center vTop" :style="{
            'background-image':'url('+image+')'
        }"></div>
        <div class="column inlineFlex w60 vTop">
            <h3 class="bold inline-flex f25">{{heading}}</h3>
            <p class="text inline-flex f14 mt10">{{text}}</p>
            <div class="mt10">
                <Button
                    :text="buttonText"
                    backgroundColor="#ff003c"
                    :onClick="function(){}"
                    color="white">
                </Button>
            </div>
        </div>
    </div>
    <div class="infoBlock card mobile column" v-else-if="visibility && $device.isMobile">
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