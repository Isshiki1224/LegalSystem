<template>
  <div>
    <div class="news-all">
      <ul>
        <li v-for="item in currentPageData" :key="item.id">
          <router-link :to="{ path: item.path }">
            <div class="w11">
              <div class="news-left">
                <img :src="item.src">
              </div>
              <div class="news-right">
                <h3>{{item.title}}</h3>
                <span style="display: none;">{{item.date}}</span>
                <p>
                  {{item.summary}}
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="s-page wow fadeInDown" data-wow-duration="1s">
        <div class="page" style="width:100%;text-align:center;">
          <el-pagination class="page" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="8"
            layout="total,  prev, pager, next, jumper" :total="news2List.length">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        news2List: [{
            id: 0,
            path: '/newsDetail2',
            src: require('../../assets/picture/20200228095936.png'),
            title: "国家应急体系建设'十四五'规划设计若干思考",
            date: '2020-02-28',
            summary: "摘要：应急科学与工程知识体系对于应急体系规划设计具有一定学理支撑。首先阐明应急科学与工程知识体系框架，包括其来龙去脉、框架设计思路及现实应用价值。然后，依据应急科学与工程知识体系主体思路，依照规划设计框架，提出国家突发事件应急体系建设'十四五'规划（2021-2025年）设计若干思考..."
          }
        ],
        totalPage: 1, // 统共页数，默认为1
        currentPage: 1, // 当前页数 ，默认为1
        pageSize: 8, // 每页显示数量
        currentPageData: [] // 当前页显示内容
      }
    },
    created() {
      // 计算一共有几页
      this.totalPage = Math.ceil(this.news2List.length / this.pageSize)
      // 计算得0时设置为1
      this.totalPage = this.totalPage === 0 ? 1 : this.totalPage
      this.getCurrentPageData()
    },
    methods: {
      getCurrentPageData() {
        const begin = (this.currentPage - 1) * this.pageSize
        const end = this.currentPage * this.pageSize
        this.currentPageData = this.news2List.slice(begin, end)
      }, 
      handleCurrentChange(newPage) {
        this.currentPage = newPage
        this.getCurrentPageData()
      }
    }
  }

</script>
