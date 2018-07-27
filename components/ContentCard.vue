<template>
  <div class="card-container">
    <div 
      :style="{
        'flex-direction': showContentOnLeft === true?'row':'row-reverse'
      }" 
      class="is-hidden-touch w100 flex">
      <ActionContent
        v-if="showContentOnLeft === true"
        :height="height"
        :header="header"
        :title="title"
        :subtitle="subtitle"
        :buttons="buttons"
        :click-handlers="clickHandlers"
        :external-component="externalComponent"
        :input-box="inputBox"
        :list-types="listTypes"
        width="50%"
      />
      <ActionContent
        v-else
        :height="height"
        :header="header"
        :title="title"
        :subtitle="subtitle"
        :buttons="buttons"
        :external-component="externalComponent"
        :input-box="inputBox"
        :list-types="listTypes"
        width="50%"
        padding="4% 9.4% 6% 5.7%"
      />
      <div 
        v-if="!rightComponent" 
        :style="{
          'height': height
        }"
        class="image">
        <img
          :src="imageUrl" 
          :class="showContentOnLeft ? 'right' : 'left'"
          class="image-inner">
      </div>
      <BudgetCalculator v-if="rightComponent" />
    </div>
    <div 
      :style="{
        'flex-direction': showContentOnLeft === true?'column-reverse':'column-reverse'
      }" 
      class="is-hidden-desktop mobileContentCard w100 flex">
      <ActionContent
        v-if="showContentOnLeft === true"
        :height="height"
        :header="header"
        :title="title"
        :subtitle="subtitle"
        :buttons="buttons"
        :external-component="externalComponent"
        :input-box="inputBox"
        :list-types="listTypes"
        width="100%"
      />
      <ActionContent
        v-else
        :height="height"
        :header="header"
        :title="title"
        :subtitle="subtitle"
        :buttons="buttons"
        :external-component="externalComponent"
        :input-box="inputBox"
        :list-types="listTypes"
        width="100%"
        padding="4% 9.4% 6% 5.7%"
      />
      <div 
        v-if="!rightComponent" 
        :style="{'height': '340px','background-size': 'contain', 'background-position': (imageCenter === true)?'center':((showContentOnLeft === true)?'top right':'top left'), 'background-repeat': 'no-repeat', 'background-image': 'url('+imageUrl+')'}" 
        class="image"/>
      <BudgetCalculator v-if="rightComponent" />
    </div>
  </div>
</template>

<script>
    import ActionContent from '~/components/ActionContent';
    import BudgetCalculator from '~/components/BudgetCalculator';
    export default {
        components: {
            ActionContent,
            BudgetCalculator
        },
        props: ['padding', 'title', 'header', 'subtitle', 'buttons', 'clickHandlers', 'showContentOnLeft', 'imageUrl', 'imageOffset', 'height', 'externalComponent', 'rightComponent', 'inputBox', 'listTypes', 'imageCenter'],
        created: function () {
            console.log(this.showContentOnLeft);
        }
    };

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