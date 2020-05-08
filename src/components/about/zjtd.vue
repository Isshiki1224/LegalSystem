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
        zjtdList: [
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
