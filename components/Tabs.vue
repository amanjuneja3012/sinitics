<template>
    <div>
        <div class="tabs is-centered is-toggle">
            <ul>
                <li class='tab-head has-border' v-bind:class="{ 'is-active': isActiveFirst }" v-on:click="ActivateFirst" >
                    <span class="icon icon-1 is-small"></span>
                    <span>Multilingual</span>
                </li>
                <li class='tab-head has-border' v-bind:class="{ 'is-active': isActiveSecond }" v-on:click="ActivateSecond" >
                    <span class="icon icon-2 is-small"></span>
                    <span>Multitask</span>
                </li>
                <li class='tab-head' v-bind:class="{ 'is-active': isActiveThird }" v-on:click="ActivateThird" >
                    <span class="icon icon-3 is-small"></span>
                    <span>Multiturn</span>
                </li>
            </ul>
        </div>
        <div class='content' v-bind:class="{ 'active-content': isActiveFirst }">
            <div class='tab-content-container tab-contents'>
                <div class='tab-image tab-image-1'>
                    <div class='prob-sol problem-image-1'></div>
                </div>
                <div class='tab-image tab-image-2'>
                    <div class='prob-sol solution-image-1'></div>
                </div>
            </div>
            <div class='tab-content-container tab-content-container-2'>
                <div class='tab-content-text tab-content-text-left'>
                    <div class='tab-content-text-head'>Problem</div>
                    <div class='tab-content-text-content'>Natural language processing engines excel at English, but they fail to deliver high accuracy for other major languages.</div>
                </div>
                <div class='tab-content-text'>
                    <div class='tab-content-text-head'>Solution</div>
                    <div class='tab-content-text-content'>SiniticAI™ natively supports multiple languages, and understands mixed language text using deep learning techniques adapted from image-matching technology.</div>
                </div>
            </div>
        </div>
        <div class='content' v-bind:class="{ 'active-content': isActiveSecond }" >
            <div class='tab-content-container tab-contents'>
                <div class='tab-image tab-image-1'>
                    <div class='prob-sol problem-image-2'></div>
                </div>
                <div class='tab-image tab-image-2'>
                    <div class='prob-sol solution-image-2'></div>
                </div>
            </div>
            <div class='tab-content-container tab-content-container-2'>
                <div class='tab-content-text tab-content-text-left'>
                    <div class='tab-content-text-head'>Problem</div>
                    <div class='tab-content-text-content'>Natural language processing engines excel at English, but they fail to deliver high accuracy for other major languages.</div>
                </div>
                <div class='tab-content-text'>
                    <div class='tab-content-text-head'>Solution</div>
                    <div class='tab-content-text-content'>SiniticAI™ natively supports multiple languages, and understands mixed language text using deep learning techniques adapted from image-matching technology.</div>
                </div>
            </div>
        </div>
        <div class='content' v-bind:class="{ 'active-content': isActiveThird }">
            <div class='tab-content-container tab-contents'>
                <div class='tab-image tab-image-1'>
                    <div class='prob-sol problem-image-3'></div>
                </div>
                <div class='tab-image tab-image-2'>
                    <div class='prob-sol solution-image-3'></div>
                </div>
            </div>
            <div class='tab-content-container tab-content-container-2'>
                <div class='tab-content-text tab-content-text-left'>
                    <div class='tab-content-text-head'>Problem</div>
                    <div class='tab-content-text-content'>Natural language processing engines excel at English, but they fail to deliver high accuracy for other major languages.</div>
                </div>
                <div class='tab-content-text'>
                    <div class='tab-content-text-head'>Solution</div>
                    <div class='tab-content-text-content'>SiniticAI™ natively supports multiple languages, and understands mixed language text using deep learning techniques adapted from image-matching technology.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
                    {text: 'Sintic AI', backgroundColor: '#ff003c', color: '#ffffff'},
                    {text: 'Outsourcing eBook', backgroundColor: '#ffffff', color: '#000000'}
                ],
                block4: [
                    {text: 'Enterprise', backgroundColor: '#ff003c', color: '#ffffff'},
                    {text: 'Small Business', backgroundColor: '#ffffff', color: '#000000'}
                ]
            },
            isActiveFirst: true,
            isActiveSecond: false,
            isActiveThird: false
        }),
        methods: {
            ActivateFirst: function (event){
                this.isActiveSecond = false
                this.isActiveThird= false
                this.isActiveFirst= true
            },
            ActivateSecond: function (event){
                this.isActiveFirst= false
                this.isActiveThird= false
                this.isActiveSecond = true
            },
            ActivateThird: function (event){
                this.isActiveSecond = false
                this.isActiveFirst= false
                this.isActiveThird=true
            },
        },
    }
</script>


<style scoped>
    .tabs{
      width: 100%;
      margin-bottom: -35px;
    }
    .tab-head{
      z-index: 1;
      width: 323px;
      height: 70px;
      display: flex;
      color: white;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      background-color: #1e1e1e; 
    }
    .tab-content-container{
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .tab-contents{
      height: 533px;
      background-color: #f6f6f6;
    }
    .icon{
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .icon-1{
        background-image: url('/static/multilingual.svg');
    }
    .icon-2{
        background-image: url('/static/multitask.svg');
    }
    .icon-3{
        background-image: url('/static/multiturn.svg');
    }
    .is-active{
      background-color: #ff003c;
    }
    .has-border{
        border-right: 1.5px solid rgba(255, 255, 255, 0.2);
    }
    .tab-image{
      width: 358px;
      height: 350px;
      position: relative;
      display: inline-block;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .tab-image-1{
      margin-right: 10%;
      background-image: url('/static/phone@2x.png');
    }
    .tab-image-2{
      background-image: url('/static/phone_white@2x.png');
    }
    .tab-content-text{
        max-width: 386px;
        text-align: center;
    }
    .tab-content-text-left{
        margin-right: 10%;
    }
    .tab-content-container-2{
        margin-top: 1%;
        align-items: flex-start;
    }
    .content{
        display: none;
    }
    .active-content{
        display: block;
    }
    .tab-content-text-head{
        font-size: 20px;
        font-weight: 600;
    }
    .tab-content-text-content{
        font-size: 18px;
    }
    .prob-sol{
      bottom: 0;
      left: 44px;
      width: 270px;
      height: 270px;
      position: absolute;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .problem-image-1{
        background-image: url('/static/p-1@2x.png');
    }
    .solution-image-1{
        background-image: url('/static/s-1@2x.png');
    }
    .problem-image-2{
        background-image: url('/static/p-2@2x.png');
    }
    .solution-image-2{
        background-image: url('/static/s-2@2x.png');
    }.problem-image-3{
        background-image: url('/static/p-3@2x.png');
    }
    .solution-image-3{
        background-image: url('/static/s-3@2x.png');
    }
</style>
