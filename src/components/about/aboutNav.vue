<template>
  <div>
    <div class="banner-img">
      <img src="../../assets/picture/ban1.jpg">
    </div>
    <div class="about-list wow fadeInDown" data-wow-duration="2s">
      <ul class="w11">
        <li :class="{active2 : item.path==current}" @click="getClass(item.path)" v-for="(item) in aboutObj" :key="item.id">
          <router-link :to="{ path: item.path }">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import '@/assets/css/index.css'
  import '@/assets/css/animate.css'
  export default {
    data() {
      return {
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
        current: '/gsjj',
        isActive: false
      }
    },
    methods: {
      getClass: function (index) {
        this.current = index
      }
    }
  }

</script>

<style>
  .active {
    background: #6dbce9 !important;
    font-weight: bold;
    color: #fff !important;
  }

</style>
