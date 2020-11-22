<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe67d;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <detail-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></detail-gallary>
    </fade-animation>
  </div>
</template>

<script>
import DetailGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/Fade";

export default {
  name: "DetailBanner",
  components: {
    DetailGallary,
    FadeAnimation
  },
  data() {
    return {
      showGallary: false
    };
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner
    overflow hidden
    height 0
    padding-bottom 55% // ! padding 的百分比 是基于父级元素宽度
    position relative
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #ffffff
        background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            padding 0 .4rem
            line-height .32rem
            margin-top .14rem
            height .32rem
            font-size .24rem
            border-radius .2rem
            background rgba(0,0,0,.8)
            .banner-icon
                font-size .24rem
</style>
