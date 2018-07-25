<template>
  <div :class="($device.isDesktop)?'desktop':'mobile'">
    <header class="Header is-flex-desktop-only">
      <div class="Header__Wrapper">
        <div class="w100 h100 vCenter is-hidden-touch">
          <nav class="inlineFlex w50 lf navbar h70" role="navigation" aria-label="main navigation">
            <div class="navbar-brand align-center">
              <nuxt-link class="Header__Logo Header__Link navbar-item" :to="($i18n.locale=='en')?'/':('/'+$i18n.locale+'/')">
                <div class="logo"></div>
              </nuxt-link>
            </div>
            <div class="navbar-menu">
              
              <nuxt-link class="Header__Link navbar-item" :to="($i18n.locale=='en')?'/botic':('/'+$i18n.locale+'/botic')">
                BoticAI
              </nuxt-link>
              <nuxt-link class="Header__Link navbar-item" :to="($i18n.locale=='en')?'/pricing':('/'+$i18n.locale+'/pricing')">
                Pricing
              </nuxt-link>
              <!-- <nuxt-link class="Header__Link navbar-item" :to="($i18n.locale=='en')?'/#partners':('/'+$i18n.locale+'/#partners')" >
                Partners
              </nuxt-link> -->
              <a class="Header__Link navbar-item" :href="($i18n.locale=='en')?'/#partners':('/'+$i18n.locale+'/#partners')" >
                Partners
              </a>
              <!-- <nuxt-link class="Header__Link navbar-item" :to="'/#partners'">
                Partners
              </nuxt-link> -->
              <!-- <span class="Header__Link navbar-item" v-on:click="scrollTo" >
                Partners
              </span> -->
            </div>
          </nav>
          <div class="inlineFlex w50 rf">  
            <nav class="Header__Menu">
              <!-- <div class=" is-small is-rounded mr20 blackOpaque">
                Login Now
              </div>
              <div class=" is-small is-rounded">
                Try it Free
              </div> -->
              <div class=" Header__Button">
                Login Now
              </div>
              <div class=" Header__Button Header__Button_2">
                Try it Free
              </div>
            </nav>
          </div>
          <div class="languageChangeDd rel">
            <div class="languageChangeDdWidget" v-on:click="languageOverlayVisibility=!languageOverlayVisibility">
              <div :style="{
                'background-image':'url('+selectedLanguage.flagUrl+')'
              }" class="flagImage"></div>
              <div class="flagText">{{selectedLanguage.language}}</div>
              <div class="arrow-icon"></div>
            </div>
            <div class="flagOverlay" v-if="languageOverlayVisibility">
              <nuxt-link v-for="(language,index) in languageOptions" :to="'/'+language.languageKey" exact v-on:click="selectedLanguage = language" class="languageChangeOption" :key="index">
                <div class="flagImage" :style="{
                'background-image':'url('+language.flagUrl+')'
              }"></div>
                <div class="flagText">{{language.language}}</div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="mobileHeader is-hidden-desktop">
          <nuxt-link class="Header__Logo Header__Link navbar-item" :to="($i18n.locale=='en')?'/':('/'+$i18n.locale+'/')">
            <div ></div>
          </nuxt-link>
          <div class="hamburger">
            <div v-if="!visibility" class="hamburgerMenuIcon" v-on:click="visibility=true">
            </div>
            <div v-if="visibility" class="hamburgerMenuCloseIcon" v-on:click="visibility=false">X
            </div>
          </div>
          <div class="fullscreenDropdown row" v-if="visibility">
            <nuxt-link class="item w100" v-on:click.native="visibility=false" :to="($i18n.locale=='en')?'/botic':('/'+$i18n.locale+'/botic')">
              BoticAI
            </nuxt-link>
            <nuxt-link class="item w100" v-on:click.native="visibility=false" :to="($i18n.locale=='en')?'/pricing':('/'+$i18n.locale+'/pricing')">
                  Pricing
            </nuxt-link>
            <!-- <nuxt-link class="item w100" v-on:click.native="visibility=false" :to="($i18n.locale=='en')?'/#partners':('/'+$i18n.locale+'/#partners')">
              Partners
            </nuxt-link> -->
            <a class="item w100" v-on:click.native="visibility=false" :href="($i18n.locale=='en')?'/#partner':('/'+$i18n.locale+'/#partner')" >
                Partners
              </a>
            <div class="item">
              <div class="Header__Button">Login Now</div>
            </div>
            <div class="item">
              <div class="Header__Button Header__Button_2">Try it Free</div>
            </div>
          </div>
        </div>
        <div class="languageChangeDd rel">
          <div class="languageChangeDdWidget" v-on:click="languageOverlayVisibility=!languageOverlayVisibility">
            <div :style="{
              'background-image':'url('+selectedLanguage.flagUrl+')'
            }" class="flagImage"></div>
            <div class="flagText">{{selectedLanguage.language}}</div>
            <div class="arrow-icon"></div>
          </div>
          <div class="flagOverlay" v-if="languageOverlayVisibility">
            <nuxt-link v-for="(language,index) in languageOptions" :to="'/'+language.languageKey" exact v-on:click="selectedLanguage = language" class="languageChangeOption" :key="index">
              <div class="flagImage" :style="{
              'background-image':'url('+language.flagUrl+')'
            }"></div>
              <div class="flagText">{{language.language}}</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <div class="headerPadder" v-if="$device.isMobile"></div>
    <nuxt/>
  </div>
