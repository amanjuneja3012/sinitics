<template>
    <div class="card-container" :style="{
    'flex-direction': showContentOnLeft === 'true'?'row':'row-reverse'
  }">
        <ActionContent
                width="50%"
                :height="height"
                padding="5%"
                :header='header'
                :title="title"
                :subtitle="subtitle"
                :buttons="buttons"
                :externalComponent="externalComponent"
                :inputBox='inputBox'
                :listTypes='listTypes'
        >
        </ActionContent>
        <div v-if="!rightComponent" class="image" :style="{'height': height,'background-size': 'cover','background-image': 'url('+imageUrl+')'}"></div>
        <BudgetCalculator v-if="rightComponent" />
    </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    import BudgetCalculator from '~/components/BudgetCalculator'
    export default {
        props: ['title', 'header', 'subtitle', 'buttons', 'showContentOnLeft', 'imageUrl', 'height', 'externalComponent', 'rightComponent', 'inputBox', 'listTypes'],
        components: {
            ActionContent,
            BudgetCalculator
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
        padding:12% 9.4% !important;
    }
</style>