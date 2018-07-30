<template>
  <div>
    <div class="card-container carousel-card-container is-hidden-touch">
      <no-ssr placeholder="Loading...">
        <carousel 
          :pagination-size="5" 
          :speed="300" 
          :per-page="1" 
          pagination-active-color="#42b983" 
          pagination-color="#b2ebd1" 
          easing="linear" >
          <slide 
            v-for="(slideObj, index) in slides" 
            :key="index">
            <ActionContent
              :height="height"
              :title="slideObj.title"
              width="50%"
              padding="5%"
              input-box="true"
              send-text="$t('home.contentCardCarousel.sendText')"
              place-holder="$t('home.contentCardCarousel.placeholder')"
            />
          </slide>
        </carousel>
      </no-ssr>
      <div 
        :style="{'height': height,'background-size': 'contain', 'background-position': 'center', 'background-repeat': 'no-repeat', 'background-image': 'url('+image+')'}" 
        class="image"/>
        <!-- <img :src="image" class="image" :style="{'height': height}"/> -->
    </div>
    <div class="card-container carousel-card-container mobileContentCard is-hidden-desktop" >
      <no-ssr placeholder="Loading...">
        <carousel 
          :pagination-size="5" 
          :speed="300" 
          :per-page="1" 
          pagination-active-color="#42b983" 
          pagination-color="#b2ebd1" 
          easing="linear" >
          <slide 
            v-for="(slideObj, index) in slides" 
            :key="index">
            <ActionContent
              :height="height"
              :title="slideObj.title"
              width="100%"
              padding="5%"
              input-box="true"
              send-text="$t('home.contentCardCarousel.sendText')"
              place-holder="$t('home.contentCardCarousel.placeholder')"
            />
          </slide>
        </carousel>
      </no-ssr>
      <div 
        :style="{'height': '300px','background-size': 'contain', 'background-position': 'center', 'background-repeat': 'no-repeat', 'background-image': 'url('+image+')'}" 
        class="image"/>
        <!-- <img :src="image" class="image" :style="{'height': height}"/> -->
    </div>
  </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        components: {
            ActionContent,
            Carousel,
            Slide
        },
        props: ['image','slides','height'],
    };

</script>

<style scoped>
    .card-container.mobileContentCard{
        display: flex;
        width: 100%;
        justify-content: center;
        align-content: center;
        flex-direction:column-reverse;
        margin-bottom:50px;
    }
    .mobileContentCard .image{
        width:100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .mobileContentCard .VueCarousel{
        width:100%;
        margin-left: 0%;
    }
    .carousel-card-container {
        max-width: 1440px;
        margin: 0 auto;
    }
    .carousel-card-container.mobileContentCard .VueCarousel .VueCarousel-pagination{
        position: absolute;
        top: -10%;
        left: 0%;
    }
</style>