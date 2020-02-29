<template>
  <div id="index">
    <div class="head">
      <!-- 头像加名字、配送等 -->
      <div class="avatar">
        <div class="blur" :style="{background: 'url(' + seller.avatar + ') repeat-x rgba(0, 0, 0, 0.1)'}"></div>
        <div class="sellerInfo">
          <img :src="seller.avatar" alt width="120px" height="120px" class='headImg'>
          <div class="avatar-right">
            <h1>
              <img src="../assets/imgs/brand@2x.png" alt="" width="32px" style="verticalAlign:middle">
              {{seller.name}}
            </h1>
            <p>{{seller.description}}{{seller.deliveryTime}}分钟到达</p>
            <p>
              <!-- 满减 -->
              <img src="../assets/imgs/decrease_1@2x.png" alt="" style="verticalAlign:middle" height="20px">
              {{seller.supports[0].description}}
            </p>
          </div>
          <p class="bulletin">{{seller.bulletin}}</p>
        </div>
      </div>
      <div class="nav">
        <p>
          <router-link to="/goods">商品</router-link>
        </p>
        <p>
          <router-link to="/evaluate">评价</router-link>
        </p>
        <p>
          <router-link to="/seller">商家</router-link>
        </p>
      </div>
    </div>

    <!-- 中间主要内容部分 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// 引入api接口
import { getSeller } from "../api/api";

export default {
  data() {
    return {
      seller: {
        id: 1,
        name: "",
        description: "",
        deliveryTime: 1,
        score: 1,
        serviceScore: 1,
        foodScore: 1,
        rankRate: 1,
        minPrice: 1,
        deliveryPrice: 1,
        ratingCount: 1,
        sellCount: 1,
        bulletin: "",
        supports: [],
        avatar: "",
        pics: [],
        infos: []
      }
    };
  },
  // 数据转换完就请求后端数据获取商家信息
  created() {
    getSeller().then(res => {
      this.seller = res.data.data;
      //   console.log(this.seller);
    });
  }
};
</script>

<style lang="less">
#index {
  .head {
    height: 200px;
    .avatar {
      position: relative;
      height: 160px;
      .blur{
        height: 100%;
        width: 100%;
        -webkit-filter: blur(5px);
        filter: blur(5px);
        position: absolute;
        top: 0;
        z-index: -10;
      }
      .sellerInfo {
        color: #fff;
        line-height: 30px;
        padding-top: 20px;
        display: flex;
        height: 120px;
        padding-left: 36px;
        align-items: center;
        h1{
          font-size: 18px;
          font-weight: bold;
        }
        .headImg{
          margin-right: 15px;
        }
        p{
          font-size: 14px;
        }
        .bulletin{
          margin-left: -20px;
          padding-left: 23px;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          position: absolute;
          bottom: 0;
          background: url('../assets/imgs/bulletin@2x.png') no-repeat 0px 9px;
          background-size:20px;
        }
      }
    }
    .nav {
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>

.blur{
        
      }