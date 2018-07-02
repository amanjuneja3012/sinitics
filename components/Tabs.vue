<template lang="html">
    <div class="enterpriseInfo rel flex center" id="partners">
        <div class="infoBack"></div>
        <div class="row w800 h340 widgetContainer">
            <div class="column widgetHeader">
                <h3 class="text head-text w50 leftAlign inlineFlex wInvert300 f25 bold">Have a <span class="ml5 red"> Client</span>?</h3>
                <div class="tabs rightAlign inlineFlex w300 f13">
                    <div class="tab tab-left-button w50 inlineFlex center padding10 borderRight" v-bind:class="{ active: isActiveFirst }" v-on:click="ActivateFirst" >Agency</div>
                    <div class="tab tab-right-button w50 inlineFlex center padding10" v-bind:class="{ active: isActiveSecond }" v-on:click="ActivateSecond" >System Integrator</div>
                </div>
            </div>
            <InfoBlock 
                buttonText="Enterprise"
                heading="Agency"
                text="Botic enterprise & small business bots have what it takes to launch products and brands-scheduling, human takeover, analytics, omnichannel & more"
                image="/images/english/agency@3x.png"
                :visibility='isActiveFirst'
            />
            <InfoBlock
                buttonText="Book a Demo"
                heading="System Integrator"
                text="Botic enterprise & small business bots have what it takes to launch products and brands: scheduling, human takeover, analytics, omnichannel & more"
                image="images/english/integrator@3x.png"
                :visibility='isActiveSecond'
            />
        </div>
    </div>
</template>

<script>
    export default {
        props: {

            options: {
                type: Object,
                required: false
            },

            tabs: {
                type: Array,
                required: true
            },

            value: ''

        },

        data () {
            return {

            }
        },

        computed: {
            parentClass() {
                return (this.options && this.options.parentClass) ? this.options.parentClass : '';
            }
        },

        methods: {
            onClick(id) {
                this.$emit('tab-click', id);
                this.$emit('input', id);
            }
        }
    }
</script>