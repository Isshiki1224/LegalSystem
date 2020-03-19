<template>
  <div>
    <div class="banner-img">
      <img src="../../assets/picture/ban2-1.jpg">
    </div>
    <div class="news-list wow fadeInDown" data-wow-duration="2s">
      <ul class="w11">
        <li :class="{active2 : item.path==current}" @click="getClass(item.path)" v-for="(item) in newsObj" :key="
          item.id">
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
        ],
        current: '/news2'
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
