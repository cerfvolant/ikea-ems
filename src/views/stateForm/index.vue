<template>
  <div class="state-form">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick">
      <el-tab-pane
        v-for="item in formArr"
        :key="item.object"
        :label="item.formTitle"
        :name="item.formSerial">
        <div class="form">
          <div class="form-title">{{ item.formTitle }}</div>
          <div class="form-content"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'StateForm',
  data () {
    return {
      activeName: 'first',
      formArr: [
        {
          formTitle: '告警报表',
          formSerial: 'first'
        },
        {
          formTitle: '指标数据报表',
          formSerial: 'second'
        },
        {
          formTitle: '自定义数据报表',
          formSerial: 'third'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/index";
// el-tab
.el-tabs__nav-wrap {
  &::after {
    background-color: transparent;
  }
  .el-tabs__nav-scroll {
    .el-tabs__nav {
      .el-tabs__active-bar {
        height: 0;
      }
      .el-tabs__item {
        margin: 15px 10px 0;
        border: 1px solid #727272;
        padding: 0 10px;
        border-radius: 20px;
        height: 32px;
        line-height: 32px;
        color: #747474;
        &:hover, &.is-active {
          color: #8bdf45;
          background-color: $bgWhite;
          border-color: transparent;
        }
      }
    }
  }
}
.state-form {
  padding: 0 15px 0;
}
.form {
  padding: 0 10px;
  margin: 20px 10px;
  background-color: $bgWhite;
  border-radius: 5px;
  .form-title {
    padding: 5px 0;
    border-bottom: 1px solid #f5f5f5;
  }
  .form-content {
    padding: 15px;
  }
}
</style>
