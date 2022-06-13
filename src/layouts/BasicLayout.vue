<template>
  <div id="main">
    <nav-bar @click-left="onBack" @click-right="onClickRight" safe-area-inset-top :left-arrow="true">
      <template #title>
        <template>标题</template>
      </template>
      <template #right>
        <van-icon name="chat-o" />
      </template>
    </nav-bar>
    <router-view/>
    <popup v-model="showSideMenu">内容</popup>
  </div>
</template>

<script>
import {NavBar, Popup, Icon as VanIcon} from 'vant'

export default {
  name: "BasicLayout",
  components: {
    NavBar,
    Popup,
    VanIcon
  },
  created() {
  },
  destroyed() {
  },
  watch: {
  },
  data() {
    return {
      showBackButton: false,
      showSideMenu: false,
      backUrl: null,
      title: null,
      rightMenu: null,
      rightMenuTemplate: {
        type: 'icon', // icon OR text
        name: '',     // icon name OR text name
        path: '',     // route path: /user/index
      }
    }
  },
  methods: {
    onBack() {
    },
    onClickRight() {
    }
  }
}
</script>

<style scoped>
#main {
  min-height: 100vh;
}

.fx-icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.right-icon {
  width: 1.6em;
  height: 1.6em;
}
</style>
