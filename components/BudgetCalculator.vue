<template>
    <div class="rel w50">
        <div class="budgetCalculator column">
            <div class="column w100 black roundedTop center">
                <div class="w50 inline-flex vTop colorWhite colorWhite-text f13"><span>Per month Savings <br> with <span class='red'>50%</span> Automation</span></div>
                <div class="row w50 vTop inline-flex is-paddingless center alignRight">
                    <div class="text colorWhite inline-flex vTop f14 mr10">USD</div>
                    <div class="text inline-flex vTop f18 colorWhite bold currency">{{userValue*budgetValue}}$</div>
                </div>
            </div>
                <div class='row w100 items white'>
                    <div class='column'>
                        <div class='w50 item-container'>
                            <div class='budget-item-icon'></div>
                            <div class='text colorDarkBlack inline-flex alignLeft f13 bold pr5'>Budget</div>
                        </div>
                        <div class='text colorDarkBlack inline-flex alignRight w50 f13 bold pr5'>${{budgetValue}}</div>
                        <no-ssr>
                            <div>
                                <vue-slider 
                                    ref='slider'
                                    v-model="budgetValue"
                                >
                                </vue-slider>
                            </div>
                        </no-ssr>
                    </div>
                </div>
                <div class="row w100 white items">
                    <div class="column">
                        <div class='w50 item-container'>
                            <div class='user-item-icon'></div>
                            <div class="text colorDarkBlack inline-flex alignLeft f13 bold pr5">Users</div>
                        </div>
                        <div class="text colorDarkBlack inline-flex w50 alignRight f13 bold pr5">{{userValue}}</div>
                        <no-ssr>
                            <div>
                                <vue-slider ref="slider" v-model="userValue"></vue-slider>
                            </div>
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
    .black{
        padding: 1.4em;
    }
    .colorWhite-text{
        font-size: 16px;
    }
    .currency{
        font-size: 30px;
    }
    .colorWhite-text .red{
        font-weight: 700;
    }
    .budgetCalculator{
        display:flex;
        width: 64%;
        padding: 0;
        top: 158px;
        left: 42px;
        position: absolute;
        box-sizing:border-box;
        align-items: center;
        justify-content: center;
        box-shadow: -2px 47px 212px -56px rgba(0,0,0,0.18);
        .text{
            font-size:12px;
        }
    }
    .items{
        height: 130px;
        padding: 1.2em 1.4em 1.4em 1.4em;
    }
    .items .column{
        padding: 0px;
    }
    .text{
        font-size: 20px;
        font-weight: 600;
    }
    .calcBack{
        width: 490px;
        height: 428px;
        background-image: url(/images/english/calcBack@2x.png);
        background-size: contain;
        position: absolute;
        background-repeat: no-repeat;
        top: 20%;
        z-index: -1;
        left: 17%;
    }
    .vue-slider-component{
        margin-top: 20px;
    }
    .budget-item-icon{
        width: 45px;
        height: 45px;
        margin-right: 10px;
        vertical-align: middle;
        display: inline-block;
        background-size: contain;
        background-image: url('/images/english/budget@2x.png');
    }
    .user-item-icon{
        width: 45px;
        height: 45px;
        margin-right: 10px;
        vertical-align: middle;
        display: inline-block;
        background-size: contain;
        background-image: url('/images/english/users@2x.png');
    }
    .item-container{
        display: inline-block;
    }
</style>