<template>
    <div class="footer-container">
        <div class="social-container inlineFlex">
            <p class="newsletter-title">Subscribe to our Newsletter</p>
            <div class="email-container">
                <input class="input" placeholder="Enter your Email Address" v-model="email" v-on:click="onSend" >
                <img src="images/english/send.png" class="send-icon" v-on:click="onSend"  />
            </div>
        </div>
        <div class="inlineFlex p20">
            <div class="menu-container">
                <p class="menu-title">Botic AI</p>
                <ul>
                    <li>
                        <a class="links" :to="'/botic'">
                            Botic
                        </a>
                    </li>
                    <li>
                        <a class="links" :to="'/pricing'">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a class="links" href='/#partners'>
                            Partners
                        </a>
                    </li>
                    <li class="opacity-3">Sectors</li>
                </ul>
            </div>
            <div class="menu-container">
                <p class="menu-title">Case Study</p>
                <ul>
                    <li>iGaming</li>
                    <li>Regtech</li>
                </ul>
            </div>
            <div class="menu-container">
                <p class="menu-title">More Stuff</p>
                <ul>
                    <li>
                        <a class="links" target="_blank" href='https://sinitic.bamboohr.com/jobs'>
                            Careers
                        </a>
                    </li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div class="inlineFlex iconWrap">
            <div class="icon-container">
                <img src="images/english/google.svg" class="social-icon"/>
                <img src="images/english/facebook.svg" class="social-icon"/>
                <img src="images/english/linkedin.svg" class="social-icon"/>
                <img src="images/english/twitter.svg" class="social-icon"/>
                <img src="images/english/insta.svg" class="social-icon"/>
                <img src="images/english/medium.svg" class="social-icon"/>
            </div>
            <p class="copyright-text">© 2018 Sinitic Limited. All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data: () => ({
            email: ''
        }),
        method: {
            onSend: function (){
                const instance = axios.create({ baseURL: 'https://api.prosperworks.com/developer_api/v1/leads' })
                instance.defaults.headers.common['Content-Type'] = 'application/json'
                instance.defaults.headers.common['X-PW-AccessToken'] = '5e952377dd5291aa014db0158a3fa0c1'
                instance.defaults.headers.common['X-PW-Application'] = 'developer_api'
                instance.defaults.headers.common['X-PW-UserEmail'] = 'curtis@sinitic.ai'
                instance.defaults.headers.common['crossDomain'] = 'true' 
                instance.post('/leads', JSON.stringify({
                    "email": {
                        "email": this.email,
                        "category": this.sendText
                    },
                })).then(function (response) {
                    this.sendText = submitted
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }

</script>


<style scoped>
    .footer-container{
        padding-bottom: 100px;
        display: flex;
        width: 100%;
        border-top: 1px solid #f5f5f5;
        /* margin-top: 30px; */
        padding-top: 63px;
        flex-direction: column;
    }
    .social-container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        width:100%;
    }
    .newsletter-title{
        font-size: 18px;
        font-weight: bold;
    }
    .menu-container{
        width: 33%;
        display:inline-flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    ul{
        list-style: none;
    }
    .menu-title{
        font-weight: bold;
        color: #1e1e1e;
        margin-bottom: 21px;
        font-size: 18px;
    }
    .links{
        color: #1e1e1e;
    }
    li{
        color: #1e1e1e;
        margin-bottom: 17px;
        font-size: 18px;
        cursor: pointer;
    }
    .input{
        width: 300px;
        height: 50px;
        box-shadow: none;
        line-height: 50px;
        border: solid 1.3px #dee0e6;
        background-color: rgba(255, 255, 255, 0.9);
    }
    .icon-container{
        display: flex;
        margin-top: 75px;
    }
    .social-icon{
        width: 37px;
        height: 37px;
        margin-right: 19px;
    }
    .copyright-text{
       color: #7a7e8a;
        font-size: 14px;
        margin-top: 23px;
    }
    .soon{
        background-color: #ff003c;
        color: white;
        font-size: 10px;
        padding: 3px;
        width: 75px;
    }
    .opacity-3{
        opacity: 0.3;
    }
    .send-icon{
        cursor: pointer;
        width: 50px;
        height: 50px;
        padding: 17px;
        background-color: #ff003c;
    }
    .email-container{
        margin-top: 15px;
        display: flex;
    }
    .p20{
        padding:20px;
    }
    .iconWrap{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
    }
</style>