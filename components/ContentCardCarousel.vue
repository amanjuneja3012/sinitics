<template>
    <div class="card-container">
        <no-ssr placeholder="Loading...">
            <carousel paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize=5 easing="linear" speed=300 perPage=1>
                <slide>
                    <ActionContent
                        width="50%"
                        :height="height"
                        padding="5%"
                        :title="title"
                        :subtitle="subtitle"
                        :buttons="buttons"
                    >
                    </ActionContent>
                </slide>
                <slide>
                    <ActionContent
                        width="50%"
                        :height="height"
                        padding="5%"
                        :title="title"
                        :subtitle="subtitle"
                        :buttons="buttons"
                    >
                    </ActionContent>
                </slide>
            </carousel>
        </no-ssr>
        <img :src="imageUrl" class="image" :style="{'height': height}"/>
    </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        props: ['title', 'subtitle', 'buttons', 'imageUrl', 'height'],
        components: {
            ActionContent,
            Carousel,
            Slide
        }
    }

</script>


<style scoped>
    h3{
        font-size: 2em;
        color: #1e1e1e;
        font-weight: bold;
        line-height: 1.1em;
    }
    p {
        font-size: 1em;
        color: #1e1e1e;
        padding: 5px 20px;
    }
    .card-container{
        display: flex;
        width: 100%;
        justify-content: center;
        align-content: center;
    }
    .image{
        width: 50%;
    }
    .VueCarousel{
        width: 50%;
        padding: 5% 10%;
        box-sizing:border-box;
    }
    .content-container{
        width: 100% !important;    
        padding: auto !important;
    }
</style>