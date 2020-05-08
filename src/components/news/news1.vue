<template>
    <div>
      <div class="news-all">
        <ul>
          <li v-for="(item,index) in cNews" :key="index">
            <router-link :to="{ path: '/newsDetail1', query: { id: item.id } }">
              <div class="w11">
                <div class="news-left" style="height: 100%;">
                  <img :src="pic(item.filePath)">
                </div>
                <div class="news-right">
                  <h3>{{item.title}}</h3>
                  <span style="display: none;">{{item.date}}</span>
                  <p>
                    {{item.synopsis}}
                  </p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <!-- <div class="s-page wow fadeInDown" data-wow-duration="1s">
          <div class="page" style="width:100%;text-align:center;">
            <el-pagination class="page" @current-change="handleCurrentChange" :current-page="currentPage"
              :page-size="8" layout="total,  prev, pager, next, jumper" :total="news1List.length">
            </el-pagination>
          </div>
        </div> -->
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          news1List: [{
              id: 0,
              path: '/newsDetail1',
              src: require('../../assets/picture/20200107102721.png'),
              title: '航道、船闸运行安全监督第三方检查项目通过评审',
              date: '2020-01-07',
              summary: '12月23日，厅港航中心召开了《航道、船闸运行安全监督第三方检查》项目评审会，该项目由我公司承担。项目...'
            }
          ],
          totalPage: 1, // 统共页数，默认为1
          currentPage: 1, // 当前页数 ，默认为1
          pageSize: 8, // 每页显示数量
          currentPageData: [], // 当前页显示内容
          cNews: [],
          queryInfo: {
          searchContent: '',
          pageNum: 1,
          pageSize: 10,
          category: '企业新闻'
        }
        }
      },
      created() {
        this.getNews1List()
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
        }, 
        handleCurrentChange(newPage) {
          this.currentPage = newPage
          this.getCurrentPageData()
        },
        async getNews1List() {
        const {
          data: res
        } = await this.$http.get('http://40.73.72.56:1311/newsManagement/news', {
          params: this.queryInfo
        })
        this.cNews = res.data
        this.total = res.totalPage
      },
      pic(filePath) {
        return 'http://40.73.72.56:1311/newsManagement/' + filePath
      }
      }
    }
  
  </script>
