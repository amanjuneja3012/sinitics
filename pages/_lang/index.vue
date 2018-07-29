<template>
  <div id="homepage">
    <div>
      <Modal 
        :show-modal="showModal" 
        :on-send= "onSend" 
        :close="toggleModal" />
    </div>      
    <ContentCard
      :header="$t('home.contentCards.card1.header')"
      :subtitle="$t('home.contentCards.card1.subtitle')"
      :buttons="$t('home.contentCards.card1.buttons')"
      :click-handlers="[
        () => {},
        toggleModal
      ]"
      :show-content-on-left="true"
      :image-url="$t('home.contentCards.card1.image')"
      height="635px"
    />
    <ContentCard
      :title="$t('home.contentCards.card2.header')"
      :subtitle="$t('home.contentCards.card2.subtitle')"
      :buttons="$t('home.contentCards.card2.buttons')"
      :show-content-on-left="false"
      :image-url="$t('home.contentCards.card2.image')"
      height="680px"
    />
    <ContentCardCarousel
      :image="$t('home.contentCards.card3.image')"
      :slides="$t('home.contentCards.card3.slides')"
      height="550px"
    />
    <ContentCard
      :title="$t('home.contentCards.card4.header')"
      :subtitle="$t('home.contentCards.card4.subtitle')"
      :show-content-on-left="false"
      :image-center="true"
      :image-url="$t('home.contentCards.card4.image')"
      height="560px"
      external-component="AppsWidget"
    />
    <div class="automation-section is-hidden-touch">
      <ContentCard
        :title="$t('home.contentCards.card5.header')"
        :subtitle="$t('home.contentCards.card5.subtitle')"
        :buttons="$t('home.contentCards.card5.buttons')"
        :show-content-on-left="true"
        :image-url="$t('home.contentCards.card5.image')"
        height="620px"
        right-component="BudgetCalculator"
      />
      <!-- <div class="partner-down">
            <div class="partner-text">Need a partner?</div>
            <div class="partner-icon"></div>
        </div> -->
    </div>
    <div class="automation-section is-hidden-desktop mobileContentCard">
      <ContentCard
        :title="$t('home.contentCards.card5.header')"
        :subtitle="$t('home.contentCards.card5.subtitle')"
        :buttons="$t('home.contentCards.card5.buttons')"
        :show-content-on-left="true"
        height="auto"
      />
      <!-- <div class="partner-down">
            <div class="partner-text">Need a partner?</div>
            <div class="partner-icon"></div>
        </div> -->
      <BudgetCalculatorMobile />
    </div>
    <div class="desktop bot-features-container is-hidden-touch">
      <p 
        class="feature-heading" 
        v-html="$t('home.contentCards.card6.header')"/>
      <div class="features-container">
        <BotFeatureCard
          v-for="(cardObj,index) in $t('home.contentCards.card6.cardsArr')"
          :icon-url="cardObj.iconUrl"
          :title="cardObj.title"
          :subtitle="cardObj.subtitle"
          :key="index"
          width="323px"
          height="312px" 
          padding="35px"
        />
      </div>
      <Button
        :text="$t('home.contentCards.card6.buttonText')"
        :onClick="function(){}"
        backgroundColor="#ff003c"
        color="white"
        to="/pricing/#pricing-feature"
      />
    </div>
    <div class="mobile bot-features-container is-hidden-desktop">
      <p 
        class="feature-heading" 
        v-html="$t('home.contentCards.card6.header')"/>
      <div class="features-container">
        <BotFeatureCard
          v-for="(cardObj,index) in $t('home.contentCards.card6.cardsArr')"
          :icon-url="cardObj.iconUrl"
          :title="cardObj.title"
          :subtitle="cardObj.subtitle"
          :key="index"
          width="323px"
          height="312px" 
          padding="35px"
        />
      </div>
      <Button
        :text="$t('home.contentCards.card6.buttonText')"
        :onClick="function(){}"
        backgroundColor="#ff003c"
        color="white"
        to="/pricing/#pricing-feature"
      />
    </div>
    <div 
      id="partners" 
      class="enterpriseInfo rel flex center is-hidden-touch">
      <div class="infoBack"/>
      <div class="row w800 h340 widgetContainer">
        <div class="column widgetHeader">
          <h3 class="text head-text w50 leftAlign inlineFlex wInvert300 f25 bold">Have a <span class="ml5 red"> Client</span>?</h3>
          <div class="tabs rightAlign inlineFlex w300 f13">
            <div 
              :class="{ active: isActiveFirst }" 
              class="tab tab-left-button w50 inlineFlex center padding10 borderRight" 
              @click="ActivateFirst" >Agency</div>
            <div 
              :class="{ active: isActiveSecond }" 
              class="tab tab-right-button w50 inlineFlex center padding10" 
              @click="ActivateSecond" >System Integrator</div>
          </div>
        </div>
        <InfoBlock 
          :visibility="isActiveFirst"
          button-text="Enterprise"
          heading="Agency"
          text="Botic enterprise & small business bots have what it takes to launch products and brands-scheduling, human takeover, analytics, omnichannel & more"
          image="/images/english/agency@3x.png"
        />
        <InfoBlock
          :visibility="isActiveSecond"
          button-text="Book a Demo"
          heading="System Integrator"
          text="Sinitic enterprise bots have the features needs for complex solutions: NLP, human takeover, bot training, local hosting, integrations & more"
          image="images/english/integrator@3x.png"
        />
      </div>
    </div>
    <div 
      id="partner" 
      class="enterpriseInfo rel flex center column hAuto mobile is-hidden-desktop">
      <div class="column widgetHeader w100">
        <h3 class="text head-text bold">Have a <span class="ml5 red"> Client</span>?</h3>
        <div class="tabs f13">
          <div 
            :class="{ active: isActiveFirst }" 
            class="tab tab-left-button w50 inlineFlex center padding10 borderRight" 
            @click="ActivateFirst" >Agency</div>
          <div 
            :class="{ active: isActiveSecond }" 
            class="tab tab-right-button w50 inlineFlex center padding10" 
            @click="ActivateSecond" >System Integrator</div>
        </div>
      </div>
      <InfoBlockMobile
        :visibility="isActiveFirst"
        button-text="Enterprise"
        heading="Agency"
        text="Botic enterprise & small business bots have what it takes to launch products and brands-scheduling, human takeover, analytics, omnichannel & more"
        image="/images/english/agency@3x.png"
      />
      <InfoBlockMobile
        :visibility="isActiveSecond"
        button-text="Book a Demo"
        heading="System Integrator"
        text="Sinitic enterprise bots have the features needs for complex solutions: NLP, human takeover, bot training, local hosting, integrations & more"
        image="images/english/integrator@3x.png"
      />
    </div>
    <div class="newsCarouselWidget">
      <h3 class="news-heading">Don’t miss the latest <span class="red">Botic News</span></h3>
      <div class="leftAbs"/>
      <div class="rightAbs is-hidden-touch"/>
      <div class="newsCarousel is-hidden-touch">
        <no-ssr placeholder="Loading...">
          <carousel 
            :pagination-size="5" 
            :speed="300" 
            :pagination-enabled="false" 
            :per-page="5" 
            :navigation-enabled="true" 
            pagination-active-color="#42b983" 
            pagination-color="#b2ebd1" 
            easing="linear">
            <slide 
              v-for="(slideObj,index) in $t('home.newsCarouselWidget.slides')" 
              :key="index">
              <NewsCard
                :image="slideObj.image"
                :content="slideObj.content"
              />
            </slide>
          </carousel>
        </no-ssr>
      </div>
      <div 
        :class="($device.isMobile)?'is-mobile':''" 
        class="newsCarousel is-hidden-desktop mobileNewsCarousel" >
        <no-ssr placeholder="Loading...">
          <carousel 
            :pagination-size="5" 
            :speed="300" 
            :pagination-enabled="false" 
            :per-page="1" 
            :navigation-enabled="true" 
            pagination-active-color="#42b983" 
            pagination-color="#b2ebd1" 
            easing="linear">
            <slide 
              v-for="(slideObj,index) in $t('home.newsCarouselWidget.slides')" 
              :key="index">
              <NewsCard
                :image="slideObj.image"
                :content="slideObj.content"
              />
            </slide>
          </carousel>
        </no-ssr>
      </div>
    </div>
    <Footer class="is-hidden-touch"/>
    <FooterMobile class="is-hidden-desktop"/>
  </div>