</template>

<script>
import styles from '../static/styles/common/baseStyles.scss';
export default {
  data: () => ({
    languageOptions: [
      {
        'language':'English',
        'languageKey':'en',
        'flagUrl':'/images/english/uk@3x.png'
      },
      {
        'language':'簡體中文',
        'languageKey':'ch',
        'flagUrl':'/images/english/china@3x.png'
      },
      {
        'language':'繁體中文',
        'languageKey':'ta',
        'flagUrl':'/images/english/taiwan@3x.png'
      },
      {
        'language':'Tiếng Việt',
        'languageKey':'fl',
        'flagUrl':'/images/english/philipines2@3x.png'
      },
      {
        'language':'Filipino',
        'languageKey':'ph',
        'flagUrl':'/images/english/philipines@3x.png'
      },
      {
        'language':'Français',
        'languageKey':'fr',
        'flagUrl':'/images/english/france@3x.png'
      },
      {
        'language':'日本語',
        'languageKey':'jp',
        'flagUrl':'/images/english/japan@3x.png'
      }
    ],
    selectedLanguage: {
      'language':'English',
      'languageKey':'en',
      'flagUrl':'/images/english/uk@3x.png'
    },
    languageOverlayVisibility:false,
    visibility:false
  }),
  methods: {
    scrollTo: (event) => {
      window.scrollTo(0, 1000)
      // `this` inside methods points to the Vue instance
      // let myFirstPromise = new Promise((resolve, reject) => {
      //   window.location.href ='/'
      //   resolve()
      // })
      // myFirstPromise.then(() => {
      //   setTimeout(() => {
      //     window.scrollTo(0, 1000)
      //   }, 3000)
      // })
    }
  }
}

</script>

