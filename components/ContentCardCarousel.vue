<template>
    <div>
        <div class="card-container carousel-card-container is-hidden-touch">
            <no-ssr placeholder="Loading...">
                <carousel paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize=5 easing="linear" :speed=300 :perPage=1 >
                    <slide v-for="(slideObj, index) in slides" :key="index">
                        <ActionContent
                            width="50%"
                            :height="height"
                            padding="5%"
                            :title="slideObj.title"
                            inputBox="true"
                            sendText="Get Case Study"
                            placeHolder="Enter email Address"
                        >
                        </ActionContent>
                    </slide>
                </carousel>
            </no-ssr>
            <div class="image" :style="{'height': height,'background-size': 'contain', 'background-position': 'center', 'background-repeat': 'no-repeat', 'background-image': 'url('+image+')'}"></div>
            <!-- <img :src="image" class="image" :style="{'height': height}"/> -->
        </div>
        <div class="card-container carousel-card-container mobileContentCard is-hidden-desktop" >
            <no-ssr placeholder="Loading...">
                <carousel paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize=5 easing="linear" :speed=300 :perPage=1 >
                    <slide v-for="(slideObj, index) in slides" :key="index">
                        <ActionContent
                            width="100%"
                            :height="height"
                            padding="5%"
                            :title="slideObj.title"
                            inputBox="true"
                            sendText="Get Case Study"
                            placeHolder="Enter email Address"
                        >
                        </ActionContent>
                    </slide>
                </carousel>
            </no-ssr>
            <div class="image" :style="{'height': '300px','background-size': 'contain', 'background-position': 'center', 'background-repeat': 'no-repeat', 'background-image': 'url('+image+')'}"></div>
            <!-- <img :src="image" class="image" :style="{'height': height}"/> -->
        </div>
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
    .carousel-card-container.mobileContentCard .VueCarousel .VueCarousel-pagination{
        position: absolute;
        top: -10%;
        left: 0%;
    }
</style>