<template>
  <div>
    <div class="header">
      <div class="header-nav w11">
        <div class="header-left">
          <img src="../assets/picture/logo.png">
          <div class="company-name">
            <p>中交安科（南京）安全咨询有限公司</p>
            <p>ChinaTrans  Safety Consulting (Nanjing) Co., Ltd</p>
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
    <div class="footer">
      <div class="footer-nav w11">
        <div class="footer-left">
          <h3>中交安科</h3>
          <div class="footer-list">
            <dl>
              <dt>
                <router-link to="/gsjj">关于我们</router-link>
              </dt>
              <dd v-for="(item) in aboutObj" :key="item.id" @click="getChildClass(item.path)">
                <router-link :to="{ path: item.path }">{{item.name}}</router-link>
              </dd>
            </dl>
            <dl>
              <dt>
                <router-link to="/serviceNav">解决方案</router-link>
              </dt>
              <dd v-for="item in serviceObj" :key="item.id" @click="getChildClass(item.path)">
                <router-link to="serviceNav">{{item.name}}</router-link>
              </dd>

            </dl>
            <dl>
              <dt>
                <router-link to="/newsNav">新闻中心</router-link>
              </dt>
              <dd v-for="item in newsObj" :key="item.id" @click="getChildClass(item.path)">
                <router-link :to="{ path: item.path }">{{item.name}}</router-link>
              </dd>
            </dl>

          </div>
        </div>
        <div class="footer-right">
          <img class="footer-logo" src="../assets/picture/logo.png" width="251" height="71">
          <p>公司地址：<span>南京市栖霞区兴智科技园A座13楼</span></p>
          <p>招聘热线：<span>18013839120</span></p>
          <p>合作热线：<span>18013839120</span></p>
          <p>备案号：<span></span></p>
          <img class="ewm" src="../assets/picture/ewm.png">
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

</style>
