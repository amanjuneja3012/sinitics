<template>
  <div>
    <div class="is-hidden-touch">
      <div class="tabs is-centered is-toggle">
        <ul>
          <li 
            :class="{ 'is-active': isActiveFirst }" 
            class="tab-head has-border" 
            @click="ActivateFirst" >
            <span class="icon icon-1 is-small"/>
            <span>{{ $t('botic.tabsWidget.tab1.tabName') }}</span>
          </li>
          <li 
            :class="{ 'is-active': isActiveSecond }" 
            class="tab-head has-border" 
            @click="ActivateSecond" >
            <span class="icon icon-2 is-small"/>
            <span>{{ $t('botic.tabsWidget.tab2.tabName') }}</span>
          </li>
          <li 
            :class="{ 'is-active': isActiveThird }" 
            class="tab-head" 
            @click="ActivateThird" >
            <span class="icon icon-3 is-small"/>
            <span>{{ $t('botic.tabsWidget.tab3.tabName') }}</span>
          </li>
        </ul>
      </div>
      <div 
        :class="{ 'active-content': isActiveFirst }" 
        class="content">
        <div class="tab-content-container tab-contents">
          <div class="tab-image tab-image-1">
            <div class="prob-sol problem-image-1"/>
          </div>
          <div class="tab-image tab-image-2">
            <div class="prob-sol solution-image-1"/>
          </div>
        </div>
        <div class="tab-content-container tab-content-container-2">
          <div class="tab-content-text tab-content-text-left">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab1.leftCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab1.leftCard.tabDetail") }}</div>
          </div>
          <div class="tab-content-text">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab1.rightCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab1.rightCard.tabDetail") }}</div>
          </div>
        </div>
      </div>
      <div 
        :class="{ 'active-content': isActiveSecond }" 
        class="content" >
        <div class="tab-content-container tab-contents">
          <div class="tab-image tab-image-1">
            <div class="prob-sol problem-image-2"/>
          </div>
          <div class="tab-image tab-image-2">
            <div class="prob-sol solution-image-2"/>
          </div>
        </div>
        <div class="tab-content-container tab-content-container-2">
          <div class="tab-content-text tab-content-text-left">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab2.leftCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab2.leftCard.tabDetail") }}</div>
          </div>
          <div class="tab-content-text">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab2.rightCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab2.rightCard.tabDetail") }}</div>
          </div>
        </div>
      </div>
      <div 
        :class="{ 'active-content': isActiveThird }" 
        class="content">
        <div class="tab-content-container tab-contents">
          <div class="tab-image tab-image-1">
            <div class="prob-sol problem-image-3"/>
          </div>
          <div class="tab-image tab-image-2">
            <div class="prob-sol solution-image-3"/>
          </div>
        </div>
        <div class="tab-content-container tab-content-container-2">
          <div class="tab-content-text tab-content-text-left">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab3.leftCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab3.leftCard.tabDetail") }}</div>
          </div>
          <div class="tab-content-text">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab3.rightCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab3.rightCard.tabDetail") }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-tabs is-hidden-desktop" >
      <li class="tab-head has-border">
        <span class="icon icon-1 is-small"/>
        <span>{{ $t('botic.tabsWidget.tab1.tabName') }}</span>
      </li>
      <div class="content active-content horizontalScrolling">
        <div class="tab-content-container tab-contents">
          <div class="tab-image tab-image-1">
            <div class="prob-sol problem-image-1"/>
          </div>
          <div class="tab-image tab-image-2">
            <div class="prob-sol solution-image-1"/>
          </div>
        </div>
        <div class="tab-content-container tab-content-container-2">
          <div class="tab-content-text tab-content-text-left">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab1.leftCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab1.leftCard.tabDetail") }}</div>
          </div>
          <div class="tab-content-text">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab1.rightCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab1.rightCard.tabDetail") }}</div>
          </div>
        </div>
      </div>
      <li class="tab-head has-border">
        <span class="icon icon-2 is-small"/>
        <span>{{ $t('botic.tabsWidget.tab2.tabName') }}</span>
      </li>
      <div class="content active-content horizontalScrolling">
        <div class="tab-content-container tab-contents">
          <div class="tab-image tab-image-1">
            <div class="prob-sol problem-image-2"/>
          </div>
          <div class="tab-image tab-image-2">
            <div class="prob-sol solution-image-2"/>
          </div>
        </div>
        <div class="tab-content-container tab-content-container-2">
          <div class="tab-content-text tab-content-text-left">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab2.leftCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab2.leftCard.tabDetail") }}</div>
          </div>
          <div class="tab-content-text">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab2.rightCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab2.rightCard.tabDetail") }}</div>
          </div>
        </div>
      </div>
      <li class="tab-head" >
        <span class="icon icon-3 is-small"/>
        <span>{{ $t('botic.tabsWidget.tab3.tabName') }}</span>
      </li>
      <div class="content active-content horizontalScrolling">
        <div class="tab-content-container tab-contents">
          <div class="tab-image tab-image-1">
            <div class="prob-sol problem-image-3"/>
          </div>
          <div class="tab-image tab-image-2">
            <div class="prob-sol solution-image-3"/>
          </div>
        </div>
        <div class="tab-content-container tab-content-container-2">
          <div class="tab-content-text tab-content-text-left">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab3.leftCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab3.leftCard.tabDetail") }}</div>
          </div>
          <div class="tab-content-text">
            <div class="tab-content-text-head">{{ $t("botic.tabsWidget.tab3.rightCard.tabHeading") }}</div>
            <div class="tab-content-text-content">{{ $t("botic.tabsWidget.tab3.rightCard.tabDetail") }}</div>
          </div>
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
                this.isActiveSecond = false;
                this.isActiveThird = false;
                this.isActiveFirst = true;
            },
            ActivateSecond: function (event){
                this.isActiveFirst = false;
                this.isActiveThird = false;
                this.isActiveSecond = true;
            },
            ActivateThird: function (event){
                this.isActiveSecond = false;
                this.isActiveFirst = false;
                this.isActiveThird = true;
            },
        },
    };
