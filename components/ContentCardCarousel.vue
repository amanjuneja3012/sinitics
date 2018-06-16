<template>
    <div class="card-container carousel-card-container">
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