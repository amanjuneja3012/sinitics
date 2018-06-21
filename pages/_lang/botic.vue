<template>
  <div class ='botic'> 
    <ContentCard
      header="Chat with your Customers around the <span class='red'> world </span>"
      subtitle="BoticAI is the natural language processing engine with extreme adaptability for new languages"
      inputBox="true"
      showContentOnLeft="true"
      imageUrl="group-6@3x.png"
      height="780px"
    >
    </ContentCard>
    <ContentCard
      class="types-container"
      title="<span class='red'>30,000+</span> Chats"
      subtitle="Power your bot with phrases & metonyms from our priority sectors."
      showContentOnLeft="false"
      imageUrl="group-53@3x.png"
      height= '416px'
      listTypes="true"
    >
    </ContentCard>
     <!-- <ContentCard
      title="<span class='red'>30,000+</span> Chats"
      subtitle="Power your bot with phrases & metonyms from our priority sectors."
      :buttons="buttons.block2"
      showContentOnLeft="false"
      imageUrl="group-53@3x.png"
      height="650px"
    >
    </ContentCard> -->
    <div class="bot-features-container">
      <p class="feature-heading head-workbox">Automation isn’t magic. Here’s <span class="red">how it works </span></p>
      <div class='workbox-section'>
        <div class='divider'>
          <div class='circle'>1</div>
          <div class='line' />
          <div class='circle red-circle'>2</div>
        </div>
        <div class='workbox-container'>
          <div class='workbox'>
          <div class='w-header'>Input</div>
          <div class='w-content'>Use chat history to build chatbot dialogue and conduct initial BoticAI training.</div>
          <img src='input@2x.png' class='w-icon' />
          </div>
          <div class='workbox workbox-hightlight'>
            <div class='w-header'>Prediction</div>
            <div class='w-content'>BoticAI predicts the correct human intent from multilingual support requests.</div>
            <img src='prediction@2x.png' class='w-icon' />
          </div>
        </div>
      </div>
      <div class='workbox-section'>
        <div class='divider'>
          <div class='circle'>3</div>
          <div class='line' />
          <div class='circle'>4</div>
        </div>
        <div class='workbox-container'>
          <div class='workbox'>
          <div class='w-header'>Judgement</div>
          <div class='w-content'>Our NLP experts set the confidence threshold for intent detection, based on a top-k heuristic.</div>
          <img src='judgement@2x.png' class='w-icon' />
          </div>
          <div class='workbox'>
            <div class='w-header'>Action</div>
            <div class='w-content'>Your chatbot sends correct replies to humans, or passes the conversation to an agent</div>
            <img src='prediction@2x.png' class='w-icon' />
          </div>
        </div>
      </div>
      <div class='workbox-section'>
        <div class='divider'>
          <div class='circle'>5</div>
          <div class='line' />
          <div class='circle'>6</div>
        </div>
        <div class='workbox-container'>
          <div class='workbox'>
          <div class='w-header'>Outcome</div>
          <div class='w-content'>Substantial customer support automation and increased customer satisfaction</div>
          <img src='outcome@2x.png' class='w-icon' />
          </div>
          <div class='workbox'>
            <div class='w-header'>Training</div>
            <div class='w-content'>BoticAI increases automation by re-training on live chat history.</div>
            <img src='training@2x.png' class='w-icon' />
          </div>
        </div>
      </div>   
      <!-- <div class="features-container"></div> -->
    </div>
    <ContentCard
      class="types-container"
      title="Achieving higher<span class='red'>Accuracy</span>"
      subtitle="For a client with 90,000 customer support requests per day, SiniticAI™ exhibits up to 11% higher Chinese accuracy than a brand-name NLP engine."
      showContentOnLeft="false"
      imageUrl="achieving@2x.png"
      width= '545px'
      height= '500px'
    >
    </ContentCard>
    <div class='bottom_container'>
      <div class='left_curve'></div>
      <div class='right_curve'></div>
      <ContentCard
        title="Ask the Machine-Learning<span class='red'> Experts </span>"
        subtitle="Our engineers are at forefront of natural language processing research."
        showContentOnLeft="true"
        imageUrl="humans@2x.png"
        height="473px"
      >
      </ContentCard>
    </div>
    <Footer> </Footer>
  </div>


</template>
<script>
    import Index from '~/pages/_lang/index'
    import ContentCard from '~/components/ContentCard'
    import ContentCardCarousel from '~/components/ContentCardCarousel'
    import Button from '~/components/Button'
    import BotFeatureCard from '~/components/BotFeatureCard'
    import Footer from '~/components/Footer'

    export default {
        components: {
            ContentCard,
            Index,
            BotFeatureCard,
            Button,
            Footer,
            ContentCardCarousel
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
            },
            items:[
              {name: 'iGaming', icon: 'government.png'},
              {name: 'Finance', icon: 'government.png'},
              {name: 'Outsourcing', icon: 'government.png'},
              {name: 'Government', icon: 'government.png'}
            ]
        }),
    }
</script>
<style>
  .red{
    color: #ff003c;
  }
  .feature-heading{
    font-size: 38px;
    max-width: 438px;
    text-align: center;
  }
  .features-container{
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .bot-features-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 150px;
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
    height: 26px;
    border-radius: 50%;
    background-color: #bac4cd;
    text-align: center;
    line-height: 26px;
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
</style>
