<template>
  <div>
    <header class="Header">
      <div class="is-flex-desktop-only w100 h100 vCenter">
        <nav class="inlineFlex w50 lf navbar h70" role="navigation" aria-label="main navigation">
          <div class="navbar-brand align-center">
            <nuxt-link class="Header__Logo Header__Link navbar-item" :to="$i18n.path('')">
              <div class="logo"></div>
            </nuxt-link>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <!-- <nuxt-link class="Header__Link navbar-item navbar-link" :to="'/'+$i18n.locale+'/sectors'">
                Sectors
              </nuxt-link> -->
              <nuxt-link class="Header__Link navbar-item navbar-link" :to="'/'+$i18n.locale+'/botic-ai'">
                BoticAI
              </nuxt-link>
              <nuxt-link class="Header__Link navbar-item navbar-link" :to="'/'+$i18n.locale+'/pricing'">
                Pricing
              </nuxt-link>
              <nuxt-link class="Header__Link navbar-item navbar-link" :to="'/'+$i18n.locale+'/partners'">
                Partners
              </nuxt-link>
            </a>
          </div>
          <div class="navbar-menu">
            <!-- <nuxt-link class="Header__Link navbar-item" :to="'/'+$i18n.locale+'/sectors'">
              Sectors
            </nuxt-link> -->
            <nuxt-link class="Header__Link navbar-item" :to="'/botic'">
              BoticAI
            </nuxt-link>
            <nuxt-link class="Header__Link navbar-item" :to="'/pricing'">
              Pricing
            </nuxt-link>
            <nuxt-link class="Header__Link navbar-item" :to="''">
              Partners
            </nuxt-link>
            <!-- <span class="Header__Link navbar-item" v-on:click="scrollTo" >
              Partners
            </span> -->
          </div>
        </nav>
        <div class="inlineFlex w50 rf is-hidden-touch">  
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
            <nuxt-link v-for="(language,index) in languageOptions" :to="language.languageKey + $route.fullPath" exact v-on:click="selectedLanguage = language" class="languageChangeOption" :key="index">
              <div class="flagImage" :style="{
              'background-image':'url('+language.flagUrl+')'
            }"></div>
              <div class="flagText">{{language.language}}</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
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
    languageOverlayVisibility:false
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
  background-color: #fff;
  color: #2e2f30;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-family: "Source Sans Pro", Arial, sans-serif;
  height: 100vh;
  margin: 0;
  /* background-image: url('/static/grid.png');
  background-position: center;
  background-size: 1170px 9111px;
  background-repeat: no-repeat; */
}
body{
  overflow-x: hidden;
  max-width: 1440px;
  margin: 0 auto;
}
.navbar-brand{
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
  width: 100%;
  display: flex;
  align-items: center;
  z-index:99;
  max-width: 1440px;
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
  color: #ff003c;
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
  width:100%;
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
</style>