<style>
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  /* background-color: #f6f6f6; */
  color: #2e2f30;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-family: "Source Sans Pro", Arial, sans-serif;
  height: 100vh;
  margin: 0 auto;
  /* background-image: url('/static/grid.png');
  background-position: center;
  background-size: 1170px 9111px;
  background-repeat: no-repeat; */
}
body{
  /* overflow-x: hidden; */
  max-width: 1440px;
  margin: 0 auto;
}
.navbar-brand{
  align-items: center;
  margin-right: 6%;
}
.container {
  width: 75%;
  margin: 0 auto;
}
.container:after {
  content: "";
  display: table;
  clear: both;
}
.Header {
  color: #fff;
  height: 70px;
  box-shadow: 0 2px 58px 0 rgba(0, 0, 0, .01);
  background-color: rgba(255,255,255,0.97);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  z-index:99;
}
.Header__Wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
.Header__Logo{
  background-image:url('/static/images/english/logo@2x.png');
  width: 123px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
}
.Header__Title {
  float: left;
  font-weight: 300;
  font-size: 30px;
}
.Header__Menu {
  float: right;
  display:flex;
}
.Header__Link {
  font-size: 16px;
  color: #1e1e1e;
  text-decoration: none;
  /* padding-left: 5%; */
}
a.navbar-item:hover {
  color: #ff003c;
}
.Header__Button {
  box-sizing: border-box;
  font-size: 16px;
  color: #1e1e1e;
  margin-left: 10px;
  width: 145px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 30px;
  text-decoration: none;
  border: 1px solid #1e1e1e;
  cursor:pointer;
}
.Header__Button:hover {
  color: #ff003c;
  border: 1px solid #ff003c;
}
.Header__Button_2{
  color: #fff;
  border: none;
  background-color: #ff003c;
}
.Header__Button_2:hover{
  color: #fff;
  border: none;
  background-color: #1e1e1e;
}

.nuxt-link-active {
  color: #ff003c !important;
}
.Content {
  padding: 50px 0;
  text-align: center;
}
.Content__Title {
  font-weight: 300;
  padding-bottom: 30px;
}
.w100{
  width:100% !important;
}
.w50{
  width:50%;
}
.h70{
  height: 70px;
}
.flex{
  display:flex;
}
.inlineFlex{
  display:inline-flex;
}
.lf{
  justify-content:flex-start;
  padding-left: 9%;
  box-sizing: border-box;
}
.rf{
  padding-right: 3.5%;
  box-sizing: border-box;
  height: 70px;
  padding-left: 19%; 
  vertical-align: top;
  align-items: center;
}
.h100{
  height:100%;
}
.vCenter{
  align-items:center;
}
.languageChangeDd{
  
}
.languageChangeDdWidget{
  left: 3%;
  bottom: 4%;
  width: 160px;
  height: 40px;
  display: flex;
  cursor:pointer;
  position: fixed;
  flex-direction: row;
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.09);
}
.languageChangeOption{
  width: 160px;
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
}
.flagImage{
  background-image: url("/images/english/uk@3x.png");
  width: 50px;
  height: 40px;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  display:inline-flex;
}
.flagText{
  color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: calc(100% - 50px);
  padding-left: 2px;
  box-sizing: border-box;
  justify-content: flex-start;
}
.flagOverlay{
  left: 3%;
  bottom: 10%;
  width: 160px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 22px 22px 0 rgba(0, 0, 0, .07);
  position:fixed;
}
.arrow-icon{
  top: 16px;
  right: 17px;
  width: 10px;
  height: 6px;  
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url('/static/arrow.svg');
}
.mobileHeader{
  height:70px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  padding: 0 20px;
}
.mobileHeader .logo{
  background-image:url('/static/images/english/logo@2x.png');
  width: 123px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
}
.mobileHeader .hamburger{
  position:relative;
}
.mobileHeader .hamburger .hamburgerMenuIcon{
  background-image:url('/static/images/english/hamburgerIcon@3x.png');
  width: 25px;
  height: 25px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor:pointer;
}
.mobileHeader .hamburger .hamburgerMenuCloseIcon{
  color: black;
  font-size: 35px;
  cursor:pointer;
}
.mobileHeader .fullscreenDropdown{
  position: fixed;
  top: 70px;
  width: 100%;
  background: white;
  height: 100vh;
  min-height: 300px;
  left: 0px;
  padding-top: 20px;
}
.mobileHeader .fullscreenDropdown .item{
  align-items:center;
  padding:12px 10px;
  color:#1e1e1e;
  justify-content:center;
  text-align:center;
  display:block;
}

.mobileHeader .Header__Button{
  display:inline-flex;
  align-items: center;
  justify-content: center;
}
.headerPadder{
  height:70px;
  width:100%;
}
.align-center{
  align-items: center !important;
  justify-content: center !important;
}
</style>
