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
                :externalComponent="externalComponent"

        >
        </ActionContent>
        <div class="image" :style="{'height': height,'background-size': 'cover','background-image': 'url('+imageUrl+')'}"></div>
    </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    export default {
        props: ['title', 'subtitle', 'buttons', 'showContentOnLeft', 'imageUrl', 'height', 'externalComponent'],
        components: {
            ActionContent
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
    .content-container{
        padding:5% 10% !important;
    }
</style>