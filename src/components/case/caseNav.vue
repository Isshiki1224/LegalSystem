<template>
  <div>
    <div >
      <div class="banner-img">
        <img src="../../assets/picture/ban3.jpg">
      </div>
      <div class="inside-banner" style="margin: 0 auto;width: 50%;border: 1px solid #eee;box-shadow: 0 0 10px #ddd;">
        <div class="inside-path">
          <h2>典型项目</h2>
        </div>
      </div>
      <div class="caseli">
        <ul class="row" style="text-align: center; margin: 0 auto;width: 50%;">

          <li class="col-md-4 col-sm-3 col-xs-12">
            <router-link to="/projectDetail">
              <img src="../../assets/uploadfile/2017/1222/20171222015226712.jpg">
              <p>航道、船闸运行安全监督第三方检查</p>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

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
