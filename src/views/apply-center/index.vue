<template>
  <div class="apply-center">
    <span class="current-title">应用中心</span>
    <el-row :gutter="25" class="app-center-wrap">
      <el-col
        v-for="(item,index) in arr"
        :key="item.object"
        :span="8" class="app-center-block"
        @click.native="skip2page(index)">
        <div class="app-center-block-inner">
          <svg-icon
            :icon-class="item.icon"
            class="inner-icon"/>
          <span class="inner-text">{{item.text}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'apply-center',
  data () {
    return {
      arr: [
        {
          icon: 'user',
          text: '城市污水排放监控',
          platePage: 'WasteWater'
        },
        {
          icon: 'user',
          text: '工业大气排放监控',
          platePage: ''
        }
      ]
    }
  },
  methods: {
    skip2page (index) {
      this.$router.push({
        name: this.arr[index].platePage
      })
    }
  }
}
</script>

<style lang="scss">
.apply-center {
  margin-top: 50px;
}
@import "../../styles/index";
.app-center-wrap {
  padding: 0 40px;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  .app-center-block {
    margin:10px 0;
    .app-center-block-inner {
      cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0);
      background-color: #ffffff;
      border-radius: 5px;
      transition: transform .4s, opacity 0.3s;
      &:hover {
        transform: translate(0, -5px);
      }
      .inner-icon {
        width: 75%;
        /*font-size: 120px;*/
        margin: 40px auto 30px;
        display: block;
        padding: 10px 0 15px;
        border-radius: 3px;
        height: 160px;
      }
      .inner-text {
        display: block;
        text-align: center;
        padding-bottom: 25px;
      }
    }
    &:first-of-type {
      @include serial-css(#28d8c3);
    }
    &:nth-child(2) {
      @include serial-css(#a6daff);
    }
    &:nth-child(3) {
      @include serial-css(#ff5c82);
    }
    &:nth-child(4) {
      @include serial-css(#9a57ff);
    }
    &:nth-child(5) {
      @include serial-css(#ffe867);
    }
    &:nth-child(6) {
      @include serial-css(#7afffd);
    }
  }
}
</style>