</template>
<script>
    import Index from '~/pages/_lang/index';
    import ContentCard from '~/components/ContentCard';
    import ContentCardCarousel from '~/components/ContentCardCarousel';
    import Button from '~/components/Button';
    import BotFeatureCard from '~/components/BotFeatureCard';
    import Footer from '~/components/Footer';
    import FooterMobile from '~/components/FooterMobile';
    import Modal from '~/components/Modal';
    import stylesDesktop from '~/static/styles/desktop/home.scss';
    import stylesMobile from '~/static/styles/mobile/home.scss';
    import AppsWidget from '~/components/AppsWidget';
    import BudgetCalculator from '~/components/BudgetCalculator';
    import BudgetCalculatorMobile from '~/components/BudgetCalculatorMobile';
    import InfoBlock from '~/components/InfoBlock';
    import InfoBlockMobile from '~/components/InfoBlockMobile';
    import NewsCard from '~/components/NewsCard';
    export default {
        components: {
            ContentCard,
            Index,
            BotFeatureCard,
            Button,
            Footer,
            Modal,
            ContentCardCarousel,
            BudgetCalculator,
            BudgetCalculatorMobile,
            AppsWidget,
            InfoBlock,
            InfoBlockMobile,
            NewsCard,
            FooterMobile
        },
        data: () => ({
            showModal: false,
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
            isActiveSecond: false
        }),
        mounted () {
            window.scrollTo(0, 0);
        },
        methods: {
            toggleModal:function(){
                this.showModal = !this.showModal;
            },            
            ActivateFirst: function (event){
                this.isActiveSecond = false;
                this.isActiveFirst = true;
            },
            ActivateSecond: function (event){
                this.isActiveFirst = false;
                this.isActiveSecond = true;
            },
            onSend: function (name, company, email){
                const instance = axios.create({ baseURL: 'https://api.prosperworks.com/developer_api/v1/leads' });
                instance.defaults.headers.common['Content-Type'] = 'application/json';
                instance.defaults.headers.common['X-PW-AccessToken'] = '5e952377dd5291aa014db0158a3fa0c1';
                instance.defaults.headers.common['X-PW-Application'] = 'developer_api';
                instance.defaults.headers.common['X-PW-UserEmail'] = 'curtis@sinitic.ai';
                instance.defaults.headers.common['crossDomain'] = 'true'; 
                instance.post('/leads', JSON.stringify({
                    "name": name,
                    "email": {
                        "email": email,
                        "category":"work"
                    },
                    "company_name": company
                })).then(function (response) {
                    this.toggleModal();
                }).catch((err) => {
                    console.log(err);
                });
            }            
        },
    };
</script>
<style>
.mobileNewsCarousel .VueCarousel-navigation {
  display: none !important;
}
</style>
