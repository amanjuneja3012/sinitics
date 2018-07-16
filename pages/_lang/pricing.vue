<template>
    <div id='pricing' :class="($device.isDesktop)?'pricing-desktop':'pricing-mobile'">
        <div class="pricing-container">
            <p class="page-title top-title">{{$t('pricing.title')}}</p>
            <div class="toggle">
                <p class="monthly">{{$t('pricing.checkBoxDetails.leftStr')}}</p>
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
                <p class="yearly">{{$t('pricing.checkBoxDetails.rightStr')}}</p>
                <p class="tagss" v-if=$device.isDesktop >{{$t('pricing.checkBoxDetails.tag')}}</p>
            </div>
            <div class="currencyChange">
                <div class="icon" v-for="currency in currenciesArr" v-on:click="selectedCurrency=currency" :class="(selectedCurrency['key']==currency['key'])?'selected':''">
                    <div>{{currency.symbol}}</div>
                </div>
            </div>
            <no-ssr>
                <div class="userSlider">
                    <vue-slider 
                        v-model = "usersCount"
                        :height = "8"
                        :dotSize = "20"
                        :min = "0"
                        :max = "50000"
                        :value= "100"
                        :data= "[100, 500, 1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000]"
                        :interval = "500"
                        :disabled = "false"
                        :show = "true"
                        :speed = "0.3"
                        :reverse = "false"
                        tooltip = "always"
                        :piecewise = "true"
                        formatter = "{value} Users"
                        :tooltipStyle = "{
                            'backgroundColor': '#1e1e1e',
                            'borderColor': '#1e1e1e'
                        }"
                    >
                    </vue-slider>
                </div>
            </no-ssr>
            <div class="pricing-table" >
                <div class="packages">
                    <div class="package">
                        <p class="name">{{$t('pricing.tableData.tableHeader.leftColumn.name')}}</p>
                        <p class="price">{{selectedCurrency['symbol']+usersCount*15*selectedCurrency['conversionRatio']}}</p>
                        <p class="period">{{$t('pricing.tableData.tableHeader.leftColumn.period')}}</p>
                        <Button
                            :text="$t('pricing.tableData.tableHeader.leftColumn.buttonText')"
                            backgroundColor="#ff003c"
                            color="white"
                            :onClick='toggleModal'
                        >
                        </Button>
                    </div>
                    <div class="package">
                        <p class="name">{{$t('pricing.tableData.tableHeader.rightColumn.name')}}</p>
                        <p class="price">{{selectedCurrency['symbol']+usersCount*30*selectedCurrency['conversionRatio']}}</p>
                        <p class="period">{{$t('pricing.tableData.tableHeader.rightColumn.period')}}</p>
                    <Button
                            :text="$t('pricing.tableData.tableHeader.rightColumn.buttonText')"
                            backgroundColor="white"
                            color="#ff003c"
                            :onClick='toggleModal'
                        >
                        </Button>
                    </div>
                </div>
                <table id='pricing-feature'>
                    <thead>
                        <th>{{$t('pricing.tableData.tableMetadata.headingRow[0]')}}</th>
                        <th>{{$t('pricing.tableData.tableMetadata.headingRow[1]')}}</th>
                        <th>{{$t('pricing.tableData.tableMetadata.headingRow[2]')}}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{$t('pricing.tableData.tableMetadata.subHeading[0]')}}</td>
                            <td>{{$t('pricing.tableData.tableMetadata.subHeading[1]')}}</td>
                            <td>{{$t('pricing.tableData.tableMetadata.subHeading[2]')}}</td>
                        </tr>
                        <tr v-for="item in $t('pricing.tableData.tableMetadata.items')">
                            <td class='item-name'>
                                {{ item.name }}
                                <div class='tooltip'>
                                    <div class='tooltip-header'>{{ item.name }}</div>
                                    <div class='tooltip-text'>{{ item.tooltip }}</div>
                                </div>
                            </td>
                            <td>
                                <img src="confirm.png" v-if="item.basic == 'confirm'"/>
                                <p class="no-feature" v-if="item.basic == 'no'"></p>
                            </td>
                            <td>
                                <img src="confirm.png" v-if="item.enterprise == 'confirm'"/>
                                <p class="no-feature" v-if="item.enterprise == 'no'"></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
              <Modal :showModal='showModal' :onSend= 'onSend' :close='toggleModal' />
            </div>
            <div class="price-actions">
                <p class="price-action">Action</p>
                <div class="price-action">
                    <Button
                        :text="$t('pricing.tableData.buttons.primary')"
                        backgroundColor="#ff003c"
                        color="white"
                        :onClick='toggleModal'
                    >
                    </Button>
                </div>
                <div class="price-action">
                    <Button
                        :text="$t('pricing.tableData.buttons.secondary')"
                        backgroundColor="white"
                        color="1e1e1e" 
                        :onClick='toggleModal' 
                    >
                    </Button>
                </div>
            </div>
            <div class="sectors" id='sectors'>
                <p class="page-title sector-title">{{$t('pricing.tableData.sectorsWidget.title')}}</p>
                <div class="tabs">
                    <div class="tab" v-bind:class="{ active: isActiveFirst }" v-on:click="ActivateFirst">{{$t('pricing.tableData.sectorsWidget.tabs[0]')}}</div>
                    <div class="tab" v-bind:class="{ active: isActiveSecond }" v-on:click="ActivateSecond">{{$t('pricing.tableData.sectorsWidget.tabs[1]')}}</div>
                </div>
                <div class="sector-cards" v-bind:class="{ active: isActiveFirst }">
                    <div class="inline inlineFlex inline-flex" v-for="(obj,index) in $t('pricing.tableData.sectorsWidget.Basic')">
                        <CardWithIcon
                            :title="obj.title"
                            :subtitle="obj.subtitle"
                            :detail="obj.detail"
                            :iconUrl="obj.iconUrl"
                            width="270px"
                        />
                    </div>
                </div>
                <div class="sector-cards" v-bind:class="{ active: isActiveSecond }">
                    <div class="inline inlineFlex inline-flex" v-for="(obj,index) in $t('pricing.tableData.sectorsWidget.Basic')">
                        <CardWithIcon
                            :title="obj.title"
                            :subtitle="obj.subtitle"
                            :detail="obj.detail"
                            :iconUrl="obj.iconUrl"
                            width="270px"
                        />
                    </div>
                </div>
            </div>
            <div class="questions">
                <p class="page-title question-title">{{$t('pricing.tableData.questionsWidget.title')}}</p>
                <Button
                    color="white"
                    width="230px"
                    backgroundColor="#ff003c"
                    :text="$t('pricing.tableData.questionsWidget.buttonText')"
                    :iconUrl="$t('pricing.tableData.questionsWidget.buttonIcon')"
                    align="space-between"
                    :onClick="function(){}"
                >
                </Button>
                <div class="side-image" v-if="$device.isDesktop" ></div>
            </div>
        </div>
        <Footer v-if="$device.isDesktop"> </Footer>
        <FooterMobile v-if="$device.isMobile"> </FooterMobile>
    </div>

