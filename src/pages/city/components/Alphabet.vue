<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet"
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    // background red
    display flex
    flex-direction column
    justify-content center
    .item
        text-align center
        line-height .4rem
        color $bgColor
</style>
