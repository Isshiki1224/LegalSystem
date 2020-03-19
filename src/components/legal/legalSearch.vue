<template>
  <div>
    <div class="w_m pageWidth">
      <div class="m-height"></div>
      <div class="w_logo"><a href=""><img src="../../assets/law/images/FLFGK_TITLE.png"></a>
      </div>
      <form id="searchForm" method="get" action="/SearchLawTitle">
        <input type="hidden" id="effectLevel" name="effectLevel" value="">
        <div class="searchBox">

          <div class="searchNav searchNav_index" style="position: relative;height: 36px;">
            <div style="width: 100%;overflow: hidden;">
              <div style="width:10000px;position: relative;" id="nav">
                <div style="display:inline-block;">
                  <a class="current" href="javascript:checkEffectlevel(0)" id="effectLevel_0">全库</a>

                  <a id="effectLevel_2" href="javascript:checkEffectlevel(2)">法律</a>

                  <a id="effectLevel_3" href="javascript:checkEffectlevel(3)">行政法规</a>

                  <a id="effectLevel_5" href="javascript:checkEffectlevel(5)">国务院部门规章</a>

                  <a id="effectLevel_4" href="javascript:checkEffectlevel(4)">地方性法规</a>

                  <a id="effectLevel_6" href="javascript:checkEffectlevel(6)">地方政府规章</a>

                  <a id="effectLevel_7" href="javascript:checkEffectlevel(7)">司法解释</a>

                </div>
              </div>
            </div>
            <span id="left" class="left opacity"></span>
          </div>
          <div class="w_search" style="text-align: center;">
            <input type="hidden" name="SiteID" value="124">
            <input id="Query" name="Query" class="w_searchText" type="text" value="">
            <input type="hidden" id="Sort" name="Sort" value="PublishTime">
            <input class="w_searchBut" type="button" value="" onclick="search()">
            <div style="padding-top:8px;clear:both;text-align: center;">
              <label style="font-size:16px"><input value="1" name="Type" type="radio" checked="&quot;checked&quot;"
                  onclick="changeType(1)">按标题检索</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <label style="font-size:16px"><input value="2" name="Type" type="radio"
                  onclick="changeType(2)">按正文检索</label>
              <!--   <span style="float:right;">最新更新：${format(ModifyTime,'yyyy-MM-dd')}</span>-->
            </div>
          </div>
          <div class="searchB" style="display:none">
            <a href="list-1_2_124.html">法律：<span key="2">1025</span></a>

            <a href="list-1_3_124.html">行政法规：<span key="3">1737</span></a>

            <a href="list-1_5_124.html">国务院部门规章：<span key="5">5816</span></a>

            <a href="list-1_4_124.html">地方性法规：<span key="4">26532</span></a>

            <a href="list-1_6_124.html">地方政府规章：<span key="6">30750</span></a>

            <a href="list-1_8_124.html" style="display:none">案例：<span key="8">0</span></a>

            <a href="list-1_7_124.html" style="display:none">司法解释：<span key="7">777</span></a>

            <a href="list-1_13_124.html" style="display:none">国外法规条例：<span key="13">0</span></a>

            <a href="list-1_15_124.html" style="display:none">领导讲话：<span key="15">0</span></a>

            <a href="list-1_16_124.html" style="display:none">中央文件：<span key="16">0</span></a>

            <a href="list-1_19_124.html" style="display:none">法规性文件：<span key="19">0</span></a>
            <a href="" style="display:none">全库<span key="0">66637</span></a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

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
