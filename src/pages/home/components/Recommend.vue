<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li v-for="item of list" :key="item.id" class="item border-bottom">
        <img :src="item.imgUrl" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.recommend-title
    line-height .8rem
    background #eeeeee
    text-indent .2rem
    margin-top .2rem
.item
    overflow hidden
    display flex
    height 1.9rem
    // background red
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()
        .item-button
            background #ff9300
            padding .05rem .18rem
            border-radius .1rem
            margin-top .16rem
            color #fff
            line-height .4rem
</style>
