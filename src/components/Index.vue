<template>
  <div>
    <div id="slideBox" class="slideBox clear">
      <div class="bd">
        <ul>
          <li>
            <img src="../assets/picture/banner5.jpg">
            <div class="b-t">
              <div class="banner-title"></div>
              <div class="banner-title1">
                <p></p>
                <p>专业 融合 创新 共赢</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="dynamic">
      <div class="dynamic-nav w11">
        <div class="dynamic-title wow fadeInLeft" data-wow-duration="2s">
          <h3>新闻中心</h3>
          <span class="en-title">dynamic</span>
          <p>DYNAMIC</p>
          <div class="dynamic-more">
            <router-link to="newsNav">
              <span class="sp1">MORE</span>
              <span class="sp2"></span>
              <span class="sp3"></span>
              <span class="sp4"></span>
            </router-link>
          </div>
        </div>
        <div class="dynamic-message wow fadeInRight" data-wow-duration="2s">
          <div class="picScroll-left">
            <div class="bd">
              <ul class="picList">
                <li>
                  <router-link :to="{path: '/newsDetail1', query: { id: cNews[0].id, path: '/news1' }}">
                    <div class="dynamic-message-nav">
                      <div class="dynamic-img">
                        <img :src="newsPic(cNews[0].filePath)">
                      </div>
                      <h4>{{cNews[0].title}}</h4>
                      <p>{{cNews[0].synopsis}}</p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{path: '/newsDetail1', query: { id: nNews[0].id }}">
                    <div class="dynamic-message-nav">
                      <div class="dynamic-img">
                        <img :src="newsPic(nNews[0].filePath)">
                      </div>
                      <h4>{{nNews[0].title}}</h4>
                      <p>{{nNews[0].synopsis}}</p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service wow fadeInDown" data-wow-duration="2s">
      <div class="service-nav w11">
        <h3>解决方案</h3>
        <span>service</span>
        <ul style="display: flex;
        justify-content: center;">
          <li v-for="(item,index) in serviceObj" :key="index">
            <router-link to="/serviceNav">
              <div class="service-img" style="margin: 0 auto;">
                <img :src="item.src">
              </div>
              <p>{{item.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="results">
      <div class="results-nav w11">
        <h3>典型项目</h3>
        <span>project</span>
        <div>
          <el-carousel :interval="4000" type="card" height="230px" indicator-position="none">
            <el-carousel-item v-for="(item,index) in project" :key="index" >
              <router-link :to="{path: 'projectDetail' , query: { id: item.id }}">
                <img :src="pic(item.filePath)" width="100%" height="100%">
                <p>{{item.title}}</p>
              </router-link>
            </el-carousel-item>
          </el-carousel>
          <router-link to="/caseNav" class="vedio-more">典型项目</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // 过滤器
    filters: {
      ellipsis(value) {
        if (!value) return ''
        if (value.length > 32) {
          return value.slice(0, 32) + '...'
        }
        return value
      }
    },
    data() {
      return {
        serviceObj: [{
            id: 0,
            path: '/service-0',
            src: require('../assets/picture/fw1.png'),
            name: '风险评估'
          },
          {
            id: 1,
            path: '/service-1',
            src: require('../assets/picture/fw2.png'),
            name: '安全研究'
          },
          {
            id: 2,
            path: '/service-2',
            src: require('../assets/picture/fw3.png'),
            name: '咨询服务'
          },
          {
            id: 3,
            path: '/service-3',
            src: require('../assets/picture/fw4.png'),
            name: '应急咨询'
          },
          {
            id: 4,
            path: '/service-4',
            src: require('../assets/picture/fw5.png'),
            name: '软件开发'
          }
        ],
        cNews: [],
        nNews: [],
        project: [],
        queryInfo: {
          searchContent: '',
          pageNum: 1,
          pageSize: 10,
          category: ''
        }
      }
    },
    created() {
      this.getProject()
    },
    methods: {
      async getProject() {
        const {
          data: res
        } = await this.$http.get('http://40.73.72.56:1311/newsManagement/news', {
          params: this.queryInfo
        })
        const allList = res.data
        allList.some((item, i) => {
          if (item.category === '典型项目') {
            this.project.push(item)
          }
          if (item.category === '企业新闻') {
            this.cNews.push(item)
          }
          if (item.category === '最新政策') {
            this.nNews.push(item)
          }
        })
      },
      pic(filePath) {
        return 'http://40.73.72.56:1311/newsManagement/' + filePath
      },
      newsPic(filePath) {
        return 'http://40.73.72.56:1311/newsManagement/' + filePath
      }
    }
  }

</script>

<style lang="less" scoped>
  .results-nav h3 {
    font-size: 24px;
    text-align: left;
    font-weight: bold;
  }

  .results-nav span {
    display: block;
    text-align: left;
    font-size: 16px;
    color: #6d6d6d;
    opacity: 0.68;
    margin-bottom: 20px;
  }

  .results {
    margin: 40px 0;
  }

  .el-carousel {
    margin: 0 auto;
    width: 68%;
  }

  .el-carousel__item {
    width: 50%;
  }

  .el-carousel__item p {
    text-align: center;
    color: white;
    position: absolute;
    z-index: 999;
    left: 5px;
    bottom: 5px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .vedio-more {
    font-size: 16px;
    color: #777;
    padding: 10px 0;
    border: 2px solid #777;
    display: block;
    margin: 70px auto 0;
    text-align: center;
    width: 188px;
    clear: both;
  }

</style>
