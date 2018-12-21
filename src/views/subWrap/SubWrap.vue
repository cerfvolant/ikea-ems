<template>
  <div id="waste-water">
    <div class="nav-wrap2">
      <div class="nav-left2" @click="back2prev()">
        <i class="el-icon-arrow-left"></i>{{ previousName }}
      </div>
      <div class="nav-right2">
        <div
          v-for="(item, index) in navTab"
          :key="item.object"
          :class="{ active : index === num }"
          class="nav-right2-tab"
          @click="tabItem(item, index)">
          <svg-icon :icon-class="item.tabIcon"/>
          <span>{{ item.tabName }}</span>
        </div>
        <el-dropdown class="badge nav-right2-tab">
          <el-badge class="tab-warning" :value="200" :max="9">
            <svg-icon icon-class="warning"></svg-icon>
          </el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <svg-icon class="tip-icon" icon-class="tipIcon"></svg-icon>
              烟感检测到烟雾
            </el-dropdown-item>
            <el-dropdown-item>
              <svg-icon class="tip-icon" icon-class="tipIcon"></svg-icon>
              温度超过正常水平
            </el-dropdown-item>
            <el-dropdown-item>
              <svg-icon class="tip-icon" icon-class="tipIcon"></svg-icon>
              温度超过正常水平
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="avatar-container nav-right2-tab" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
            <i class="el-icon-caret-bottom"/>
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
              <el-dropdown-item>
                个人设置
              </el-dropdown-item>
            </a>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <sub-main/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { SubMain } from './components'
export default {
  name: 'WasteWater',
  components: {
    SubMain
  },
  data () {
    return {
      previousName: '应用中心',
      navTab: [
        {
          tabIcon: 'user',
          tabName: '污水监控',
          page: 'SiteMap'
        },
        {
          tabIcon: 'user',
          tabName: '报表统计',
          page: 'StateForm'
        },
        {
          tabIcon: 'user',
          tabName: '系统设置',
          page: 'Settings'
        }
      ],
      num: 0
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  methods: {
    back2prev () {
      // this.$router.back(-1)
      this.$router.push({ name: 'ApplyCenter' })
    },
    tabItem (item, index) {
      this.num = index
      this.$router.push({
        name: this.navTab[index].page
      })
    },
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/index";
.nav-wrap2 {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  height: 25px;
  background-color: $bgWhite;
  padding: 0 10px;
  color: #626262;
  z-index: 999;
  .nav-left2 {
    height: 100%;
    line-height: 25px;
    float: left;
    cursor: pointer;
  }
  .nav-right2 {
    height: 100%;
    line-height: 25px;
    float: right;
    .nav-right2-tab {
      cursor: pointer;
      float: left;
      padding: 0 15px;
      &.active {
        color: $themeColor;
      }
    }
    .badge {
      height: 100%;
      .tab-warning {
        cursor: pointer;
        /*font-size: 17px;*/
        .el-badge__content {
          height: 14px;
          line-height: 14px;
          border: none;
          background-color: $warningRed;
          &.is-fixed {
            top: 4px;
            right: 5px;
          }
        }
      }
    }
    .avatar-container {
      height: 92%;
      margin-right: 30px;
      padding-right: 0;
      padding-left: 20px;
      .avatar-wrapper {
        height: 100%;
        display: inline-flex;
        align-items: center;
        .user-avatar {
          cursor: pointer;
          /*width: 40px;*/
          /*height: 40px;*/
          border-radius: 50%;
          height: 90%;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          /*top: 25px;*/
          font-size: 12px;
        }
      }
    }
  }
}
.content {
  margin-top: 75px;
}
</style>
