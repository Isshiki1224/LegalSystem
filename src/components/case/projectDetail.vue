<template>
  <div>
    <!-- border: 1px solid #eee;box-shadow: 0 0 10px #ddd; -->
    <div style="margin: 0 auto;width: 50%;">
      <!--banner-->
      <div class="inside-banner">
        <div class="inside-path">
          <h2>典型项目</h2>
          <a href="javascript:history.back();" class="backoff">
            <img src="../../assets/statics/images/backoff.png" width="30">
          </a>
        </div>
        <div class="banner-pic" style="text-align: center;">
          <h4 style="display: block;">{{currentProject.title}}</h4>
        </div>
      </div>

      <!--案例内容-->
      <div class="row caserow">
        <div class="col-md-12 caseleft">
          <div class="ql-editor" v-html="currentProject.content">
          </div>
        </div>
        <div class="col-md-12 relate-case">
          <div id="owl-serve" class="owl-carousel">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentProject: {},
        currentId: ''
      }
    },
    created() {
      this.currentId = this.$route.query.id
      this.getById()
    },
    methods: {
      async getById() {
        const {
          data: res
        } = await this.$http.get('http://40.73.72.56:1311/newsManagement/getById', {
          params: {
            id: this.currentId
          }
        })
        this.currentProject = res.data
      }
    }
  }

</script>

<style scoped src="../../assets/statics/css/style.css"></style>
<style scoped src="../../assets/statics/css/owl.carousel.css"></style>
<style scoped src="../../assets/statics/css/owl.theme.css"></style>
<style scoped src="bootstrap/dist/css/bootstrap.css"></style>
<style lang="less" scoped></style>
