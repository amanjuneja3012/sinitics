<template>
    <div class="budgetCalculator column">
        <div class="column w100 black roundedTop center">
            <div class="w50 inline-flex vTop colorWhite f13"><span>Per month Savings with <span class='red'>50%</span> Automation</span></div>
            <div class="row w50 vTop inline-flex is-paddingless center">
                <div class="text colorWhite inline-flex vTop f12 mr10">USD</div>
                <div class="text inline-flex vTop f16 colorWhite bold">3400$</div>
            </div>
        </div>
            <div class="row w100 white">
                <div class="column">
                    <div class="text colorDarkBlack inline-flex w50">Budget</div>
                    <div class="text colorDarkBlack inline-flex w50">$34000</div>
                </div>
            </div>
            <div class="column w100 white">
                <div class="column">
                    <div class="text colorDarkBlack inline-flex w50">Users</div>
                    <div class="text colorDarkBlack inline-flex w50">150</div>
                </div>
            </div>
    </div>
</template>

<script>
    import NoSSR from 'vue-no-ssr';
    var components = {};
    components['no-ssr'] = NoSSR;
    export default {
        data: function () {
            return {
                budgetValue: 0,
                userValue: 0
            }
        },
        components: {
            'no-ssr':NoSSR
        }
    }
</script>


<style scoped>
    .budgetCalculator{
        display:flex;
        padding: 5% 12%;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>