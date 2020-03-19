<template>
  <div>
    <div class="zjtd">
      <div class="zjtd-nav w11 wow fadeInDown" data-wow-duration="2s">
        <ul>
          <li v-for="(item,index) in zjtdList" :key="index">
              <div class="zjtd-messages">
                <img :src="item.src" style="height:auto">
                <p>{{item.name}}</p>
                <span>{{item.position}}</span>
              </div>
            </li>
        </ul>
      </div>
    </div>
    <!-- <div class="s-page wow fadeInDown">
      <el-pagination class="page" @current-change="handleCurrentChange" :current-page="queryInfo.currentPage" :page-size="8"
        layout="total,  prev, pager, next, jumper" :total="9">
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        zjtdList: [{
            id: 0,
            path: '/detail2-238',
            src: require('../../assets/picture/20191106100547.jpg'),
            name: '毕军',
            position: '博导/教育部长江学者特聘教授'
          },
          {
            id: 1,
            path: '/detail2-188',
            src: require('../../assets/picture/20190328102516.jpg'),
            name: '杨芬',
            position: '高级工程师'
          },
          {
            id: 2,
            path: '/detail2-187',
            src: require('../../assets/picture/20190328102502.jpg'),
            name: '戴婧',
            position: '博士'
          },
          {
            id: 3,
            path: '/detail2-186',
            src: require('../../assets/picture/20190328102448.jpg'),
            name: '刘永红',
            position: '工程师'
          },
          {
            id: 4,
            path: '/detail2-185',
            src: require('../../assets/picture/20190328102433.jpg'),
            name: '俞赫男',
            position: '工程师'
          },
          {
            id: 5,
            path: '/detail2-183',
            src: require('../../assets/picture/20190401065933.jpg'),
            name: '易芬',
            position: '工程师'
          },
          {
            id: 6,
            path: '/detail2-181',
            src: require('../../assets/picture/20190328102336.png'),
            name: '彭心桥',
            position: '工程师'
          },
          {
            id: 7,
            path: '/detail2-223',
            src: require('../../assets/picture/20190419021048.jpg'),
            name: '马宗伟',
            position: '工程师'
          }
        ],
        queryInfo: {
          currentPage: 1,
          pageSize: 8
        }
      }
    },
    methods: {
      getTerms() {

      },
      handleCurrentChange(newPage) {

      }
    }
  }

</script>

<style>

</style>
