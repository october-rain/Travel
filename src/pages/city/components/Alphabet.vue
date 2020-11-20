<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      @touchmove="handleTouchMove"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters; // ["A", "B", "C" ...]
    }
  },
  methods: {
    handleLetterClick(e) {
      // console.log(e.target.innerText);
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const startY = this.startY;
          // console.log(startY);
          const touchY = e.touches[0].clientY - 79;
          // console.log(touchY);
          const index = Math.floor((touchY - startY) / 20);
          // console.log(index);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
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
