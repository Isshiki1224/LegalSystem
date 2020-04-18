<template>
  <div>
    <div class="banner-img">
      <img src="../../assets/picture/ban2.jpg">
    </div>
    <div class="case-list wow fadeInDown" data-wow-duration="2s">
      <ul class="w11">
        <li :class="{active2 : item.path==current}" @click="getClass(item.path)" v-for="(item) in serviceObj"
          :key="item.id" style="width: 280px;">
          <router-link to="">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="service-message" :class="{current : item.path==current}" v-for="(item,index) in serviceObj" :key="index">
      <div class="service-all w11" >
        <div class="service-all_nav">
          <p style="text-align: left; line-height: 4em;" v-for="(message,index) in item.message" :key="index"><span
              style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><span
                style="font-size: 20px;">{{message}}</span></span></p>
          <p style="text-align:center"><br></p>
          <p><br></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/index.css'
  import '@/assets/css/animate.css'
  export default {
    data() {
      return {
        serviceObj: [{
            id: 0,
            path: '/service-0',
            name: '风险评估',
            message: [
              '风险评估领域：',
              '1、安全生产风险分析与评估',
              '2、隐患排查治理体系建设',
              '3、事故隐患清单编制'
            ]
          },
          {
            id: 1,
            path: '/service-1',
            name: '安全研究',
            message: [
              '安全研究领域：',
              '1、安全管理相关研究',
              '2、安全管理制度编制',
              '3、安全生产职责研究',
              '4、安全生产综合统计分析',
              '5、其他重点专项研究'
            ]
          },
          {
            id: 2,
            path: '/service-2',
            name: '咨询服务',
            message: [
              '咨询服务领域：',
              '1、安全生产辅助监督检查',
              '2、安全生产专家检查',
              '3、安全状况评估',
              '4、安全生产标准化建设辅导'
            ]
          },
          {
            id: 3,
            path: '/service-3',
            name: '应急咨询',
            message: [
              '应急咨询领域：',
              '1、突发事件应急预案编制',
              '2、应急演练策划与评估',
              '3、应急管理专项研究',
              '4、应急能力评估'
            ]
          },
          {
            id: 4,
            path: '/service-4',
            name: '软件开发',
            message: [
              '软件开发领域：',
              '1、交通运输安全生产体系研究及信息化平台应用软件系统开发',
              '2、交通运输安全管理信息化平台APP软件开发',
              '3、交通运输安全生产分析与评价系统开发'
            ]
          }
        ],
        current: '/service-0'
      }
    },
    methods: {
      getClass: function (index) {
        this.current = index
      }
    }
  }

</script>

<style lang="less" scoped>
  .service-message {
    display: none
  }
  .service-message.current {
    display: block
  }
</style>
