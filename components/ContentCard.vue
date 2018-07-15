<template>
    <div class="card-container" :style="{
    'flex-direction': showContentOnLeft === 'true'?'row':'row-reverse'
  }">
        <ActionContent
            v-if="showContentOnLeft === 'true'"
            width="50%"
            :height="height"
            :header='header'
            :title="title"
            :subtitle="subtitle"
            :buttons="buttons"
            :externalComponent="externalComponent"
            :inputBox='inputBox'
            :listTypes='listTypes'
        >
        </ActionContent>
        <ActionContent
                v-else
                width="50%"
                padding="4% 9.4% 6% 5.7%"
                :height="height"
                :header='header'
                :title="title"
                :subtitle="subtitle"
                :buttons="buttons"
                :externalComponent="externalComponent"
                :inputBox='inputBox'
                :listTypes='listTypes'
        >
        </ActionContent>
        <div v-if="!rightComponent" class="image" :style="{'height': height, 'background-image': 'url('+imageUrl+')'}"></div>
        <BudgetCalculator v-if="rightComponent" />
    </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    import BudgetCalculator from '~/components/BudgetCalculator'
    export default {
        props: ['padding', 'title', 'header', 'subtitle', 'buttons', 'showContentOnLeft', 'imageUrl', 'height', 'externalComponent', 'rightComponent', 'inputBox', 'listTypes'],
        components: {
            ActionContent,
            BudgetCalculator
        },
        created: function () {
            console.log(this.showContentOnLeft)
        }
    }

</script>


<style scoped>
    h3{
        font-weight: 700;
        font-size: 2.12em;
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
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .content-container{
        padding: 12% 6.4% 12% 9.4%;
    }
    @media only screen and (max-width: 768px){
        .card-container{
            flex-direction: column-reverse !important;
        }
        .card-container .image{
            /* background-position: right; */
            width: 100% !important;
            height: 340px !important;
        }
        .card-container .left-image{
            background-position: left !important;
        }
        .card-container .content-container{
            padding: 4% !important;
            width: 100% !important;
            height: auto !important;
            text-align: center !important;
        }
    }
</style>