<template>
  <div 
    class="rel w50" 
    style="{'position':'relative'}">
    <div class="budgetCalculator column">
      <div class="column w100 black roundedTop center">
        <div class="w50 inline-flex vTop colorWhite colorWhite-text f13"><span>{{$t('home.budgetCalculator.heading.text1')}}<br>{{$t('home.budgetCalculator.heading.text2')}}<span class="red">{{$t('home.budgetCalculator.heading.text3')}}</span>{{$t('home.budgetCalculator.heading.text4')}}</span></div>
        <div class="row w50 vTop inline-flex is-paddingless center alignRight">
          <div class="currencyChange">
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button 
                  class="button dropdown-content-selected" 
                  aria-haspopup="true" 
                  aria-controls="dropdown-menu">
                  <span class="selected-text" >{{ selectedCurrency.key }}</span>
                  <span class="drop-down-icon"/>
                                
                </button>
              </div>
              <div 
                id="dropdown-menu" 
                class="dropdown-menu" 
                role="menu">
                <div class="dropdown-content">
                  <div 
                    href="#" 
                    class="dropdown-item" 
                    @click="selectedCurrency=currenciesArr[0]" >
                    {{ currenciesArr[0].key }}
                  </div>
                  <div 
                    class="dropdown-item" 
                    @click="selectedCurrency=currenciesArr[1]" >
                    {{ currenciesArr[1].key }}
                  </div>
                  <div 
                    href="#" 
                    class="dropdown-item is-active" 
                    @click="selectedCurrency=currenciesArr[2]" >
                    {{ currenciesArr[2].key }}
                  </div>
                  <div 
                    href="#" 
                    class="dropdown-item is-active" 
                    @click="selectedCurrency=currenciesArr[3]" >
                    {{ currenciesArr[3].key }}
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="icon" v-for="currency in currenciesArr" v-on:click="selectedCurrency=currency" >
                            <div>{{currency.symbol}}</div>
                        </div> -->
          </div>
          <!-- <div class="text colorWhite inline-flex vTop f14 mr10">USD</div> -->
          <div class="text inline-flex vTop f18 colorWhite bold currency">{{ userValue*budgetValue*selectedCurrency['conversionRatio']+selectedCurrency['symbol'] }}</div>
        </div>
      </div>
      <div class="row w100 white">
        <div class="column">
          <div class="w50 item-container">
            <div class="budget-item-icon"/>
            <div class="text colorDarkBlack inline-flex alignLeft f13 bold pr5">{{$t('home.budgetCalculator.param1')}}</div>
          </div>
          <div class="text colorDarkBlack inline-flex alignRight w50 f13 bold pr5">{{ selectedCurrency['symbol']+budgetValue*selectedCurrency['conversionRatio'] }}</div>
          <no-ssr>
            <div>
              <vue-slider 
                ref="slider"
                v-model="budgetValue"
                :min = "0"
                :max = "1000"
                :interval = "100"
              />
            </div>
          </no-ssr>
        </div>
      </div>
      <div class="row w100 white">
        <div class="column">
          <div class="w50 item-container">
            <div class="user-item-icon"/>
            <div class="text colorDarkBlack inline-flex alignLeft f13 bold pr5">{{$t('home.budgetCalculator.param2')}}</div>
          </div>
          <div class="text colorDarkBlack inline-flex w50 alignRight f13 bold pr5">{{ userValue }}</div>
          <no-ssr>
            <div>
              <vue-slider 
                ref="slider" 
                v-model="userValue"/>
            </div>
          </no-ssr>
        </div>
      </div>
    </div>
    <div class="calcBack"/>
  </div>
</template>

<script>
    import NoSSR from 'vue-no-ssr';
    import currencies from '~/components/currency/data.js';
    var components = {};
    components['no-ssr'] = NoSSR;
    if (process.browser) {
        // in older versions of nuxt, it's process.BROWSER_BUILD
        let VueSlider = require('vue-slider-component');
        components['vue-slider'] = VueSlider;
    }
    export default {
        // methods: 
        components: components,
        data: function () {
            return {
                budgetValue: 0,
                userValue: 0,
                currenciesArr: currencies,
                selectedCurrency: currencies[0]
            };
        },
    };
</script>


<style scoped>
.black {
  padding: 1.4em;
}
.colorWhite-text {
  font-size: 16px;
}
.currency {
  font-size: 30px;
}
.colorWhite-text .red {
  font-weight: 700;
}
.dropdown-trigger {
  position: relative;
}
.is-mobile .roundedTop {
  padding: 0.8em;
}
.is-mobile .vTop.alignRight {
  flex-direction: column;
}
.is-mobile .vTop.alignRight {
  flex-direction: column;
}
.is-mobile .vTop.currency {
  margin-top: 20px;
}
.drop-down-icon {
  width: 6.5px;
  height: 3.9px;
  right: 4px;
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/triangle.svg");
}
.selected-text {
  margin-right: 6px;
}
.budgetCalculator {
  display: flex;
  width: 64%;
  padding: 0;
  top: 158px;
  left: 42px;
  position: absolute;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 47px 212px -56px rgba(0, 0, 0, 0.18);
}
.mobileContentCard .budgetCalculator {
  display: flex;
  width: 100%;
  padding: 0;
  top: 0px;
  left: 0px;
  padding: 2%;
}
.items {
  height: 130px;
  padding: 1.2em 1.4em 1.4em 1.4em;
}
.items .column {
  padding: 0px;
}
.text {
  font-size: 20px;
  font-weight: 600;
  min-width: 100px;
  justify-content: flex-end;
}
.calcBack {
  width: 490px;
  height: 428px;
  background-image: url(/images/english/calcBack@2x.png);
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  top: 20%;
  z-index: -1;
  left: 17%;
}
.vue-slider-component {
  margin-top: 20px;
}
.budget-item-icon {
  width: 45px;
  height: 45px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
  background-size: contain;
  background-image: url("/images/english/budget@2x.png");
}
.user-item-icon {
  width: 45px;
  height: 45px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
  background-size: contain;
  background-image: url("/images/english/users@2x.png");
}
.item-container {
  display: inline-block;
}
.currencyChange {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .currencyChange .icon{
        border: 1px solid black;
        border-radius: 50%;
        background:white;
        color:black;
        width: 30px;
        height: 30px;
        margin: 0 4px;
        cursor: pointer;
    } */
.currencyChange .icon:hover,
.currencyChange .icon.selected {
  background: white;
  color: red;
}
.dropdown-item {
  height: 33px;
  width: 59px;
  padding: 0;
  text-align: center;
}
.dropdown-item:hover {
  background-color: #f0f0f0;
}
.dropdown-menu,
.dropdown-content {
  width: 59px;
  border-radius: 2px;
}
.dropdown-content-selected {
  width: 59px;
  background-color: rgba(255, 255, 255, 0.06);
  border: solid 1px #3a3a3a;
  color: white;
}
.mobileContentCard .calcBack {
  width: 100%;
  height: 500px;
  top: 40%;
  left: 0%;
}
</style>