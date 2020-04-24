<template>
  <div>
    <div id="slideBox" class="slideBox clear">
      <div class="bd">
        <ul>
          <li>
            <img src="../assets/picture/banner3.jpg">
            <div class="b-t">
              <div class="banner-title"></div>
              <div class="banner-title1">
                <p>CREATIVE THINKING</p>
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
                  <router-link to="/newsDetail2">
                    <div class="dynamic-message-nav">
                      <div class="dynamic-img">
                        <img src="../assets/picture/20200228095936.png">
                      </div>
                      <h4>国家应急体系建设'十四五'规划设计若干思考</h4>
                      <p>
                        摘要：应急科学与工程知识体系对于应急体系规划设计具有一定学理支撑。首先阐明应急科学与工程知识体系框架，包括其来龙去脉、框架设计思路及现实应用价值。然后，依据应急科学与工程知识体系主体思路，依照规划设计框架，提出国家突发事件应急体系建设&#39;十四五&#39;规划（2021-2025年）设计若干思考...
                      </p>
                    </div>
                  </router-link>
                </li>

                <li>
                  <router-link to="/newsDetail1">
                    <div class="dynamic-message-nav">
                      <div class="dynamic-img">
                        <img src="../assets/picture/20200107102721.png">
                      </div>
                      <h4>航道、船闸运行安全监督第三方检查项目通过评审</h4>
                      <p>
                        12月23日，厅港航中心召开了《航道、船闸运行安全监督第三方检查》项目评审会，该项目由我公司承担。项目...
                      </p>
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
        <h3 style="margin: 0 0 20px 0;">解决方案</h3>
        <span></span>
        <ul>
          <li v-for="(item,index) in serviceObj" :key="index" style="margin: 0 35px;">
            <router-link to="/serviceNav">
              <div class="service-img">
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
        <div>
          <el-carousel :interval="4000" type="card" height="200px" indicator-position="none">
            <el-carousel-item v-for="item in projectObj" :key="item.id">
              <router-link :to="{path: item.path}">
                <img :src="item.src" width="100%" height="80%">
                <p>{{item.content}}</p>
              </router-link>
            </el-carousel-item>
          </el-carousel>
          <router-link to="/caseNav" class="vedio-more">典型项目</router-link>
        </div>
        <!-- <div class="results-left wow fadeInLeft" data-wow-duration="2s">
          <h3>典型项目</h3>
          <span>results</span>
          <p>
            自公司成立以来，积极参与各类交通安全科研项目及提升风险管控能力等各项工作，已承接航道、船闸运行安全监督第三方检查等咨询服务项目，获得业主及各相关方的广泛认可。
          </p>
          <router-link to="caseNav">查看更多</router-link>
        </div>
        <div class="results-right wow fadeInRight" data-wow-duration="2s">
          <div class="txtScroll-top">
            <div class="bd">
              <ul class="infoList">
                <li>
                  <router-link to="projectDetail">
                    <span style="display: none;" class="results-date">2020-01-07</span>
                    <p class="results-title">1、航道、船闸运行安全监督第三方检查</p>
                  </router-link>
                </li>

                <li>
                  <a href="detail-217_9.html">
                    <span style="display: none;" class="results-date">2019-04-08</span>
                    <p class="results-title">2、国家新型工业化产业示范基地申报</p>
                  </a>
                </li>

                <li>
                  <a href="detail-216_9.html">
                    <span style="display: none;" class="results-date">2019-04-08</span>
                    <p class="results-title">3、国家小型微型企业创业创新示范基地申报</p>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
        projectObj: [{
          id: 0,
          path: 'projectDetail',
          src: require('../assets/uploadfile/2017/1222/20171222015226712.jpg'),
          content: '1、航道、船闸运行安全监督第三方检查'
        },
        {
          id: 1,
          path: 'projectDetail',
          src: require('../assets/uploadfile/2017/1222/20171222015226712.jpg'),
          content: '1、航道、船闸运行安全监督第四方检查'
        },
        {
          id: 2,
          path: 'projectDetail',
          src: require('../assets/uploadfile/2017/1222/20171222015226712.jpg'),
          content: '1、航道、船闸运行安全监督第五方检查'
        },
        {
          id: 3,
          path: 'projectDetail',
          src: require('../assets/uploadfile/2017/1222/20171222015226712.jpg'),
          content: '1、航道、船闸运行安全监督第六方检查'
        }]
      }
    }
  }

</script>

<style lang="less" scoped>
  .results-nav h3 {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 15px;
  }

  /* .el-carousel__item h3 {
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
  } */

  .results {
    margin-bottom: 15px;
  }

  .el-carousel {
    margin: 0 auto;
    width: 70%;
  }

  .vedio-more{
    font-size: 16px;
    color: #777;
    padding: 10px 0;
    border: 2px solid #777;
    display: block;
    margin:0px auto 0;
    text-align:center;
    width:188px;clear:both;
  }

</style>
