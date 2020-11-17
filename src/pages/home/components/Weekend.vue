<template>
  <div>
    <div class="weekend-title">周末去哪</div>
    <ul>
      <li v-for="item of list" :key="item.id" class="item border-bottom">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.weekend-title
    line-height .8rem
    background #eeeeee
    text-indent .2rem
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
        width 100%
.item-info
    padding .1rem
    .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
    .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
</style>
