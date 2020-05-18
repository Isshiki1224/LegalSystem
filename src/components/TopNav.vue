<template>
  <div>
    <div class="header">
      <div class="header-nav w11">
        <div class="header-left">
          <img src="../assets/picture/logo.png">
          <div class="company-name">
            <p>中交安科（南京）安全咨询有限公司</p>
            <p>ChinaTrans Safety Consulting (Nanjing) Co., Ltd</p>
          </div>
        </div>
        <div class="header-right">
          <ul>
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li id="about" @mouseenter="enter1" @mouseleave="leave1">
              <router-link to="/aboutNav">关于我们</router-link>
              <div id="subnav" v-bind:style='displayStyle1'>
                <div class="sub2">
                  <dl v-for="(item) in aboutObj" :key="item.id" @click="getChildClass(item.path)">
                    <router-link :to="{ path: item.path }">{{item.name}}</router-link>
                  </dl>
                </div>
              </div>
            </li>
            <li id="ser" @mouseenter="enter2" @mouseleave="leave2">
              <router-link to="/serviceNav">解决方案</router-link>
              <div id="subnav1" v-bind:style='displayStyle2'>
                <div class="sub2">
                  <dl v-for="item in serviceObj" :key="item.id" @click="getChildClass(item.path)">
                    <router-link to="/serviceNav">{{item.name}}</router-link>
                  </dl>
                </div>
              </div>
            </li>
            <li id="news" @mouseenter="enter3" @mouseleave="leave3">
              <router-link to="/newsNav">新闻中心</router-link>
              <div id="subnav2" v-bind:style='displayStyle3'>
                <div class="sub2">
                  <dl v-for="item in newsObj" :key="item.id" @click="getChildClass(item.path)">
                    <router-link :to="{ path: item.path }">{{item.name}}</router-link>
                  </dl>
                </div>
              </div>
            </li>
            <li id="case">
              <router-link to="/caseNav">典型项目</router-link>
            </li>
            <li id="hr">
              <router-link to="/legalSearch">法律法规</router-link>
            </li>
            <li>
              <router-link to="/content">联系我们</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <router-view ref="child"></router-view>
    </div>
    <!--底部-->
    <div class="footer hidden-xs">
      <div class="row ft-box">
        <div class="col-md-6 col-sm-6 ft-left">
          <a href="#">公司地图</a>
          <a href="#">法律声明</a>
          <a href="#">联系方式</a>
          <a href="#">举报热线</a>

          <!-- style="width:300px;margin:0 auto; padding:20px 0;" -->
          <div>

            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011302320921"
              style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
              <img src="../assets/image/备案图标.png" class="beiAnImg">
              <p style="float:left;height:20px;line-height:20px;">苏公网安备
                32011302320921号</p>
            </a>

            <a href="http://beian.miit.gov.cn/" target="_blank"
              style="display:block;">
              <img src="../assets/image/ICP备案.png" class="icpImg">
              <p>苏ICP备20020409号</p>
            </a>

          </div>
        </div>
        <div class="col-md-3 col-sm-3 ft-tel">
          <img src="../assets/statics/images/ft-tel.png" class="fl img-responsive">
          <div class="fl">联系电话：18013839102</div>
        </div>
        <div class="col-md-3 col-sm-3 ft-lefter">
          <img class="img1" src="../assets/picture/logo.png">
          <img class="img2" src="../assets/picture/ewm.png">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        displayStyle1: {
          display: 'none'
        },
        displayStyle2: {
          display: 'none'
        },
        displayStyle3: {
          display: 'none'
        },
        aboutObj: [{
          id: 1,
          path: '/gsjj',
          name: '公司简介'
        }, {
          id: 2,
          path: '/qywh',
          name: '企业文化'
        }, {
          id: 3,
          path: '/zjtd',
          name: '专家团队'
        }, {
          id: 4,
          path: '/zzry',
          name: '资质荣誉'
        }],
        serviceObj: [{
            id: 0,
            path: '/service-0',
            name: '风险评估'
          },
          {
            id: 1,
            path: '/service-1',
            name: '安全研究'
          },
          {
            id: 2,
            path: '/service-2',
            name: '咨询服务'
          },
          {
            id: 3,
            path: '/service-3',
            name: '应急咨询'
          },
          {
            id: 4,
            path: '/service-4',
            name: '软件开发'
          }
        ],
        newsObj: [{
            id: 0,
            path: '/news2',
            name: '最新政策'
          },
          {
            id: 1,
            path: '/news1',
            name: '企业新闻'
          }
        ]
      }
    },
    methods: {
      enter1: function () {
        this.displayStyle1.display = 'block'
      },
      leave1: function () {
        this.displayStyle1.display = 'none'
      },
      enter2: function () {
        this.displayStyle2.display = 'block'
      },
      leave2: function () {
        this.displayStyle2.display = 'none'
      },
      enter3: function () {
        this.displayStyle3.display = 'block'
      },
      leave3: function () {
        this.displayStyle3.display = 'none'
      },
      getChildClass: function (index) {
        this.$refs.child.getClass(index)
      }
    }
  }

</script>

<style lang="less" scoped>
  .footer {
    background: #efefef;
    padding: 50px 0;
    margin-top: 70px;
    clear: both;

  }

  .row {
    display: flex;
    justify-content: center;
  }

  .ft-tel {
    margin: 0 50px;
    display: flex;
    justify-content: space-around;
  }

  .footer .ft-box {
    width: 70%;
    margin: 0 auto;
  }

  .ft-tel img {
    width: 70px !important;
    height: 70px !important;
  }

  .icpImg {
    float: left;
    width: 6%;
    padding-top: 2px;
    margin-right: 5px;
    
  }

  .beiAnImg {
    float: left;
    padding-top: 5px;
    margin-right: 5px;
  }

  .ft-lefter .img1 {
    width: 129px !important;
    padding-bottom: 10px;
  }

  .img2 {
    width: 70px !important;
    margin-left: 30px;
  }

  .ft-righter {
    margin-left: 15px;
  }

  .footer .ft-box a {
    color: #666;
    text-decoration: none;
    margin-right: 20px;
  }

  .footer .ft-box p {
    font-size: 18px;
    color: #666;
    margin: 5px 0 0;
  }

  .ft-tel {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #666;
    padding: 0 50px;
    border-right: 1px solid #919191;
    border-left: 1px solid #919191;
  }

  .ft-tel div {
    /* padding-left: 15px; */
    padding: 20px 0 0 15px;
  }

  .ft-left {
    /* padding-top: 10px; */
  }

</style>
