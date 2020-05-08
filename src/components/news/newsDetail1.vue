<template>
  <div>
    <div class="news-detail">
      <div class="news-detail-nav w11">
        <h3>{{currentNews.title}}</h3>
        <span class="span1">{{currentNews.publicDate}}</span>
        <div class="ql-editor" v-html="currentNews.content">
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
        this.currentNews = res.data
      }
    }
  }

</script>
