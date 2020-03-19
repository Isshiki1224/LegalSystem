<template>
  <div>
    <div class="banner-img">
      <img src="../../assets/picture/ban2.jpg">
    </div>
    <div class="case-list wow fadeInDown" data-wow-duration="2s">
      <ul class="w11">
        <li :class="{active2 : item.path==current}" @click="getClass(item.path)" v-for="(item) in serviceObj"
          :key="item.id">
          <router-link to="">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="service-message" :class="{current : item.path==current}" v-for="(item,index) in serviceObj" :key="index">
      <div class="service-all w11">
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
            name: '生态环境',
            message: [
              '生态环境领域：',
              '聚焦环境质量总体改善：以解决生态环境领域突出问题为重点，深入实施污染防治行动计划，',
              '加强环境综合治理，突出环境管理第三方服务',
              '1、环境保护领域规划编制；',
              '2、规划环境等影响评价；',
              '3、项目前期环境管理咨询（环境评价、监理、验收）；',
              '4、环保管家；',
              '5、生态示范试点创建规划及实施方案制定；',
              '6、环境规划与管理课题研究；',
              '7、……'
            ]
          },
          {
            id: 1,
            path: '/service-1',
            name: '风险与应急',
            message: [
              '风险与应急领域：',
              '1、综合应急体系建设规划及阶段性评估；',
              '2、突发事件总体应急预案制定与修订；',
              '3、环境风险评估；',
              '4、突发环境事件应急体系建设规划及阶段性评估；',
              '5、突发环境事件风险评估及专项应急预案制定与修订；',
              '6、应急管理专题研究；',
              '7、……'
            ]
          },
          {
            id: 2,
            path: '/service-2',
            name: '节能低碳',
            message: [
              '节能低碳领域：',
              '1、区域低碳发展规划编制；',
              '2、区域低碳领域发展建设方案；',
              '3、区域低碳能力建设基数支撑；',
              '4、企业低碳技术咨询；',
              '5、低碳政策与实践领域课题研究；',
              '6、……'
            ]
          },
          {
            id: 3,
            path: '/service-3',
            name: '循环经济',
            message: [
              '循环经济领域：',
              '重点围绕生态文明建设、发展循环经济、节能、节水、资源综合利用及环境保护等',
              '领域开展工作，包括：',
              '1、名牌/示范申报类项目；',
              '2、规划及方案编制；',
              '3、资金申报类项目；',
              '4、专项课题研究；',
              '5、……'
            ]
          },
          {
            id: 4,
            path: '/service-4',
            name: '能源管理',
            message: [
              '能源管理领域：',
              '1、资源综合利用发电规划；',
              '2、热电联产规划；',
              '3、新能源和可再生能源发展规划；',
              '4、煤炭替代类方案和报告；',
              '5、……'
            ]
          },
          {
            id: 5,
            path: '/service-5',
            name: '自然资源',
            message: [
              '自然资源领域：',
              '1、自然资源调查监测评价；',
              '2、自然资源资产负债表编制及考核方案制定；',
              '3、自然资源承载力评估；',
              '4、自然资源管理课题研究；',
              '5、……'
            ]
          },
          {
            id: 6,
            path: '/service-6',
            name: '其他',
            message: [
              '其他领域：',
              '创同积极参与工程咨询领域专题申报及示范创建项目、能力建设与管理培训项目，',
              '业绩经验丰富，项目类型包含但不限于：',
              '1、投资项目可行性研究报告；',
              '2、项目建议书、项目申请报告；',
              '3、资金申请报告；',
              '4、规划咨询、评估咨询；',
              '5、政府/企业EHS专题培训；',
              '6、政府/企业低碳管理专题培训；',
              '7、政府/企业应急管理培训；',
              '8、……'
            ]
          }
        ],
        current: '/service-0'
      }
    },
    methods: {
      getClass: function (index) {
        console.log(index)
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