</script>


<style scoped>
.tabs {
  width: 100%;
  margin-bottom: -35px;
}
.tab-head {
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
.tab-content-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.tab-contents {
  height: 533px;
  background-color: #f6f6f6;
}
.icon {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.icon-1 {
  background-image: url("/static/multilingual.svg");
}
.icon-2 {
  background-image: url("/static/multitask.svg");
}
.icon-3 {
  background-image: url("/static/multiturn.svg");
}
.is-active {
  background-color: #ff003c;
}
.has-border {
  border-right: 1.5px solid rgba(255, 255, 255, 0.2);
}
.tab-image {
  width: 358px;
  height: 420px;
  position: relative;
  display: inline-block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.tab-image-1 {
  margin-right: 10%;
  background-image: url("/static/phone@2x.png");
}
.tab-image-2 {
  background-image: url("/static/phone_white@2x.png");
}
.tab-content-text {
  max-width: 386px;
  text-align: center;
}
.tab-content-text-left {
  margin-right: 10%;
}
.tab-content-container-2 {
  margin-top: 1%;
  align-items: flex-start;
}
.content {
  display: none;
}
.active-content {
  display: block;
}
.tab-content-text-head {
  font-size: 20px;
  font-weight: 600;
}
.tab-content-text-content {
  font-size: 18px;
}
.prob-sol {
  bottom: 0;
  left: 20px;
  width: 320px;
  height: 326px;
  position: absolute;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.problem-image-1 {
  background-image: url("/static/p-1@2x.png");
}
.solution-image-1 {
  background-image: url("/static/s-1@2x.png");
}
.problem-image-2 {
  background-image: url("/static/p-2@2x.png");
}
.solution-image-2 {
  background-image: url("/static/s-2@2x.png");
}
.problem-image-3 {
  background-image: url("/static/p-3@2x.png");
}
.solution-image-3 {
  background-image: url("/static/s-3@2x.png");
}
.mobile-tabs .tab-head {
  margin: 0 auto;
}
.mobile-tabs .tab-contents {
  height: 330px;
}
.mobile-tabs .tab-content-container {
  display: block;
  padding: 20px 30px 0 0px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.mobile-tabs .tab-image {
  width: 350px;
  height: 310px;
}
.mobile-tabs .prob-sol {
  left: 55px;
  width: 240px;
  height: 240px;
}
.mobile-tabs .tab-content-text {
  white-space: normal;
  display: inline-block;
  margin-right: 20%;
  margin-left: 10%;
}
.mobile-tabs .horizontalScrolling {
  overflow: scroll;
  white-space: nowrap;
}
</style>
