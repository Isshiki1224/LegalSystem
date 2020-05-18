<template>
  <div>
    <div class="news-detail">
      <div class="news-detail-nav w11">
        <h3>{{currentNews.title}}</h3>
        <span class="span1">{{currentNews.publicDate}}</span>
        <div class="ql-editor" v-html="currentNews.content">
        </div>
        <div>
          <hr>
          <br>
          <label>附件下载(点击标题下载):</label><br>
          <br>
          <a :href="downloadUrl" style="font-size: 20px;" v-if="isAppendix">{{appendixTitle}}</a>
          <label style="font-size: 20px;" v-if="!isAppendix">暂无附件下载</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentNews: {},
        currentId: '',
        filePath: '',
        downloadUrl: '',
        appendixTitle: '',
        isAppendix: false
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
        this.currentNews = res.data
        if (this.currentNews.appendix.title !== '') {
          this.isAppendix = true
          this.filePath = this.currentNews.appendix.filePath
          this.appendixTitle = this.currentNews.appendix.title
          this.downloadUrl = 'http://40.73.72.56:1311/newsManagement/download?filePath=' + this.filePath
        }
      }
    }
  }

</script>
