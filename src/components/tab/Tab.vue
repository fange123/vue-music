<template>
    <div class="tab">
      <router-link class="item" tag="div" to="/Recommend">
        <span>推荐</span>
      </router-link>
      <router-link class="item" tag="div" to="/Rank">
        <span>排行</span>
      </router-link>
      <router-link class="item" tag="div" to="/Singer">
        <span>歌手</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Tab"
    }
</script>

<style scoped lang="stylus">
 @import "~common/stylus/variable"
  .tab
    display flex
    height 44px
    line-height 44px
    width 100%
    font-size $font-size-medium
    background $color-theme
    .item
      flex 1
      text-align center
      color $color-theme-l
      span
        padding-bottom 3px
      &.router-link-active
        span
          font-weight bold
          color $color-theme-l
          border-bottom 2px solid $color-theme-l

</style>
