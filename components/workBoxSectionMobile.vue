<template>
  <div class="workbox-section" >
    <div class="workbox-container">
      <div class="workbox">
        <div class="circle">{{ card1.index }}</div>
        <div class="w-header">{{ card1.heading }}</div>
        <div class="w-content">{{ card1.content }}</div>
        <img 
          :src="card1.image" 
          class="w-icon" >
      </div>
      <div class="workbox workbox-hightlight">
        <div class="circle">{{ card2.index }}</div>
        <div class="w-header">{{ card2.heading }}</div>
        <div class="w-content">{{ card2.content }}</div>
        <img 
          :src="card2.image" 
          class="w-icon" >
      </div>
      <div class="workbox">
        <div class="circle">{{ card3.index }}</div>
        <div class="w-header">{{ card3.heading }}</div>
        <div class="w-content">{{ card3.content }}</div>
        <img 
          :src="card3.image" 
          class="w-icon" >
      </div>
      <div class="workbox">
        <div class="circle">{{ card4.index }}</div>
        <div class="w-header">{{ card4.heading }}</div>
        <div class="w-content">{{ card4.content }}</div>
        <img 
          :src="card4.image" 
          class="w-icon" >
      </div>
      <div class="workbox">
        <div class="circle">{{ card5.index }}</div>
        <div class="w-header">{{ card5.heading }}</div>
        <div class="w-content">{{ card5.content }}</div>
        <img 
          :src="card5.image" 
          class="w-icon" >
      </div>
      <div class="workbox workbox-hightlight">
        <div class="circle">{{ card6.index }}</div>
        <div class="w-header">{{ card6.heading }}</div>
        <div class="w-content">{{ card6.content }}</div>
        <img 
          :src="card6.image" 
          class="w-icon" >
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['card1', 'card2', 'card3', 'card4', 'card5', 'card6']
    };
</script>
