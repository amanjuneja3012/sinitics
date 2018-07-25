<template>
    <div class='is-hidden-touch'>
      <div class='workbox-section' >
        <div class='divider'>
          <div class='circle'>{{leftCard.index}}</div>
          <div class='line' />
          <div class='circle red-circle'>{{rightCard.index}}</div>
        </div>
        <div class='workbox-container'>
          <div class='workbox'>
            <div class='w-header'>{{leftCard.heading}}</div>
            <div class='w-content'>{{leftCard.content}}</div>
            <img :src="leftCard.image" class='w-icon' />
          </div>
          <div class='workbox' v-bind:class="{ 'workbox-hightlight': rightCardHighlight }">
            <div class='w-header'>{{rightCard.heading}}</div>
            <div class='w-content'>{{rightCard.content}}</div>
            <img :src="rightCard.image" class='w-icon' />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
      props: ['leftCard', 'rightCard', 'rightCardHighlight', 'card1', 'card2', 'card3', 'card4', 'card5', 'card6']
    }
</script>