<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe666;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{ this.$store.state.city }} -->
        {{ this.city }}
        <!-- {{ this.doubleCity }} -->
        <span class="iconfont arrow-icon">&#xe686;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "HomeHeader",
  // props: {
  //   city: String
  // }
  computed: {
    ...mapState(["city"]),
    ...mapGetters(["doubleCity"])
  }
};
</script>

<style lang="stylus" type="text/stylus" scoped>
// ~@ 表示src 目录
// @import '~@/assets/style/varibles.styl'
@import '~style/varibles.styl';

.header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff

    .header-left
        width .64rem
        float right
        .back-icon
            text-align center
            font-size .4rem
            padding-left 0.15rem

    .header-input
        flex 1
        background #fff
        border-radius 0.1rem
        margin-top .12rem
        height 0.62rem
        margin-left .2rem
        color #ccc
        height 0.64rem
        line-height 0.64rem
        padding-left 0.2rem

    .header-right
        min-width 1.04rem
        padding 0 .1rem
        float right
        text-align center
        color white
        .arrow-icon
            font-size .24rem
            margin-left .1rem
</style>
