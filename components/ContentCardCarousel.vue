<template>
    <div class="card-container carousel-card-container">
        <no-ssr placeholder="Loading...">
            <carousel paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize=5 easing="linear" :speed=300 :perPage=1 >
                <slide v-for="(slideObj, index) in slides" :key="index">
                    <ActionContent
                        width="50%"
                        :height="height"
                        padding="5%"
                        :title="slideObj.title"
                        :subtitle="slideObj.subtitle"
                        :buttons="slideObj.buttons"
                    >
                    </ActionContent>
                </slide>
            </carousel>
        </no-ssr>
        <img :src="image" class="image" :style="{'height': height}"/>
    </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        props: ['image','slides','height'],
        components: {
            ActionContent,
            Carousel,
            Slide
        }
    }

</script>