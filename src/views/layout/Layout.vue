<template>
  <div id="layout">
    <nav-wrap1/>
    <app-main/>
  </div>
</template>

<script>
import { NavWrap1, AppMain } from './components'
export default {
  name: 'Layout',
  components: {
    NavWrap1,
    AppMain
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
</style>
