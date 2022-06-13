<template>
  <van-config-provider>
    <div id="app">
      <router-view/>
    </div>
  </van-config-provider>
</template>

<script>
import { ConfigProvider } from 'vant'

export default {
  name: 'App',
  components: {
    [ConfigProvider.name]: ConfigProvider
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
</style>
