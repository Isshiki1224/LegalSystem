<template>
  <div>
    <div>
      <div class="main pageWidth">
        <div class="m-height"></div>
        <div class="mainCon clearself">
          <div class="mainRig" style="width:100%">
            <form id="searchForm" method="get" action="/SearchLaw">
              <div class="searchBox">

                <input type="hidden" id="effectLevel" name="effectLevel" value="">
                <div class="searchNav" style="position: relative;height: 36px;">
                  <div style="width: 100%;overflow: hidden;">
                    <div style="width:10000px;position: relative;" id="nav">
                      <div style="display:inline-block;">
                        <router-link to="" v-for="(item, index) in kindObj" :key="index"
                          :class="{ current : item.name == queryInfo.kind }" @click.native="getClass(item.name)">
                          {{item.name}}
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <span id="left" class="left opacity"></span>
                </div>
                <div class="w_search" style="text-align: center;">
                  <input id="Query" name="Query" class="w_searchText" type="text" value=""
                    v-model="queryInfo.searchContent">
                  <input class="w_searchBut" type="button" value="" @click="getLegalList()">
                  <div style="padding-top:8px;clear:both;text-align: center;">
                    <label style="font-size:16px">
                      <input value="a" name="Type" type="radio" v-model="picked">按标题检索
                    </label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label style="font-size:16px">
                      <input value="b" name="Type" type="radio" v-model="picked">按正文检索
                    </label>
                  </div>
                </div>

                <div class="clear"></div>
              </div>
            </form>
            <div class="searList">
              <div class="searTit">为您检索到: {{total}}个相关记录</div>
              <div class="list clearself">
                <div class="listCon clearself" v-for="(item,index) in legalList" :key="index">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td class="listLef">
                        <h3 style="width: 100%;">
                          <router-link :to="{path: '/legalDetail', query: { id: item.id }}">{{item.title}}</router-link>
                        </h3>
                        <div class="searInfo">发布部门: {{item.office}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间:
                          {{item.publicDate}}
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div>
                <div style="width:100%;text-align:center;">
                  <el-pagination class="page" @current-change="handleCurrentChange" :current-page="queryInfo.pageNum"
                    :page-size="queryInfo.pageSize" layout="total,  prev, pager, next, jumper" :total="total">
                  </el-pagination>
                </div>
              </div>
            </div>
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
        picked: 'a',

        currentName: '全库',
        kindObj: [{
            id: 0,
            name: '全库'
          },
          {
            id: 1,
            name: '法律法规'
          },
          {
            id: 2,
            name: '标准规范'
          },
          {
            id: 3,
            name: '文件'
          }
        ],
        currentPageData: [], // 当前页显示内容
        legalList: [

        ],
        queryInfo: {
          searchContent: '',
          pageNum: 1,
          kind: '全库',
          pageSize: 10
        },
        total: 0
      }
    },
    created() {
      this.getLegalList()
    },
    methods: {
      getClass(index) {
        console.log(index)
        this.queryInfo.kind = index
      },
      async getLegalList() {
        if (this.picked === 'a') {
          if (this.queryInfo.searchContent !== '') {
            this.queryInfo.pageNum = 1
          }
          const {
            data: res
          } = await this.$http.get('SearchLawTitle', {
            params: this.queryInfo
          })
          console.log(res)
          console.log(res.date[0].id)
          this.legalList = res.date
          this.total = res.totalPage
        }

        if (this.picked === 'b') {
          if (this.queryInfo.searchContent !== '') {
            this.queryInfo.pageNum = 1
          }
          const {
            data: res1
          } = await this.$http.get('SearchLaw', {
            params: this.queryInfo
          })
          console.log(res1)
          this.legalList = res1.date
          this.total = res1.totalPage
        }
      },
      handleCurrentChange(newPage) {
        this.queryInfo.pageNum = newPage
        this.getLegalList()
      }
    }
  }

</script>

<style scoped src="../../assets/law/css/common.css"></style>
<style scoped src="../../assets/law/css/wjl_style.css"></style>
<style scoped src="../../assets/law/css/zl_style.css"></style>
<style scoped src="../../assets/law/css/zTreeStyle.css"></style>
<style type="text/less" lang="less" scoped>
  body {
    background: #f1f1f1
  }

  div.searchNav span {
    position: absolute; top: 0px; border: 15px solid transparent; border-width:15px 10px; cursor: pointer;
  }

  div.searchNav .left {
    left: -50px;
    border-right-color: #295EAB;
  }

  div.searchNav .right {
    right: -50px;
    border-left-color: #295EAB;
  }

  div.searchNav .opacity {
    cursor: default;
    border-color: transparent;
  }

  .slideBox {
      background-color: white;
  }

</style>
