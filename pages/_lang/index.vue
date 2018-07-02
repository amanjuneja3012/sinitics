<template>
  <div id="homepage">
    <ContentCard
        :header="$t('home.contentCards.card1.header')"
        :subtitle="$t('home.contentCards.card1.subtitle')"
        :buttons="$t('home.contentCards.card1.buttons')"
        showContentOnLeft="true"
        :imageUrl="$t('home.contentCards.card1.image')"
        height="730px"
    >
    </ContentCard>
    <ContentCard
        :title = "$t('home.contentCards.card2.header')"
        :subtitle = "$t('home.contentCards.card2.subtitle')"
        :buttons = "$t('home.contentCards.card2.buttons')"
        showContentOnLeft = "false"
        :imageUrl = "$t('home.contentCards.card2.image')"
        height = "680px"
    >
    </ContentCard>
    <ContentCardCarousel
        :image = "$t('home.contentCards.card3.image')"
        height = "550px"
        :slides = "$t('home.contentCards.card3.slides')"
    >
    </ContentCardCarousel>
    <ContentCard
        :title="$t('home.contentCards.card4.header')"
        :subtitle = "$t('home.contentCards.card4.subtitle')"
        showContentOnLeft="false"
        :imageUrl="$t('home.contentCards.card4.image')"
        height="560px"
        externalComponent=AppsWidget
    >
    </ContentCard>
    <div class="automation-section">
        <ContentCard
            :title = "$t('home.contentCards.card2.header')"
            :subtitle = "$t('home.contentCards.card2.subtitle')"
            :buttons = "$t('home.contentCards.card2.buttons')"
            showContentOnLeft = "true"
            :imageUrl = "$t('home.contentCards.card2.image')"
            height = "620px"
            rightComponent="BudgetCalculator"
        >
        </ContentCard>
        <div class="partner-down">
            <div class="partner-text">Need a partner?</div>
            <div class="partner-icon"></div>
        </div>
    </div>
    <div class="bot-features-container">
      <p class="feature-heading">{{$t('home.contentCards.card6.header')}}</p>
      <div class="features-container">
        <BotFeatureCard
                width="323px"
                height="312px"
                padding="35px"
                :iconUrl="cardObj.iconUrl"
                :title="cardObj.title"
                :subtitle="cardObj.subtitle"
                v-for="(cardObj,index) in $t('home.contentCards.card6.cardsArr')" :key="index"
        >
        </BotFeatureCard>
      </div>
      <a href='/pricing/#pricing-feature'>
        <Button
                :text="$t('home.contentCards.card6.buttonText')"
                backgroundColor="#ff003c"
                color="white">
        </Button>
      </a>
    </div>
    <div class="enterpriseInfo rel flex center" id="partners">
        <div class="infoBack"></div>
        <div class="row w800 h340 widgetContainer">
            <div class="column widgetHeader">
                <h3 class="text head-text w50 leftAlign inlineFlex wInvert300 f25 bold">Have a <span class="ml5 red"> Client</span>?</h3>
                <div class="tabs rightAlign inlineFlex w300 f13">
                    <div class="tab tab-left-button w50 inlineFlex center padding10 borderRight" v-bind:class="{ active: isActiveFirst }" v-on:click="ActivateFirst" >Agency</div>
                    <div class="tab tab-right-button w50 inlineFlex center padding10" v-bind:class="{ active: isActiveSecond }" v-on:click="ActivateSecond" >System Integrator</div>
                </div>
            </div>
            <InfoBlock 
                buttonText="Enterprise"
                heading="Agency"
                text="Botic enterprise & small business bots have what it takes to launch products and brands-scheduling, human takeover, analytics, omnichannel & more"
                image="/images/english/agency@3x.png"
                :visibility='isActiveFirst'
            />
            <InfoBlock
                buttonText="Book a Demo"
                heading="System Integrator"
                text="Botic enterprise & small business bots have what it takes to launch products and brands: scheduling, human takeover, analytics, omnichannel & more"
                image="images/english/integrator@3x.png"
                :visibility='isActiveSecond'
            />
        </div>
    </div>
    <div class="newsCarouselWidget">
        <h3 class="news-heading">Don’t miss the latest <span class="red">Botic News</span></h3>
        <div class="leftAbs"></div>
        <div class="rightAbs"></div>
        <div class="newsCarousel inlineFlex">
            <no-ssr placeholder="Loading...">
                <carousel paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize=5 easing="linear" :speed=300 :paginationEnabled=false :perPage=5 :navigationEnabled="true">
                    <slide v-for="(slideObj,index) in $t('home.newsCarouselWidget.slides')" :key="index">
                        <NewsCard
                            :image="slideObj.image"
                            :content="slideObj.content"
                        >
                        </NewsCard>
                    </slide>
                </carousel>
            </no-ssr>
        </div>
    </div>
    <Footer>

    </Footer>
  </div>


</template>
<script>
    import Index from '~/pages/_lang/index'
    import ContentCard from '~/components/ContentCard'
    import ContentCardCarousel from '~/components/ContentCardCarousel'
    import Button from '~/components/Button'
    import BotFeatureCard from '~/components/BotFeatureCard'
    import Footer from '~/components/Footer'
    import stylesDesktop from '~/static/styles/desktop/home.scss'
    import stylesMobile from '~/static/styles/mobile/home.scss'
    import AppsWidget from '~/components/AppsWidget'
    import BudgetCalculator from '~/components/BudgetCalculator'
    import InfoBlock from '~/components/InfoBlock'
    import NewsCard from '~/components/NewsCard'
    export default {
        components: {
            ContentCard,
            Index,
            BotFeatureCard,
            Button,
            Footer,
            ContentCardCarousel,
            BudgetCalculator,
            AppsWidget,
            InfoBlock,
            NewsCard
        },
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
            isActiveSecond: false
        }),
        methods: {
            ActivateFirst: function (event){
                this.isActiveSecond = false
                this.isActiveFirst= true
            },
            ActivateSecond: function (event){
                this.isActiveFirst= false
                this.isActiveSecond = true
            }
        },
        mounted: () => {
        }
    }
</script>
