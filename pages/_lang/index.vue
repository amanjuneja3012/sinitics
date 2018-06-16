<template>
  <div>
    <ContentCard
            title="Are You speaking your <span class='red'>Customer's</span> language"
            subtitle="Instant multilingual support. Higher customer satisfaction"
            :buttons="buttons.block1"
            showContentOnLeft="true"
            imageUrl="images/page1@3x.png"
            height="620px"
    >
    </ContentCard>
    <ContentCard
            title="Finally, <span class='red'>Bots for Everyone</span>"
            subtitle="Build, edit and deploy multilingual bots without coding"
            :buttons="buttons.block2"
            showContentOnLeft="false"
            imageUrl="images/page2@3x.png"
            height="610px"
    >
    </ContentCard>
    <ContentCardCarousel
            title="60% customer support <span class='red'>Automation</span> with 11% higher Chinese accuracy from SiniticAI"
            subtitle="Build, edit and deploy multilingual bots without coding"
            :buttons="buttons.block2"
            imageUrl="images/page3@3x.png"
            height="550px"
    >
    </ContentCardCarousel>
    <div class="bot-features-container">
      <p class="feature-heading">Build & Manage <span class="red">Hybrid Chatbots</span></p>
      <div class="features-container">
        <BotFeatureCard
                width="323px"
                height="312px"
                padding="35px"
                iconUrl="images/feature1.png"
                title="Onsite Hosting"
                subtitle="Satisfy corporate requirements to host locally."
        >
        </BotFeatureCard>
        <BotFeatureCard
                width="323px"
                height="312px"
                padding="35px"
                iconUrl="images/feature2.png"
                title="Human Takeover"
                subtitle="Takeover complex conversations to achieve customer satisfaction."
        >
        </BotFeatureCard>
        <BotFeatureCard
                width="323px"
                height="312px"
                padding="35px"
                iconUrl="images/feature3.png"
                title="Chat Structuring"
                subtitle="SiniticAI™ rapidly structures raw chat history to build bots."
        >
        </BotFeatureCard>
      </div>
      <Button
              text="See All Features"
              backgroundColor="#ff003c"
              color="white">
      </Button>
    </div>
    <div >

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
        })
    }
</script>

