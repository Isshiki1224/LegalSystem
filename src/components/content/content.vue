<template>
  <div>
    <div class="banner-img">
      <img src="../../assets/picture/ban5.jpg">
    </div>
    <div class="content">
      <div class="content-nav w11">
        <div class="content-left">
          <div id="map" class="map fadeInDown" data-wow-duration="2s">
            <div style="width: 100%; height: 100%;" id="allmap"></div>
          </div>
        </div>
        <div class="content-right">
          <h3 style="font-size: 20px;">中交安科(南京)安全咨询有限公司</h3>
          <p>招聘热线：18013839120</p>
          <p>合作热线：18013839120</p>
          <p>传真：</p>
          <p>联系邮箱：</p>
          <p>地址：南京市栖霞区兴智科技园A座13楼</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=4Wdhtd74HWQuVKmtoH01dtlmd14UWsi8"></script>
<script>
  import {
    MP
  } from '@/map.js'
  export default {
    data() {
      return {
        ak: '4Wdhtd74HWQuVKmtoH01dtlmd14UWsi8'
      }
    },
    beforeCreate() {
        window._bd_share_main = ''
    },
    mounted() {
      MP(this.ak).then(BMap => {
        // 在此调用api  
        var map = new BMap.Map("allmap");
        // 初始化地图,设置中心点坐标和地图级别
        var point = new BMap.Point(118.885306, 32.143857);
        map.centerAndZoom(point, 18);
        var marker = new BMap.Marker(point); // 创建标注
        marker.setTitle("中交安科(南京)安全咨询有限公司");
        map.addOverlay(marker);
        var infoWindow = new BMap.InfoWindow('<p style="color: #f7931e;font-size:14px;">' + '中交安科(南京)安全咨询有限公司' + '</p><p">地址：' +
          '南京市栖霞区兴智科技园A座13楼' + '</p"><p>电话：' + '' + '</p>');
        marker.addEventListener("click", function () {
          this.openInfoWindow(infoWindow);
        });
        marker.openInfoWindow(infoWindow);
        // 添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]
        }));
        map.setCurrentCity("南京"); // 设置地图显示的城市 此项是必须设置的

        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      })
    },
    methods: {

    }
  }

</script>
