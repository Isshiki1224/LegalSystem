<template>
  <div>
    <div class="main pageWidth">

      <div class="mainCon clearself" style="display: flex;">
        <div class="mainRig fr" style="flex: 1">
          <div class="w_bC">
            <div class="detailCon">
              <div class="conTit">{{currentLegal.title}}</div>
              <table class="d_infor" style="margin: auto;">
                <tr align="left">
                  <td align="right" width="80">公布机关：</td>
                  <td width="400">{{currentLegal.office}}</td>
                </tr>
                <tr align="left">
                  <td align="right" width="80">公布日期：</td>
                  <td width="200">{{currentLegal.publicDate}}</td>
                  <td align="right" width="80">施行日期：</td>
                  <td width="200">{{currentLegal.executeDate}}</td>
                </tr>
                <tr align="left">
                  <td align="right" width="80">效力：</td>
                  <td width="200">{{currentLegal.efficacy}}</td>
                  <td align="right" width="80">门类：</td>
                  <td width="200">{{currentLegal.category}}</td>
                </tr>

              </table>
              <div class="con" id="water_div">
                <p class="textAlignCenter">{{currentLegal.synopsis}}
                </p>
                <p class="textAlignRight"></p>
                <p></p>
                <hr>
                <div v-for="(term,index) in currentLegal.terms" :key="index">

                  <p id="154709776367300" class='textAlignCenter' style="font-size:1.2em;padding-bottom:5px"
                    v-if="term.chapterContent !== '' ">
                    {{term.chapterContent}}</p>
                  <p id="154709776367300" class='textAlignCenter' style="font-size:1.2em;padding-bottom:5px"
                    v-if="term.sectionContent !== '' ">
                    {{term.sectionContent}}</p>

                  <table border=0>
                    <tr valign=top>
                      <td nowrap v-if="term.itemContent !== ''">{{term.itemContent}}</td>
                      <td nowrap v-if="term.itemId <= 10 && term.itemId > 0 && term.itemContent === ''"
                        style="width: 45px;"></td>
                      <td nowrap
                        v-if="((term.itemId <= 20 && term.itemId > 10) || term.itemId === 30 || term.itemId === 40 || term.itemId === 50 || term.itemId === 60 || term.itemId === 70 || term.itemId === 80 || term.itemId === 90 || term.itemId === 100) && term.itemContent === ''"
                        style="width: 60px;"></td>
                      <td nowrap
                        v-if="term.itemId < 100 && term.itemId > 20 && term.itemId !== 30 && term.itemId !== 40 && term.itemId !== 50 && term.itemId !== 60 && term.itemId !== 70 && term.itemId !== 80 && term.itemId !== 90 && term.itemId !== 100 && term.itemContent === ''"
                        style="width: 75px;"></td>
                      <td nowrap
                        v-if="((term.itemId <= 110 && term.itemId > 100) || term.itemId === 120 || term.itemId === 130 || term.itemId === 140 || term.itemId === 150 || term.itemId === 160 || term.itemId === 170 || term.itemId === 180 || term.itemId === 190 )  && term.itemContent === ''"
                        style="width: 90px;"></td>
                      <td nowrap
                        v-if="term.itemId < 1000 && term.itemId > 110 && term.itemId !== 120 && term.itemId !== 130 && term.itemId !== 140 && term.itemId !== 150 && term.itemId !== 160 && term.itemId !== 170 && term.itemId !== 180 && term.itemId !== 190 && term.itemContent === ''"
                        style="width: 105px;"></td>
                      <td>
                        <p style="text-indent:2em;"
                          v-if="term.itemId <= 10 && term.itemId > 0 && term.itemContent === ''"> {{term.content}}</p>
                        <p style="text-indent:2em;"
                          v-if="term.itemId <= 100 && term.itemId > 10 && term.itemContent === ''"> {{term.content}}</p>
                        <p style="text-indent:2em;"
                          v-if="term.itemId <= 1000 && term.itemId > 100 && term.itemContent === ''"> {{term.content}}
                        </p>
                        <p style="text-indent:2em;" v-if="term.itemContent !== ''"> {{term.content}}</p>
                      </td>
                    </tr>
                  </table>
                  <hr>
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
        currentLegal: {},
        showLegals: [],
        tempArr: [],
        currentId: '',
        dNum: ''
      }
    },
    created() {
      this.currentId = this.$route.query.id
      this.getLegal()
    },
    methods: {
      async getLegal() {
        const {
          data: res
        } = await this.$http.get('getLegal', {
          params: {
            id: this.currentId
          }
        })
        this.currentLegal = res.date
      },
      digital2Chinese() {

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

  .main .current {
      display: block;
  }

</style>
