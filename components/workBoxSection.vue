<template>
  <div class='workbox-section'>
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
      <div class='workbox'>
        <div class='w-header'>{{rightCard.heading}}</div>
        <div class='w-content'>{{rightCard.content}}</div>
        <img :src="rightCard.image" class='w-icon' />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['leftCard', 'rightCard']
    }
</script>