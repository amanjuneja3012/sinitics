<template>
  <div> 
    <ContentCard
      title="Chat with your Customers around the <span class='red'> world </span>"
      subtitle="BoticAI is the natural language processing engine with extreme adaptability for new languages"
      inputBox="true"
      showContentOnLeft="true"
      imageUrl="group-6@3x.png"
      height="620px"
    >
    </ContentCard>
    <ContentCard
      class="types-container"
      title="<span class='red'>30,000+</span> Chats"
      subtitle="Power your bot with phrases & metonyms from our priority sectors."
      showContentOnLeft="false"
      imageUrl="group-53@3x.png"
      height= '530px'
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
          <div class='circle'>2</div>
        </div>
        <div class='workbox-container'>
          <div class='workbox'>
          <div class='w-header'>Judgement</div>
          <div class='w-content'>Use chat history to build chatbot dialogue and conduct initial BoticAI training.</div>
          <img src='government.png' class='w-icon' />
          </div>
          <div class='workbox'>
            <div class='w-header'>Judgement</div>
            <div class='w-content'>Use chat history to build chatbot dialogue and conduct initial BoticAI training.</div>
            <img src='government.png' class='w-icon' />
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
          <div class='w-content'>Use chat history to build chatbot dialogue and conduct initial BoticAI training.</div>
          <img src='government.png' class='w-icon' />
          </div>
          <div class='workbox'>
            <div class='w-header'>Judgement</div>
            <div class='w-content'>Use chat history to build chatbot dialogue and conduct initial BoticAI training.</div>
            <img src='government.png' class='w-icon' />
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
          <div class='w-header'>Judgement</div>
          <div class='w-content'>Use chat history to build chatbot dialogue and conduct initial BoticAI training.</div>
          <img src='government.png' class='w-icon' />
          </div>
          <div class='workbox'>
            <div class='w-header'>Judgement</div>
            <div class='w-content'>Use chat history to build chatbot dialogue and conduct initial BoticAI training.</div>
            <img src='government.png' class='w-icon' />
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
      imageUrl="achieving.png"
      width= '545px'
      height= '500px'
    >
    </ContentCard>
    <ContentCard
      title="Ask the Machine-Learning<span class='red'> Experts </span>"
      subtitle="Our engineers are at forefront of natural language processing research."
      showContentOnLeft="true"
      imageUrl="group-6@3x.png"
      height="620px"
    >
    </ContentCard>
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
    width: 100px;
    height: 80px;
    padding: 4px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
  .items:hover{
    box-shadow: rgb(230, 230, 230) 0px 2px 17px 5px;
  }
  .icons{
    text-align: center;
  }
  .bot-features-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .head-workbox{
    margin-bottom: 40px;
  }
  .divider{
    display: flex;
    align-items: center;
    max-width: 30%;
    margin: 3% auto;
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
  .line{
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    border: solid 1px #bac4cd;
  }
  .workbox-section{
    margin-bottom: 6%;
    width: 100%;
  }
  .workbox-container{
    width: 54%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .workbox{
    display: inline-block;
    padding: 10px 2% 4px;
    max-width: 353px;
    max-height: 178px;
    border-radius: 2.6px;
    background-color: rgba(255, 255, 255, 0.9);
    border: solid 1.3px #dee0e6;
  }
  .workbox:hover{
    background-color: rgba(255, 52, 77, 0.06);
    border: solid 1.3px #ff344d;
  }
  .w-header{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .w-content{
     font-size: 18px;
  } 
  .w-icon{
    float: right;
  }
</style>
