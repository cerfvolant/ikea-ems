<template>
  <div id="siteMap">
    <el-menu
      :default-active="$route.path"
      background-color="#eeeeee"
      text-color="#626262"
      active-text-color="#81dd31" class="sidebar">
      <el-menu-item class="sidebar-item"><span class="sidebar-inner">站点A</span></el-menu-item>
      <el-menu-item class="sidebar-item"><span class="sidebar-inner">站点B</span></el-menu-item>
      <el-menu-item class="sidebar-item"><span class="sidebar-inner">站点C</span></el-menu-item>
    </el-menu>
    <div class="main">
      <img src="../../assets/img/drawing1.png" alt="">
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: 'SiteMap',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.sidebar {
  width: 180px;
  height: 100%;
  position: fixed;
  top: 75px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .sidebar-item {
    text-align: center;
    .sidebar-inner {
      background-color: #eeeeee;
      padding: 8px 17%;
      border-radius: 15px;
      border: 1px solid #626262;
    }
    &.is-active {
      .sidebar-inner {
        background-color: #ffffff;
        border-color: #ffffff;
      }
    }
  }
}
.main {
  float: left;
  margin-left: 180px;
}
</style>
