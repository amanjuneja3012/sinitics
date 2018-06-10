<template>
  <div>
    <header class="Header">
      <div class="flex w100 h100 vCenter">
        <div class="inlineFlex w50 lf">
          <nuxt-link class="Header__Logo Header__Link" :to="$i18n.path('')">
            <div class="logo"></div>
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="'/'+$i18n.locale+'/sectors'">
            Sectors
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="'/'+$i18n.locale+'/botic-ai'">
            BoticAI
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="'/'+$i18n.locale+'/pricing'">
            Pricing
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="'/'+$i18n.locale+'/partners'">
            Partners
          </nuxt-link>
        </div>
        <div class="inlineFlex w50 rf">  
          <nav class="Header__Menu">
            <nuxt-link class="Header__Button" :to="$i18n.path('')" exact>
              {{ $t('links.home') }}
            </nuxt-link>
            <nuxt-link class="Header__Button" :to="$i18n.path('about')" exact>
              {{ $t('links.about') }}
            </nuxt-link>
            <nuxt-link class="Header__Button" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none" exact>
              {{ $t('links.french') }}
            </nuxt-link>
            <nuxt-link class="Header__Button" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
              {{ $t('links.english') }}
            </nuxt-link>
          </nav>
        </div>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
export default {}
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
  height: 60px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
}
.Header__Logo{
  background-image:url('/static/logo.png');
  width: 65px;
  height: 20px;
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
}
.Header__Link {
  font-size: 16px;
  color: #1e1e1e;
  text-decoration: none;
  margin-left: 20px;
}
.Header__Button {
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Button:hover {
  color: #2e2f30;
  background-color: #fff;
}
.nuxt-link-active {
  color: cyan;
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
.flex{
  display:flex;
}
.inlineFlex{
  display:inline-flex;
}
.lf{
  justify-content:flex-start;
  padding-left: 3.5%;
  box-sizing: border-box;
}
.rf{
  justify-content:flex-end;
  padding-right: 3.5%;
  box-sizing: border-box;
}
.h100{
  height:100%;
}
.vCenter{
  align-items:center;
}
</style>
