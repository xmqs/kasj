<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" :amap-manager="amapManager" :events="events" class="amap-demo">
    </el-amap>
    {{center}}
    <input type="text" v-model="searchP">
    <button @click="search">搜索</button>
    <div id="panel">
    </div>
    <div id="result">

    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  import VueAMap from 'vue-amap'
    export default {
      name: "lbsAmap",
      data: function() {
        return {
          zoom: 12,
          amapManager:{},
          center:[118.789386,32.029029],
          searchP:"",
          //markers:[],
          extensions:"",
          events: {
            'click': (e) => {
              //alert('您在[ '+e.lnglat.getLng()+','+e.lnglat.getLat()+' ]的位置点击了地图！');
              this.fromLocation = [e.lnglat.getLng(),e.lnglat.getLat()];
              this.center = [e.lnglat.getLng(),e.lnglat.getLat()];
              let marker = new AMap.Marker({
                icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                position: this.fromLocation
              });


             // marker.setMap(this.amapManager.getMap());
             /* this.markers.unshift(marker);
              if(this.markers.length == 2){
                this.markers[1].setMap(null);
                this.markers.splice(1,1);
              }*/

              this.amapManager.getMap().clearMap();

              let driving = new AMap.Driving({
                map: this.amapManager.getMap(),
                extensions:"all",
                panel:"panel"
              });
              // 根据起终点经纬度规划驾车导航路线 目前以南京禄口机场为终点
              driving.search(new AMap.LngLat(this.fromLocation[0], this.fromLocation[1]), new AMap.LngLat(118.873171, 31.731089 ));

            }
          },
          fromLoaction:[],
        };
      },

      mounted() {
        /*//基本地图加载
        var map = new AMap.Map("container", {
          resizeEnable: true,
          center: [116.397428, 39.90923],//地图中心点
          zoom: 12 //地图显示的缩放级别
        });
        //构造路线导航类
        var driving = new AMap.Driving({
          map: map,
          panel: 'panel'
        });
        // 根据起终点经纬度规划驾车导航路线
        driving.search(new AMap.LngLat(116.379028, 39.865042), new AMap.LngLat(116.427281, 39.903719));
      }*/
        this.amapManager = new VueAMap.AMapManager();

      },

      methods:{
        search(){
          var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 5,
            pageIndex: 1,
            map: this.amapManager.getMap(),
            panel: "result"
          });
          //关键字查询
          placeSearch.search(this.searchP, function(status, result) {
            //result可查看所有查询结果
          });
        }
      }
    }
</script>

<style scoped>
  .amap{
    margin-top: 96px;
  }
  .amap-demo {
    height: 700px;
  }
  #panel {
    background-color: white;
    height: 20%;
    width: 100%;
  }


  #container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 80%;
  }

  .button-group {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 12px;
    padding: 10px;
  }

  .button-group .button {
    height: 28px;
    line-height: 28px;
    background-color: #0D9BF2;
    color: #FFF;
    border: 0;
    outline: none;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    margin-bottom: 4px;
    cursor: pointer;
  }
  .button-group .inputtext {
    height: 26px;
    line-height: 26px;
    border: 1px;
    outline: none;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    margin-bottom: 4px;
    cursor: pointer;
  }
  /*
 .tip {
     position: absolute;
     bottom: 30px;
     right: 10px;
     background-color: #FFF;
     text-align: center;
     border: 1px solid #ccc;
     line-height: 30px;
     border-radius: 3px;
     padding: 0 5px;
     font-size: 12px;
 }
 */
  #tip {
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    font-size: 12px;
    right: 10px;
    top: 20px;
    border-radius: 3px;
    border: 1px solid #ccc;
    line-height: 30px;
  }

  /*
  #tip input[type='button'] {
      margin-top: 10px;
      margin-bottom: 10px;
      background-color: #0D9BF2;
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      font-size: 12px;
      border-radius: 3px;
      outline: none;
      border: 0;
  }
  */
  .amap-info-content {
    font-size: 12px;
  }

  #myPageTop {
    position: absolute;
    top: 5px;
    right: 10px;
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ccc;
    margin: 10px auto;
    padding:6px;
    font-family: "Microsoft Yahei", "微软雅黑", "Pinghei";
    font-size: 14px;
  }
  #myPageTop label {
    margin: 0 20px 0 0;
    color: #666666;
    font-weight: normal;
  }
  #myPageTop input {
    width: 170px;
  }
  #myPageTop .column2{
    padding-left: 25px;
  }
</style>
