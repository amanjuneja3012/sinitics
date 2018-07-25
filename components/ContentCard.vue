<template>
    <div class="card-container">
        <div class="is-hidden-touch w100 flex" :style="{
        'flex-direction': showContentOnLeft === true?'row':'row-reverse'
      }">
            <ActionContent
                v-if="showContentOnLeft === true"
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
            <div v-if="!rightComponent" 
                class="image"
                :style="{
                    'height': height
                }">
                <img
                    :src="imageUrl" 
                    class="image-inner"
                    :class="showContentOnLeft ? 'right' : 'left'"/>
            </div>
            <BudgetCalculator v-if="rightComponent" />
        </div>
        <div class="is-hidden-desktop mobileContentCard w100 flex" :style="{
        'flex-direction': showContentOnLeft === true?'column-reverse':'column-reverse'
      }">
            <ActionContent
                v-if="showContentOnLeft === true"
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
            <div v-if="!rightComponent" class="image" :style="{'height': '340px','background-size': 'contain', 'background-position': (imageCenter === true)?'center':((showContentOnLeft === true)?'right':'left'), 'background-repeat': 'no-repeat', 'background-image': 'url('+imageUrl+')'}"></div>
            <BudgetCalculator v-if="rightComponent" />
        </div>
    </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    import BudgetCalculator from '~/components/BudgetCalculator'
    export default {
        props: ['padding', 'title', 'header', 'subtitle', 'buttons', 'showContentOnLeft', 'imageUrl', 'imageOffset', 'height', 'externalComponent', 'rightComponent', 'inputBox', 'listTypes', 'imageCenter'],
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
        /* width: 1440px; */
        max-width: 1440px;
        margin: 0 auto 50px;
        justify-content: center;
        align-content: center;
    }
    .mobileContentCard.card-container{
        margin-bottom:50px;
    }
    .image{
        width: 50%;
        background-size: contain;
        background-position: top center;
        background-repeat: no-repeat;
        position: relative;
    }
    .image-inner {
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute; 
        height: 100%;
        max-width: inherit;
        width: auto;
    }
    .image-inner.left {
        background-position: top right;
        right: 0;
    }
    .image-inner.right {
        background-position: top left;
        left: 0;
    }
    .content-container{
        padding: 12% 6.4% 12% 9.4%;
    }
    .mobileContentCard .image{
        width:100%;
    }
</style>