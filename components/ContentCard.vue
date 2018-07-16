<template>
    <div class="card-container is-hidden-touch" v-if="$device.isDesktop" :style="{
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
    <div v-else-if="$device.isMobile" class="card-container is-hidden-desktop mobileContentCard" :style="{
    'flex-direction': showContentOnLeft === 'true'?'column-reverse':'column-reverse'
  }">
        <ActionContent
            v-if="showContentOnLeft === 'true'"
            width="100%"
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
                width="100%"
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
        <div v-if="!rightComponent" class="image" :style="{'height': '340px','background-size': 'contain', 'background-position': (showContentOnLeft === 'true')?'right':'left', 'background-repeat': 'no-repeat', 'background-image': 'url('+imageUrl+')'}"></div>
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
    .mobileContentCard .image{
        width:100%;
    }
</style>