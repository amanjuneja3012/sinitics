<template>
  <div class ='botic botic-mobile'>
    <ContentCard
      :header="$t('botic.contentCards.card1.header')"
      :subtitle="$t('botic.contentCards.card1.subtitle')"
      inputBox="true"
      showContentOnLeft="true"
      imageUrl="group-6@3x.png"
      height="780px"
    >
    </ContentCard>
    <ContentCard
      class="types-container"
      :title="$t('botic.contentCards.card2.header')"
      :subtitle="$t('botic.contentCards.card2.subtitle')"
      showContentOnLeft="false"
      imageUrl="group-53@3x.png"
      height= '416px'
      listTypes="true"
    >
    </ContentCard>
    <div :class="($device.isDesktop)?'bots-features-container':'bots-features-container is-flex-mobile'"  >
      <p class="feature-heading head-workbox" v-html="$t('botic.processDetailsWidget.heading')"></p>
      <div class='workbox-desktop' v-if="$device.isDesktop">
        <WorkBoxSection 
          :leftCard="$t('botic.processDetailsWidget.step1.leftCard')"
          :rightCard="$t('botic.processDetailsWidget.step1.rightCard')"
          :rightCardHighlight=true
        />
        <WorkBoxSection 
          :leftCard="$t('botic.processDetailsWidget.step2.leftCard')"
          :rightCard="$t('botic.processDetailsWidget.step2.rightCard')"
        />
        <WorkBoxSection 
          :leftCard="$t('botic.processDetailsWidget.step3.leftCard')"
          :rightCard="$t('botic.processDetailsWidget.step3.rightCard')"
          :rightCardHighlight=true
        />
      </div>
      <div class='workbox-mobile' v-else-if="$device.isMobile">
        <WorkBoxSection 
          :card1="$t('botic.processDetailsWidget.step1.leftCard')"
          :card2="$t('botic.processDetailsWidget.step1.rightCard')"
          :card3="$t('botic.processDetailsWidget.step2.leftCard')"
          :card4="$t('botic.processDetailsWidget.step2.rightCard')"
          :card5="$t('botic.processDetailsWidget.step3.leftCard')"
          :card6="$t('botic.processDetailsWidget.step3.rightCard')"
        />
      </div>
    </div>
    <div class="tabs-container">
      <h3 class='tabs-header' >Pushing the limits of <br> <span class=red>Natural Language Processing</span></h3>
      <Tabs />
    </div>
    <ContentCard
      class="types-container"
      :title="$t('botic.contentCards.card3.header')"
      :subtitle="$t('botic.contentCards.card3.subtitle')"
      showContentOnLeft="false"
      imageUrl="achieving@2x.png"
      width= '545px'
      height= '500px'
    >
    </ContentCard>
    <!-- <div class='bottom_container'>
      <div class='left_curve'></div>
      <div class='right_curve'></div>
      <ContentCard
        :title="$t('botic.contentCards.card4.header')"
        :subtitle="$t('botic.contentCards.card4.subtitle')"
        showContentOnLeft="true"
        imageUrl="humans@2x.png"
        height="473px"
      >
      </ContentCard>
    </div> -->
    <div class="questions">
        <p class="page-title is-hidden-touch question-title">{{$t('pricing.tableData.questionsWidget.title')}}</p>
        <p class="page-title is-hidden-desktop ">{{$t('pricing.tableData.questionsWidget.title')}}</p>
        <Button
            color="white"
            width="230px"
            :text="$t('pricing.tableData.questionsWidget.buttonText')"
            :iconUrl="$t('pricing.tableData.questionsWidget.buttonIcon')"
            align="space-between"
            backgroundColor="#ff003c"
            :onClick="function(){}"
        >
        </Button>
        <div class="side-image is-hidden-touch" v-if="$device.isDesktop" ></div>
    </div>
    <Footer v-if="$device.isDesktop"> </Footer>
    <FooterMobile v-if="$device.isMobile"> </FooterMobile>
  </div>


