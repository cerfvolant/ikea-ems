<template>
  <div class="nav-wrap1">
    <div class="nav-left1">
      <span class="nav-left1-text">
        宜家统一环境监控平台
        <!--<span> — {{ this.$route.query.userId }}</span>-->
        <span> — {{ navCurrName }}</span>
      </span>
    </div>
    <div class="nav-right1">
      <svg-icon icon-class="user"/>
      <span class="nav-right1-text">宜家，<span>创造美好生活</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavWrap1',
  data () {
    return {
      navCurrName: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/index";
.nav-wrap1 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: $bgWhite;
  padding: 0 10px;
  z-index: 999;
  .nav-left1 {
    height: 100%;
    line-height: 50px;
    float: left;
    .nav-left1-text {
      color: #6b6b6b;
      font-size: 18px;
      span {
        color: $themeColor;
        font-size: 14px;
      }
    }
  }
  .nav-right1 {
    height: 100%;
    line-height: 50px;
    /*display: inline-flex;*/
    /*align-items: center;*/
    font-size: 25px;
    float: right;
    color: $themeColor;
    .nav-right1-text {
      font-size: 16px;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
}
</style>
