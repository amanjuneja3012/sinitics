<template>
  <div class="footer-container">
    <div class="social-container inlineFlex">
      <p class="newsletter-title">{{ $t('footer.title') }}</p>
      <div class="email-container">
        <input 
          v-model="email" 
          class="input" 
          :placeholder="$t('footer.placeholder')" >
        <img 
          src="images/english/send.png" 
          class="send-icon" 
          @click="onSend()" >
      </div>
    </div>
    <div class="inlineFlex p20">
      <div class="menu-container">
        <p class="menu-title">{{ $t('footer.menuTitle') }}</p>
        <ul>
          <li>
            <a 
              class="links" 
              href="/botic">
              {{ $t('footer.boticLinkText') }}
            </a>
          </li>
          <li>
            <a 
              class="links" 
              href="/pricing">
              {{ $t('footer.pricingLinkText') }}
            </a>
          </li>
          <li>
            <a 
              class="links" 
              href="/#partner">
              {{ $t('footer.partnerLinkText') }}
            </a>
          </li>
        </ul>
      </div>
      <div class="menu-container">
        <p class="menu-title">{{ $t('footer.menuTitleRow2') }}</p>
        <ul>
          <li>{{ $t('footer.menuRow2Item1') }}</li>
          <li>{{ $t('footer.menuRow2Item2') }}</li>
        </ul>
      </div>
      <div class="menu-container">
        <p class="menu-title">{{ $t('footer.menuTitleRow3') }}</p>
        <ul>
          <li>
            <a 
              class="links" 
              target="_blank" 
              href="https://sinitic.bamboohr.com/jobs">
              {{ $t('footer.menuRow3Item1') }}
            </a>
          </li>
          <li>{{ $t('footer.menuRow3Item2') }}</li>
          <li>{{ $t('footer.menuRow3Item3') }}</li>
        </ul>
      </div>
    </div>
    <div class="inlineFlex iconWrap">
      <div class="icon-container">
        <img 
          src="images/english/google.svg" 
          class="social-icon">
        <img 
          src="images/english/facebook.svg" 
          class="social-icon">
        <img 
          src="images/english/linkedin.svg" 
          class="social-icon">
        <img 
          src="images/english/twitter.svg" 
          class="social-icon">
        <img 
          src="images/english/insta.svg" 
          class="social-icon">
        <img 
          src="images/english/medium.svg" 
          class="social-icon">
      </div>
      <p class="copyright-text">{{ $t('footer.copyrightText') }}</p>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        components: {
        },
        data: function () {
            return {
                email: ''
            };
        },
        methods: {
            onSend: function (){
                const instance = axios.create({ baseURL: 'https://api.prosperworks.com/developer_api/v1/leads' });
                instance.defaults.headers.common['Content-Type'] = 'application/json';
                instance.defaults.headers.common['X-PW-AccessToken'] = '5e952377dd5291aa014db0158a3fa0c1';
                instance.defaults.headers.common['X-PW-Application'] = 'developer_api';
                instance.defaults.headers.common['X-PW-UserEmail'] = 'curtis@sinitic.ai';
                instance.defaults.headers.common['crossDomain'] = 'true'; 
                instance.post('/leads', JSON.stringify({
                    "email": {
                        "email": this.email,
                        "category": this.sendText
                    },
                })).then(function (response) {
                    this.sendText = submitted;
                }).catch((err) => {
                    console.log(err);
                });
            }
        }
    };

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