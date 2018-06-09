<template>
    <div class="card-container" :style="{
    'flex-direction': showContentOnLeft === 'true'?'row':'row-reverse'
  }">
        <ActionContent
                width="50%"
                :height="height"
                padding="5%"
                :title="title"
                :subtitle="subtitle"
                :buttons="buttons"

        >
        </ActionContent>
        <img :src="imageUrl" class="image" :style="{'height': height}"/>
    </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    export default {
        props: ['title', 'subtitle', 'buttons', 'showContentOnLeft', 'imageUrl', 'height'],
        components: {
            ActionContent
        }
    }

</script>


<style scoped>
    h3{
        font-size: 48px;
        color: #1e1e1e;
    }
    p {
        font-size: 22px;
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

</style>