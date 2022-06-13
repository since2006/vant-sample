<template>
  <div>
    <van-row>
      <van-col span="24">
        <van-grid :column-num="2">
          <van-grid-item icon="photo-o" text="Dialog测试" @click="testDialog"/>
          <van-grid-item icon="photo-o" text="Dialog测试" @click="testDialog"/>
        </van-grid>
      </van-col>
    </van-row>

    <van-divider :style="{borderColor:'#1989fa', padding:'0 16px'}"><span style="color:#e25555;font-size:20px;margin-left:4px;">&#9829;</span></van-divider>
    <van-row>
      <van-col span="24">
        <div class="versions">
          <div>Vue: {{ vueVersion }}</div>
          <div>Vant: {{ vantVersion }}</div>
          <div>Build: {{ buildVersion }}</div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import {Card, Cell, Col, Dialog, Divider, Grid as VanGrid, GridItem as VanGridItem, Row, Skeleton} from 'vant'
import BasicLayout from '@/layouts/BasicLayout'
import {version as VueVersion} from 'vue'
import {version as VantVersion} from 'vant'

export default {
  name: "DashboardPage",
  components: {
    BasicLayout,
    VanGrid,
    VanGridItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Card.name]: Card,
    [Divider.name]: Divider,
    [Cell.name]: Cell,
    [Skeleton.name]: Skeleton,
  },
  data() {
    return {
      vueVersion: VueVersion,
      vantVersion: VantVersion,
      buildVersion: BUILD_VERSION,
    }
  },
  created() {
  },
  methods: {
    testDialog() {
      Dialog.confirm({title: '是否退出系统？'}).then(() => {
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>
.versions {
  margin-top: 12px;
  text-align: center;
  color: #a8a8a8;
  font-size: 12px;
}
</style>