</template>
<script>
    import Index from '~/pages/_lang/index';
    import ContentCard from '~/components/ContentCard';
    import Button from '~/components/Button';
    import CardWithIcon from '~/components/CardWithIcon';
    import Footer from '~/components/Footer';
    import FooterMobile from '~/components/FooterMobile';
    import Modal from '~/components/Modal';
    import NoSSR from 'vue-no-ssr';
    import axios from 'axios';
    import currencies from '~/components/currency/data.js';
    var components = {};
    components['no-ssr'] = NoSSR;
    if (process.browser) {
        // in older versions of nuxt, it's process.BROWSER_BUILD
        let VueSlider = require('vue-slider-component')
        components['vue-slider'] = VueSlider
    }
    export default  {
        components: Object.assign(components,{
            Button,
            Footer,
            Modal,
            CardWithIcon,
            FooterMobile
        }),
        data: () => ({
            showModal: false,
            buttons: {
                block1: [
                    {text: 'Enterprise', backgroundColor: '#ff003c', color: '#ffffff'},
                    {text: 'Small Business', backgroundColor: '#ffffff', color: '#000000'}
                ],
                block2: [
                    {text: 'Try it now', backgroundColor: '#ff003c', color: '#ffffff'},
                    {text: 'Check out the bots', backgroundColor: '#ffffff', color: '#000000'}
                ],
                block3: [
                    {text: 'Enterprise', backgroundColor: '#ff003c', color: '#ffffff'},
                    {text: 'Small Business', backgroundColor: '#ffffff', color: '#000000'}
                ]
            },
            items:[
                {name: 'Scheduling', basic: 'confirm', enterprise: 'confirm', tooltip: 'Use schedules to push messages & save reservations.'},
                {name: 'Bot Training', basic: 'confirm', enterprise: 'confirm', tooltip: 'Teach your bot to improve its dialogue.'},
                {name: 'Unlimited Bots', basic: 'confirm', enterprise: 'confirm', tooltip: 'Build bots according to need vs. price.'},
                {name: 'Translation Management', basic: 'confirm', enterprise: 'confirm', tooltip: 'Control multiple languages seamlessly.'},
                {name: 'Population', basic: 'confirm', enterprise: 'confirm', tooltip: 'Save end users into standard & custom segments.'},
                {name: 'Scheduling', basic: 'confirm', enterprise: 'confirm', tooltip: 'Add languages beyond Chinese & English.'},
                {name: 'Chat Structuring', basic: 'no', enterprise: 'confirm', tooltip: 'SiniticAI™ rapidly structures raw chat history to build bots.'},
                {name: 'Integrations', basic: 'no', enterprise: 'confirm', tooltip: 'Connect your bot to CRMs, databases & more.'},
                {name: 'Teams', basic: 'no', enterprise: 'confirm', tooltip: 'Control multi-level user permissions.'},
                {name: 'Onsite Hosting', basic: 'no', enterprise: 'confirm', tooltip: 'Satisfy corporate requirements to host locally.'},
                {name: 'Human Takeover', basic: 'no', enterprise: 'confirm', tooltip: 'Takeover complex conversations to achieve customer satisfaction.'}

            ],
            usersCount: 0,
            currenciesArr: currencies,
            selectedCurrency: currencies[0],
            isActiveFirst: true,
            isActiveSecond: false
        }),
        methods: {
            toggleModal:function(){
                this.showModal = !this.showModal
            },
            ActivateFirst: function (event){
                this.isActiveSecond = false
                this.isActiveFirst= true
            },
            ActivateSecond: function (event){
                this.isActiveFirst= false
                this.isActiveSecond = true
            },
            onSend: function (name, company, email){
                const instance = axios.create({ baseURL: 'https://api.prosperworks.com/developer_api/v1/leads' })
                instance.defaults.headers.common['Content-Type'] = 'application/json'
                instance.defaults.headers.common['X-PW-AccessToken'] = '5e952377dd5291aa014db0158a3fa0c1'
                instance.defaults.headers.common['X-PW-Application'] = 'developer_api'
                instance.defaults.headers.common['X-PW-UserEmail'] = 'curtis@sinitic.ai'
                instance.defaults.headers.common['crossDomain'] = 'true' 
                instance.post('/leads', JSON.stringify({
                    "name": name,
                    "email": {
                        "email": email,
                        "category":"work"
                    },
                    "company_name": company
                })).then(function (response) {
                    this.toggleModal()
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
}

</script>
<style>
    #pricing{
        position: relative;
    }
    .page-title{
        font-size: 48px;
        color: #1e1e1e;
        text-align: center;
    }
    .top-title{
        font-size: 2.7em;
        color: #1e1e1e;
        font-weight: bold;
        line-height: 1.05em;
        margin-bottom: 5%;
    }
    .pricing-table{
        border: 1px solid #dee0e6;
    }
    .pricing-container{
        margin-top: 70px;
        padding-top: 70px;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
    }
    .packages{
        display: flex;
        margin-bottom: 4px;
    }
    .package{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 350px;
        width: 50%;
    }
    .package:first-child{
        border-right: 1px solid #dee0e6;
    }
    .name{
        font-weight: 600;
        margin-top: 40px;
        font-size: 24px;
        color: #1e1e1e;
    }
    .price{
        font-weight: 600;
        margin-top: 31px;
        font-size: 56px;
        color: #1e1e1e;
    }
    .period{
        font-size: 20px;
        color: #1e1e1e40;
        margin-bottom: 18px;
    }
    table{
        width: 100%;
        border-collapse: collapse;
    }
    tr{
        width: 33.33%;
    }
    th, td {
        height: 60px;
        line-height: 60px;
        padding: 0 40px 0 40px;
        border: 1px solid #dee0e6;
        width: 33.33%;
    }
    tr:first-child{
        text-align: left;
    }
    td img{
        width: 19px;
        height: 12px;
    }
    tr{
        line-height: 60px;
    }
    table td, table th{
        vertical-align: middle;
    }
    .no-feature{
        border-bottom: 2px solid #1e1e1e;
        width: 10px;
        height: 2px;
    }
    .price-actions{
        display: flex;
    }
    .price-action{
        width: 33.33%;
        height: 60px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .price-action:first-child{
        text-align: left;
        justify-content: flex-start;
        margin-left: 40px;
    }
    .sector-cards{
        display: flex;
        display: none;
        margin-top: 100px;
    }
    .sector-cards.active{
        display: block;
    }
    .feature-container .detail{
        min-height: 170px;
    }
    .sector-title{
        font-size: 2em;
        color: #1e1e1e;
        font-weight: bold;
        margin-top: 150px;
        margin-top: 190px;
        line-height: 1.1em;
    }
    .question-title{
        font-size: 2em;
        color: #1e1e1e;
        font-weight: bold;
        margin-top: 150px;
        line-height: 1.1em;
        margin-bottom: 40px;
    }
    .questions{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 12%;
    }
    .tabs{
        width: 320px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
    .tab{
        width: 50%;
        height: 50px;
        display: flex;
        cursor: pointer;
        font-size: 16px;
        color: #1e1e1e;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 1px solid #1e1e1e;
    }
    .tab:first-child{
        border-bottom-left-radius: 50px;
        border-top-left-radius: 50px;
    }
    .tab:last-child{
        border-bottom-right-radius: 50px;
        border-top-right-radius: 50px;
    }
    .tab.active{
        color: white;
        background-color: #1e1e1e;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {display:none;}

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ff003c;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
    input:checked{
        color: #ff003c;
    }

    input:checked + .slider {
        background-color: #ff003c;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #ff003c;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
    .side-image{
        left: 0;
        z-index: 0;
        width: 330px;
        height: 272px;
        bottom: 432px;
        position: absolute;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('/static/left_curve@2x.png');
    }
    .toggle{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 4%;
    }
    .currencyChange{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4%;
    }
    .currencyChange .icon{
        border: 1px solid black;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 0 10px;
        cursor: pointer;
    }
    .currencyChange .icon:hover,.currencyChange .icon.selected{
        border: 1px solid black;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 0 10px;
        background:black;
        color:white;
    }
    .monthly{
        margin-right: 10px;
        font-size: 20px;
    }
    .yearly{
        margin-left: 10px;
        margin-right: 10px;
        font-size: 20px;
    }
    .tagss{
        margin: 0;
        height: 2em;
        padding: 3px;
        font-size: 14px;
        color: #151e37;
        line-height: 1.5;
        border-radius: 4px;
        font-weight: 600px;
        align-items: center;
        justify-content: center;
        background-color: white;
        -webkit-box-align: center;
        border: 1.2px solid #151e37;
    }
    /* .quest_button:before{
        content: '';
        width: 50px;
        height: 48px;
        background-color: #f52842;
        margin-left: -18px;
        border-radius: 2px;
    } */
    .item-name{
        position: relative;
    }
    .item-name:hover{
        color: #ff003c;
    }
    .item-name:hover .tooltip{
        visibility: visible;
    }
    .tooltip{
        top: -84px;
        right: 68px;
        left: -20px;
        z-index: 1;
        color: #fff;
        padding: 15px;
        line-height: 22px;
        border-radius: 6px;
        position: absolute;
        visibility: hidden;
        background-color: black;
    }
    .tooltip-header{
        font-size: 14px;
        font-weight: 600;
    }
    .tooltip-text{
        font-size: 14px;
    }
    .userSlider .vue-slider-component{
        width: auto  !important;
        padding: 0px  !important;
        margin-bottom: 80px !important;
    }
    .userSlider .vue-slider-piecewise-item{
        width: 1px !important;
        height: 8px !important;
        top: -0px !important;
    }
    .userSlider .vue-slider-piecewise-item .vue-slider-piecewise-dot{
        border-radius:0 !important;
    }
    .userSlider .vue-slider-dot{
        top:-9px !important;
    }
    .userSlider .vue-slider-process{
        background-color: #ff003c;
    }
    .userSlider .vue-slider{
        background-color: #dee0e6;
        height:8px !important;
    }
    .userSlider .vue-slider-tooltip-wrap{
        display:block !important;
        opacity:1 !important;
    }
    .pricing-mobile .pricing-container{
        width: 84%;
    }
    .pricing-mobile .top-title{
        font-size: 1.8em;
    }
    .pricing-mobile .monthly, .pricing-mobile .yearly {
        font-size: 18px;
    }
    .pricing-mobile .vue-slider-tooltip{
        font-size: 8px;
    }
    .pricing-mobile .price{
        font-size: 24px;
    }
    .pricing-mobile thead, .pricing-mobile tr{
        display: inline-block;
        padding: 0;
        text-align: center;
    }
    .pricing-mobile th{
        padding: 0;
        height: 60px;
        font-size: 16px;
        display: inline-flex;
        line-height: 15px;;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .pricing-mobile td{
        display: inline-block;
        line-height: inherit;
        font-size: 14px;
        padding: 0;
        line-height: 36px;
        height: 64px;
        text-align: center;
    }
    .pricing-mobile tr {
        width: 100%;
    }
    .pricing-mobile thead{
        width: 100%;
    }
    .pricing-mobile .no-feature{
        text-align: center;
        margin: 0 auto;
        line-height: 60px;
        margin-top: 30px;
    }
    .pricing-mobile .price-action{
        margin-left: 0px;
    }
    .pricing-mobile .feature-container{
        margin: 0 auto;
    }
    .pricing-mobile .sector-cards {
        text-align: center;
    }
    .pricing-mobile .package{
        height: 220px;
    }
    .pricing-mobile .package .name{
        margin-top: 20px;
    }
    .pricing-mobile .package .price{
        margin-top: 10px;
    }
    .pricing-mobile .package .period{
        margin-bottom: 10px;
    }
    .pricing-mobile .item-name{
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 15px;
    }
    .pricing-mobile .price-action{
        width: 27%;
        margin: 5%;
    }
    .pricing-mobile .feature-container{
        margin-left: 0px !important;
    }
</style>
