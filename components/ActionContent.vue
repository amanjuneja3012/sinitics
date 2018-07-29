<template>
  <div 
    :style="{
      'width': width,
      'height': (($device.isMobile)?'auto':height),
      'padding': padding
    }" 
    class="content-container">
    <div class="is-hidden-touch">
      <h1 
        v-if="header" 
        v-html="header"/>
      <h3 
        v-if="subtitle && title" 
        v-html="title"/>
      <h3 
        v-if="subtitle === undefined && title" 
        class="head-mar" 
        v-html="title"/>
      <p 
        v-if="subtitle" 
        v-html="subtitle"/>
      <div class="button-container">
        <div 
          v-for="(button, index) in buttons" 
          v-if="!externalComponent" 
          :key="index" 
          class="buttons">
          <Button
            :text="button.text"
            :to="button.to"
            :backgroundColor="button.backgroundColor"
            :color="button.color"
            :onClick="clickHandlers && clickHandlers[index] || function(){}"
          />
        </div>
        <AppsWidget v-if="externalComponent"/>
        <InputBox 
          v-if="inputBox" 
          :on-submit="onSend" 
          :send-text="sendText" 
          :place-holder="placeHolder" />
        <ListTypes v-if="listTypes"/>
      </div>
    </div>
    <div class="mobileContentCard is-hidden-desktop">
      <h1 
        v-if="header" 
        v-html="header"/>
      <h3 
        v-if="subtitle && title" 
        v-html="title"/>
      <h3 
        v-if="subtitle === undefined && title" 
        class="head-mar" 
        v-html="title"/>
      <p 
        v-if="subtitle" 
        v-html="subtitle"/>
      <div class="button-container is-mobile-button">
        <div 
          v-for="(button, index) in buttons" 
          v-if="!externalComponent" 
          :key="index">
          <Button
            :text="button.text"
            :to="button.to"
            :backgroundColor="button.backgroundColor"
            :color="button.color"
            :onClick="function(){}"
          />
        </div>
        <AppsWidget v-if="externalComponent"/>
        <InputBox 
          v-if="inputBox" 
          :send-text="sendText" 
          :place-holder="placeHolder" />
        <ListTypes v-if="listTypes"/>
      </div>
    </div>
  </div>
</template>

<script>
    import Button from '~/components/Button';
    import AppsWidget from '~/components/AppsWidget';
    import InputBox from '~/components/InputBox';
    import ListTypes from '~/components/ListTypes';
    import axios from 'axios';
    export default {
        components: {
            Button,
            AppsWidget,
            InputBox,
            ListTypes
        },
        props: ['title', 'header', 'subtitle', 'buttons', 'clickHandlers', 'width', 'height', 'padding', 'externalComponent', 'inputBox', 'listTypes', 'sendText', 'placeHolder' ],
        data: function () {
            return {
            // externalComponent:'externalComponent',
            // inputBox:'inputBox'
            };
        },
        methods: {
            onSend: function (name, company, email){
                const instance = axios.create({ baseURL: 'https://api.prosperworks.com/developer_api/v1/leads' });
                instance.defaults.headers.common['Content-Type'] = 'application/json';
                instance.defaults.headers.common['X-PW-AccessToken'] = '5e952377dd5291aa014db0158a3fa0c1';
                instance.defaults.headers.common['X-PW-Application'] = 'developer_api';
                instance.defaults.headers.common['X-PW-UserEmail'] = 'curtis@sinitic.ai';
                instance.defaults.headers.common['crossDomain'] = 'true'; 
                instance.post('/leads', JSON.stringify({
                    "email": {
                        "email": email,
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
h1 {
  font-size: 2.7em;
  color: #1e1e1e;
  font-weight: bold;
  line-height: 1.05em;
  margin-bottom: 5%;
}
h3 {
  font-size: 2.12em;
  color: #1e1e1e;
  font-weight: bold;
  line-height: 1.36em;
  margin-bottom: 2%;
}
.head-mar {
  margin-bottom: 7%;
}
p {
  font-size: 1.22em;
  color: #1e1e1e;
  margin-bottom: 7%;
  line-height: 1.4em;
}
.button-container {
  display: flex;
  flex-direction: row;
  /* margin-top: 1em; */
  /* justify-content: space-between; */
}

.buttons {
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  /* width: 170px; */
  height: 50px;
  margin-right: 1.6em;
  border: none;
}
.button {
  border: none;
  border-radius: 2px;
}
.button-container.is-mobile-button {
  display: flex;
  justify-content: center;
}
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.mobileContentCard {
  text-align: center;
}
.mobileContentCard.content-container {
  height: auto;
  text-align: center;
  padding: 5%;
  margin-bottom: 50px;
  box-sizing: border-box;
}
.mobileContentCard.content-container h1,
.mobileContentCard.content-container h3 {
  font-size: 1.8em;
  color: #1e1e1e;
  font-weight: bold;
  line-height: 1.2em;
  margin-bottom: 5%;
}
.mobileContentCard.content-container p {
  font-size: 1em;
}
.mobileContentCard .button-container {
  margin: 0 auto;
}
.mobileContentCard.content-container .input-cont {
  margin: 0 auto;
  width: 350px;
}
</style>