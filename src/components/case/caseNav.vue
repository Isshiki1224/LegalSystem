<template>
  <div>
    <div>
      <div class="banner-img">
        <img src="../../assets/picture/ban3.jpg">
      </div>
      <div class="inside-banner" style="margin: 0 auto;width: 50%;">
        <div class="inside-path">
          <h2>典型项目</h2>
        </div>
      </div>
      <div class="caseli">
        <ul class="row" style="text-align: center; margin: 0 auto;width: 50%;">
          <li class="col-md-4 col-sm-3 col-xs-12" v-for="(item,index) in projectList" :key="index">
            <router-link :to="{path: '/projectDetail', query: { id: item.id }}">
              <img :src="pic(item.filePath)">
              <p>{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projectList: [],
        queryInfo: {
          searchContent: '',
          pageNum: 1,
          pageSize: 10,
          category: '典型项目'
        },
        total: ''
      }
    },
    created() {
      this.getProjectList()
    },
    methods: {
      async getProjectList() {
        const {
          data: res
        } = await this.$http.get('http://40.73.72.56:1311/newsManagement/news', {
          params: this.queryInfo
        })
        this.projectList = res.data
        this.total = res.totalPage
      },
      pic(filePath) {
        return 'http://40.73.72.56:1311/newsManagement/' + filePath
      }
    }
  }

</script>

<style scoped src="../../assets/statics/css/style.css"></style>
<style scoped src="../../assets/statics/css/owl.carousel.css"></style>
<style scoped src="../../assets/statics/css/owl.theme.css"></style>
<style scoped src="bootstrap/dist/css/bootstrap.css"></style>
<style lang="less" scoped>
  .news-all {
    display: none
  }

  .news-all.current {
    display: block
  }

</style>