</template>
<script>
    import Index from '~/pages/_lang/index'
    import ContentCard from '~/components/ContentCard'
    import Button from '~/components/Button'
    import Footer from '~/components/Footer'
    import FooterMobile from '~/components/FooterMobile'
    import WorkBoxSection from '~/components/workBoxSection'
    import Tabs from '~/components/Tabs'

    export default {
        components: {
            ContentCard,
            Index,
            Button,
            Footer,
            WorkBoxSection,
            Tabs,
            FooterMobile
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
                    {text: 'Enterprise', backgroundColor: '#ff003c', color: '#ffffff'},
                    {text: 'Small Business', backgroundColor: '#ffffff', color: '#000000'}
                ]
            }
        }),
    }
</script>
<style>
  .botic{
    position: relative;
  }
  .red{
    color: #ff003c;
  }
  .feature-heading{
    font-size: 38px;
    max-width: 438px;
    text-align: center;
  }
  .types-container{
    position: relative;
  }
  .types{
    display: flex;
    justify-content: center;
  }
  .items{
    width: 110px;
    height: 80px;
    padding: 4px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
  /* .botic .image{
    margin-left: 7%;
  } */
  /* .items:hover{
    box-shadow: rgb(230, 230, 230) 0px 2px 17px 5px;
  } */
  .icons{
    text-align: center;
  }
  .bots-features-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 150px;
  }
  .is-flex-mobile{
    margin-top: 0px;
  }
  .head-workbox{
    margin-bottom: 40px;
    font-size: 2em;
    color: #1e1e1e;
    font-weight: bold;
    line-height: 1.1em;
  }
  .divider{
    display: flex;
    align-items: center;
    max-width: 30%;
    margin: 2% auto;
  }
  .circle{
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #bac4cd;
    text-align: center;
    line-height: 30px;
  }
  .red-circle{
    background-color: #ff003c;
  }
  .line{
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    border: solid 0.5px #bac4cd;
  }
  .workbox-desktop{
    width: 100%;
  }
  .workbox-section{
    margin-bottom: 3%;
    width: 100%;
  }
  .workbox-container{
    width: 53.6%;
    height: 180px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .workbox{
    position: relative;
    display: inline-block;
    padding: 10px 2% 4px;
    max-width: 353px;
    max-height: 178px;
    border-radius: 2.6px;
    background-color: rgba(255, 255, 255, 0.9);
    border: solid 1.3px #dee0e6;
  }
  .workbox-hightlight{
    background-color: rgba(255, 52, 77, 0.06);
    border: solid 1.3px #ff344d;
  }
  .workbox-mobile{
    width: 100%;
  }
  .workbox-mobile .workbox-container{
    display: block;
    width: 100%;
    padding: 0 6%;
    white-space: nowrap;
    overflow: auto;
  }
  .workbox-mobile .workbox-section{
    margin-bottom: 0px;

  }
  .workbox-mobile .workbox{
    width: 314px;
    height: 180px;
    vertical-align: top;
    white-space: normal;
    margin-right: 10px;
    display: inline-block;
  }
  .workbox-mobile .circle{
    right: 8px;
    position: absolute;
  }
  .w-header{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .w-content{
     font-size: 18px;
  } 
  .w-icon{
    width: 90px;
    height: 70px;
    right: 0;
    bottom: 0;
    position: absolute;
  }
  .bottom_container{
    position: relative;
  }
  .content-container{
    z-index: 1;
  }
  .left_curve{
    left: 0;
    z-index: 0;
    width: 330px;
    height: 272px;
    bottom: 0px;
    position: absolute;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/static/left_curve@2x.png')
  }
  .right_curve{
    bottom: 0;
    right: 0;
    z-index: 0;
    width: 744px;
    height: 474px;
    position: absolute;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/static/oval-copy@2x.png')
  }
  .footer-container{
    margin-top: 0px;
  }
  .page-title{
      font-size: 2em;
      color: #1e1e1e;
      font-weight: bold;
      line-height: 1.1em;
      margin-bottom: 40px;
    }
    .question-title {
      margin-top: 150px;
    }
    .questions{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 7%;
    }
    .side-image{
        left: 0;
        z-index: 0;
        width: 330px;
        height: 272px;
        bottom: 432px;
        position: absolute;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('/static/left_curve@2x.png');
    }
    .tabs-container{
      margin-bottom: 8%;
    }
    .tabs-header{
      font-size: 2.12em;
      color: #1e1e1e;
      font-weight: bold;
      line-height: 1.36em;
      margin-bottom: 4%;
      text-align: center;
    }
    .questions{
      text-align: center;
    }
</style>
