<template>
  <div id="index">
    <Layout>
      <!-- 头部 -->
      <Header>
        <!-- 头像、名称部分 -->
        <div class="top" :style="{backgroundImage:'url('+seller.avatar+')'}">
          <Row class="header">
            <i-col span="8">
              <img :src="seller.avatar" alt="">
            </i-col>
            <i-col span="16">
              <h1>{{seller.name}}</h1>
              <p>
                {{seller.description}}
                {{seller.deliveryTime}}分钟到达
              </p>
              <p>
                <img src="../assets/imgs/decrease_1@2x.png" alt />
                {{seller.supports[0].description}}
              </p>
            </i-col>
          </Row>
          <p class="bulletin">
            <img src="../assets/imgs/bulletin@2x.png" alt="">
            {{seller.bulletin}}
          </p>
        </div>
        <!-- 商品、评价、商家 -->
        <Row class="nav">
          <i-col span="8">商品</i-col>
          <i-col span="8">评价</i-col>
          <i-col span="8">商家</i-col>
        </Row>
      </Header>

      <!-- 中间内容 -->
      <Content>
        <router-view></router-view>
      </Content>

      <!-- 构物车 -->
      <Footer>Footer</Footer>
    </Layout>
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
      // console.log(this.seller.supports[0].description);
    });
  }
};
</script>

<style lang="less">
#index {
  .ivu-layout-header {
    // background: url("../assets/imgs/bg.jpg");
    height: 200px;
    color: #fff;
    .top {
       position: relative;
       height: 160px;
      .header {
        height: 132px;
        .ivu-col {
          text-align: center;
        }
        .ivu-col-span-8{ 
          img{
            widows: 120px;
            height: 120px;
          }
        }
        .ivu-col-span-16 {
          p {
            text-align: left;
            font-size: 14px;
            line-height: 24px;
            img {
              vertical-align: middle;
            }
          }
          h1 {
            height: 36px;
            line-height: 36px;
            text-align: left;
            padding-left: 64px;
            background: url("../assets/imgs/brand@2x.png") no-repeat;
          }
        }
      }
      .bulletin{
        line-height: 28px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height:28px;
        width: 100%;
        position: absolute;
        bottom: 0;
        img{
          vertical-align: middle;
        }
      }
    }
    .nav {
      margin: 0 -50px;
      background: #fff;
      text-align: center;
      line-height: 40px;
      height: 40px;
      color: #333;
    }
  }
  .ivu-layout-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #333;
  }
}
</style>