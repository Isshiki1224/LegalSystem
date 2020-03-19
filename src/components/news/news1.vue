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
            <el-pagination class="page" @current-change="handleCurrentChange" :current-page="currentPage"
              :page-size="8" layout="total,  prev, pager, next, jumper" :total="news1List.length">
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
          news1List: [{
              id: 0,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
            },
            {
              id: 1,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
            },
            {
              id: 2,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
            },
            {
              id: 3,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
            },
            {
              id: 4,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
            },
            {
              id: 5,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
            },
            {
              id: 6,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
            },
            {
              id: 7,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
            },
            {
              id: 8,
              path: '/detail-253_1',
              src: require('../../assets/picture/20200228095116.png'),
              title: '我司圆满完成《江苏省突发事件总体应急预案》和《江苏省重特大生产安全事故应急预案》修订工作',
              date: '2020-02-28',
              summary: '为应对江苏省当前新的风险形势、应急管理需求以及机构改革后全新的应急系统条块布局，2019年我司受江苏省应急管理厅委托，开展《江苏省突发事件总体应急预案》和《江苏省生产安全事故应急预案》的修订工作。经过深度调研访谈，法律法规细节查证、多轮意见征求、打磨文字、专家论证、意见说明、程序法审等多项环节，目前...'
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
        this.totalPage = Math.ceil(this.news1List.length / this.pageSize)
        // 计算得0时设置为1
        this.totalPage = this.totalPage === 0 ? 1 : this.totalPage
        this.getCurrentPageData()
      },
      methods: {
        getCurrentPageData() {
          const begin = (this.currentPage - 1) * this.pageSize
          const end = this.currentPage * this.pageSize
          this.currentPageData = this.news1List.slice(begin, end)
          console.log(this.currentPageData)
        }, 
        handleCurrentChange(newPage) {
          this.currentPage = newPage
          this.getCurrentPageData()
        }
      }
    }
  
  </script>
