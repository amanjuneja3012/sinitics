<template>
    <div class="pricing-container">
        <p class="page-title">Pay as you grow</p>
        <div class="toggle">
            <p class="monthly">Bill Monthly</p>
            <label class="switch">
                <input type="checkbox" checked>
                <span class="slider round"></span>
            </label>
            <p class="yearly">Bill Yearly</p>
            <p class="tag">Save 20%</p>
        </div>
        <div class="pricing-table">
            <div class="packages">
                <div class="package">
                    <p class="name">Basic</p>
                    <p class="price">$356</p>
                    <p class="period">per month</p>
                    <Button
                            text="Try it Free"
                            backgroundColor="#ff003c"
                            color="white">
                    </Button>
                </div>
                <div class="package">
                    <p class="name">Enterprise</p>
                    <p class="price">$546</p>
                    <p class="period">per month</p>
                    <Button
                            text="Book a Demo"
                            backgroundColor="white"
                            color="#ff003c"
                    >
                    </Button>
                </div>
            </div>
            <table>
                <thead>
                    <th>Features</th>
                    <th>Basic Package</th>
                    <th>Enterprise Package</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Users</td>
                        <td>Upto 500</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr v-for="item in items">
                        <td>{{ item.name }}</td>
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
        <div class="price-actions">
            <p class="price-action">Action</p>
            <div class="price-action">
                <Button
                        text="Try it Free"
                        backgroundColor="#ff003c"
                        color="white">
                </Button>
            </div>
            <div class="price-action">
                <Button
                        text="Book a Demo"
                        backgroundColor="white"
                        color="#ff003c">
                </Button>
            </div>
        </div>
        <div class="sectors">
            <p class="page-title sector-title">Sectors We Cover</p>
            <div class="tabs">
                <div class="tab">Basic</div>
                <div class="tab">Enterprise</div>
            </div>
            <div class="sector-cards">
                <CardWithIcon
                        title="Travel Agency"
                        subtitle="OrangeCat"
                        detail="This online travel agency automates 50 trip recommendation each day"
                        iconUrl="calc.png"
                        width="270px"
                />
                <CardWithIcon
                        title="Salon"
                        subtitle="WuJia Salon"
                        detail="This salon chain automates 100 reservation & FAQ requests each day."
                        iconUrl="bitmap-copy-2@3x.png"
                        width="270px"
                />
                <CardWithIcon
                        title="Classroom"
                        subtitle="Chinese Teaching"
                        detail="This teacher delivers 5 minute quizzes to 30 students each day."
                        iconUrl="bitmap@3x.png"
                        width="270px"
                />
            </div>
        </div>
        <div class="questions">
            <p class="page-title question-title">Have Questions in Mind?</p>
            <Button
                    text="Start a Conversation"
                    backgroundColor="#ff003c"
                    color="white"
                    width="256px"
                    iconUrl="group-22.png"
                    align="space-between"
            >
            </Button>
        </div>

        <Footer>

        </Footer>
    </div>


</template>
<script>
    import Index from '~/pages/_lang/index'
    import ContentCard from '~/components/ContentCard'
    import ContentCardCarousel from '~/components/ContentCardCarousel'
    import Button from '~/components/Button'
    import CardWithIcon from '~/components/CardWithIcon'
    import Footer from '~/components/Footer'

    export default {
        components: {
            Button,
            Footer,
            CardWithIcon
        },
        data: () => ({
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
                {name: 'Scheduling', basic: 'confirm', enterprise: 'confirm'},
                {name: 'Bot Training', basic: 'confirm', enterprise: 'confirm'},
                {name: 'Unlimited Bots', basic: 'confirm', enterprise: 'confirm'},
                {name: 'Translation Management', basic: 'confirm', enterprise: 'confirm'},
                {name: 'Population', basic: 'confirm', enterprise: 'confirm'},
                {name: 'Scheduling', basic: 'confirm', enterprise: 'confirm'},
                {name: 'Chat Structuring', basic: 'no', enterprise: 'confirm'},
                {name: 'Integrations', basic: 'no', enterprise: 'confirm'},
                {name: 'Teams', basic: 'no', enterprise: 'confirm'},
                {name: 'Onsite Hosting', basic: 'no', enterprise: 'confirm'},
                {name: 'Human Takeover', basic: 'no', enterprise: 'confirm'}

            ]
        }),
    }
</script>
<style>
    .page-title{
        font-size: 48px;
        color: #1e1e1e;
        text-align: center;
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
    }
    .package{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 310px;
        width: 50%;
    }
    .package:first-child{
        border-right: 1px solid #dee0e6;
    }
    .name{
        margin-top: 40px;
        font-size: 24px;
        color: #1e1e1e;
    }
    .price{
        margin-top: 31px;
        font-size: 56px;
        color: #1e1e1e;
    }
    .period{
        margin-top: 10px;
        margin-bottom: 28px;
        font-size: 20px;
        color: #1e1e1e40;
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
        padding: 0 40px 0 40px;
        border: 1px solid #dee0e6;
        text-align: center;
        width: 33.33%;
    }
    th:first-child, td:first-child{
        text-align: left;
    }
    td img{
        width: 19px;
        height: 12px;
    }
    .no-feature{
        border-bottom: 2px solid #1e1e1e;
        width: 10px;
        height: 2px;
        margin-left: auto;
        margin-right: auto;
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
        margin-top: 100px;
    }
    .sector-title{
        margin-top: 190px;
    }
    .question-title{
        margin-bottom: 40px;
        margin-top: 171px;
    }
    .questions{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tab:first-child{
        background-color: #1e1e1e;
        color: white;
        border-bottom-left-radius: 50px;
        border-top-left-radius: 50px;
    }
    .tab:last-child{
        color: #1e1e1e;
        background-color: white;
        border-bottom-right-radius: 50px;
        border-top-right-radius: 50px;
        border: 1px solid #1e1e1e;
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
        background-color: #ccc;
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
    .toggle{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 120px;
    }
    .monthly{
        margin-right: 10px;
        font-size: 20px;
    }
    .yearly{
        margin-left: 10px;
        font-size: 20px;
    }
    .tag{
        color: #151e37;
        border: 1px solid #151e37;
        padding: 3px;
        font-size: 12px;
        margin-left: 20px;
    }


</style>
