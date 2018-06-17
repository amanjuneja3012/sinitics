<template>
    <div class="rel w50">
        <div class="budgetCalculator column">
            <div class="column w100 black roundedTop center">
                <div class="w50 inline-flex vTop colorWhite f13"><span>Per month Savings with <span class='red'>50%</span> Automation</span></div>
                <div class="row w50 vTop inline-flex is-paddingless center mt8 alignRight">
                    <div class="text colorWhite inline-flex vTop f14 mr10">USD</div>
                    <div class="text inline-flex vTop f18 colorWhite bold">{{userValue*budgetValue}}$</div>
                </div>
            </div>
                <div class='row w100 white'>
                    <div class='column'>
                        <div class='text colorDarkBlack inline-flex alignLeft w50 f13 bold pr5'>Budget</div>
                        <div class='text colorDarkBlack inline-flex alignRight w50 f13 bold pr5'>${{budgetValue}}</div>
                        <no-ssr>
                            <vue-slider 
                                ref='slider'
                                v-model="budgetValue"
                            >
                            </vue-slider>
                        </no-ssr>
                    </div>
                </div>
                <div class="column w100 white is-paddingless">
                    <div class="column">
                        <div class="text colorDarkBlack inline-flex w50 alignLeft f13 bold pr5">Users</div>
                        <div class="text colorDarkBlack inline-flex w50 alignRight f13 bold pr5">{{userValue}}</div>
                        <no-ssr>
                            <vue-slider ref="slider" v-model="userValue"></vue-slider>
                        </no-ssr>
                    </div>
                </div>
        </div>
        <div class="calcBack"></div>
    </div>
</template>

<script>
    import NoSSR from 'vue-no-ssr';
    var components = {};
    components['no-ssr'] = NoSSR;
    if (process.browser) {
        // in older versions of nuxt, it's process.BROWSER_BUILD
        let VueSlider = require('vue-slider-component')
        components['vue-slider'] = VueSlider
    }
    export default {
        data: function () {
            return {
                budgetValue: 0,
                userValue: 0
            }
        },
        components: components
    }
</script>


<style scoped>
    .budgetCalculator{
        display:flex;
        padding:47% 24% 15% 24%;
        align-items: center;
        justify-content: center;
        height: 56%;
        box-sizing:border-box;
        .text{
            font-size:12px;
        }
    }
    .calcBack{
        width: 350px;
        height: 600px;
        background-image: url(/_nuxt/img/calcBack@3x.bd8e67f.png);
        background-size: contain;
        position: absolute;
        background-repeat: no-repeat;
        top: 25%;
        z-index: -1;
        left: 32%;
    }
</style>