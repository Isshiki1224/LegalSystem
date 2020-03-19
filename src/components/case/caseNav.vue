<template>
  <div>
    <div class="banner-img">
      <img src="../../assets/picture/ban3.jpg">
    </div>
    <div class="case-list wow fadeInDown" data-wow-duration="2s">
      <ul class="w11">
        <li :class="{active2 : item.id==current}" @click="getClass(item.id)" v-for="(item) in caseObj"
          :key="item.id" >
          <router-link to="">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="news-all"  v-for="(item,index) in caseObj" :key="index" :class="{current : item.id==current}">
      <ui>
        <li v-for="(title,index) in currentPageData" :key="index">
            <div class="w11">
              <div class="news-left" style="display: none;">
                <img src="../../assets/picture/20190322112757.png">
              </div>
              <div class="news-right case_right">
                <h3>{{title}}</h3>
                <p>
                </p>
              </div>
            </div>
          </li>
      </ui>
    </div>
    <div class="s-page wow fadeInDown" data-wow-duration="1s">
        <div class="page" style="width:100%;text-align:center;">
          <el-pagination class="page" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-size="8" layout="total,  prev, pager, next, jumper" :total="total">
          </el-pagination>
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
        total: 0, 
        totalPage: 1, // 统共页数，默认为1
        currentPage: 1, // 当前页数 ，默认为1
        pageSize: 8, // 每页显示数量
        currentPageData: [], // 当前页显示内容
        value: false, 
        caseObj: [{
            id: 0,
            path: '/case3',
            name: '生态环境',
            titles: [
              '1、江苏省某高新技术产业开发区生态工业园规划',
              '2、江苏省某工业园化工废水第三方治理试点项目验收申请报告',
              '3、水治理专项资金项目核查验收',
              '4、大宗固定废弃物综合利用产业集聚规划',
              '5、江苏省环境风险比较研究',
              '6、江苏某经济开发区化工园水污染治理实施方案',
              '7、某市化学工业园区省级生态工业示范园验收',
              '8、江苏部分区域环境保护规划',
              '9、区域空气质量管理创新机制研究',
              '10、江苏大气污染防治新机制研究'
            ]
          },
          {
            id: 1,
            path: '/case4',
            name: '风险与应急',
            titles: [
              '1、江苏省“十三五”应急体系建设规划中期评估',
              '2、园区环境风险评估与应急预案编制',
              '2、园区环境风险评估与应急预案编制',
              '4、园区企业环保合规性审核及综合整治编制',
              '5、园区企业EHS培训与应急管理手册编制',
              '6、园区应急响应中心及演习模拟平台构建',
              '7、重点行业环境应急管理培训系统设计与开发',
              '8、环境风险防控与应急体系研究',
              '9、江苏省环境风险比较研究'
            ]
          },
          {
            id: 2,
            path: '/case5',
            name: '节能低碳',
            titles: [
              '1、江苏省某市编制温室气体排放清单及控制温室气体排放实施方案采购项目',
              '2、江苏省某市年度温室气体清单编制',
              '3、国家级低碳试点城市申报方案',
              '4、江苏省工业生产过程温室气体排放量核算',
              '5、工业园区低碳发展规划和路线图',
              '6、江苏省某市低碳发展规划',
              '7、江苏省某市低碳数据管理平台建设',
              '8、江苏省某市经济社会发展绿色评估体系研究'
            ]
          },
          {
            id: 3,
            path: '/case6',
            name: '循环经济',
            titles: [
              '1、园区循环化改造实施方案',
              '2、江苏省循环经济试点考核指标体系',
              '3、园区十三五循环经济发展规划',
              '4、园区循环经济实施方案',
              '5、市、区级循环经济规划研究',
              '6、园区资源循环利用关键基数开发及应用研究'
            ]
          },
          {
            id: 4,
            path: '/case7',
            name: '能源管理',
            titles: [
              '1、煤炭消耗替代方案评估',
              '2、热电联产项目煤炭落实方案',
              '3、关停锅炉耗煤量评估',
              '4、煤炭消耗替代落实方案及评估',
              '5、可再生能源规划',
              '6、新能源发展规划'
            ]
          },
          {
            id: 5,
            path: '/case8',
            name: '自然资源',
            titles: [
              '1、湖泊水库生态安全评估',
              '2、江苏某市饮用水水源地安全保障规划',
              '3、生态工业园区规划',
              '4、生态工业园建设绩效评估',
              '5、江苏省某市生态文明城市建设规划',
              '6、山水林田湖草生命共同体构建效益评价'
            ]
          },
          {
            id: 6,
            path: '/case9',
            name: '其他',
            titles: [
              '1、江苏省重点骨干企业“双创”平台示范工程申报',
              '2、国家新型工业化产业示范基地申报',
              '3、国家小型微型企业创业创新示范基地申报',
              '4、制造业与互联网融合发展试点示范申报',
              '5、大数据产业发展试点示范项目申报',
              '6、国家中小企业公共服务示范平台申报',
              '7、制造业“双创”平台试点示范项目申报',
              '8、国家安全产业示范园区申报',
              '9、智能制造示范试点项目申报',
              '10、江苏省军民融合产业示范基地认定申报'
            ]
          }
        ],
        current: 0
      }
    },
    created() {
      const index = this.current
      // 计算一共有几页
      this.totalPage = Math.ceil(this.caseObj[index].titles.length / this.pageSize)
      console.log(this.totalPage)
      // 计算得0时设置为1
      this.totalPage = this.totalPage === 0 ? 1 : this.totalPage
      this.getCurrentPageData()
    },
    methods: {
      getClass: function (index) {
        console.log(index)
        this.current = index
        this.currentPage = 1
        this.getCurrentPageData()
      }, 
      getCurrentPageData() {
        const index = this.current
        this.total = this.caseObj[index].titles.length
        const begin = (this.currentPage - 1) * this.pageSize
        const end = this.currentPage * this.pageSize
        this.currentPageData = this.caseObj[index].titles.slice(begin, end)
        console.log(this.currentPageData)
      }, 
      handleCurrentChange(newPage) {
        this.currentPage = newPage
        this.getCurrentPageData()
      }
    }
  }

</script>

<style lang="less" scoped>
  .news-all  {
    display: none
  }

  .news-all.current {
    display: block
  }

</style>
