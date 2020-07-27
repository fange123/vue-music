<template>
  <div id="app">
    <MusicHeader></MusicHeader>
    <Tab></Tab>
  </div>
</template>

<script>
  import MusicHeader from "components/music-header/MusicHeader"
  import Tab from "components/tab/Tab"
export default {
  name: 'App',
  components:{
    MusicHeader,
    Tab
  }

}
</script>

<style>


</style>
