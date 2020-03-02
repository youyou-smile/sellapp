<template>
  <div id="sellerCenter">
    <!-- 上部分 -->
    <div class="top">
      <div class="T">
        <div class="left">
          <p style="fontWeight:bold">{{seller.name}}</p>
          <van-rate v-model="seller.score" />
          ({{seller.ratingCount}})
          <span>月销售{{seller.sellCount}}</span>
        </div>
        <div class="right">
          <span>已收藏</span>
          <van-icon name="like" />
        </div>
      </div>

      <div class="B">
        <p>
          <span class="gray1">起送价</span>
          <span>
            <em>{{seller.minPrice}}</em>
            元
          </span>
        </p>
        <p>
          <span class="gray1">商家配送</span>
          <span>
            <em>{{seller.deliveryPrice}}</em>
            元
          </span>
        </p>
        <p>
          <span class="gray1">平均配送时间</span>
          <span>
            <em>{{seller.deliveryTime}}</em>
            分钟
          </span>
        </p>
      </div>
    </div>

    <!-- 灰色色块部分 -->
    <div class="gray" style="height:20px;background: #f3f6f6;"></div>

    <!-- 下部分 -->
    <div class="bottom">
      <!-- 活动公告 -->
      <div class="bulletin">
        <h1 style="fontWeight:bold">公告与活动</h1>
        <p>{{seller.bulletin}}</p>
      </div>
      <ul class="supports">
        <li v-for="v in seller.supports" :key="v.description">
          <span v-show="v.type==0">
            <img src="../assets/imgs/discount_1@2x.png" alt width="18px" height="18px" />
          </span>
          <span v-show="v.type==1">
            <img src="../assets/imgs/decrease_1@2x.png" alt width="18px" height="18px" />
          </span>
          <span v-show="v.type==2">
            <img src="../assets/imgs/special_3@2x.png" alt width="18px" height="18px" />
          </span>
          {{v.description}}
        </li>
      </ul>
      <!-- 灰色色块部分 -->
      <div class="gray"></div>

      <!-- 商家实景 -->
      <div class="sellerImg">
        <img :src="item" v-for="(item,i) in seller.pics" :key="i" width="90px" />
      </div>
      <!-- 灰色色块部分 -->
      <div class="gray"></div>

      <!-- 商家信息 -->
      <div class="info">
        <h1 style="fontWeight:bold">商家信息</h1>
        <p v-for="(info,index) in seller.infos" :key="index">{{info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/api";
export default {
  data() {
    return {
      seller: {
        id: null,
        name: "",
        description: "",
        deliveryTime: null,
        score: null,
        serviceScore: null,
        rankRate: null,
        minPrice: null,
        deliveryPrice: null,
        ratingCount: null,
        sellCount: null,
        bulletin: "",
        supports: [{ type: null, description: "" }],
        avatar: "",
        pics: "",
        infos: []
      }
    };
  },
  created() {
    getSeller().then(res => {
      this.seller = res.data.data;
      console.log(this.seller);
    });
  }
};
</script>

<style lang="less" >
#sellerCenter {
  font-size: 12px;
  padding: 0 20px;
  .top {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
    .T {
      padding: 10px 0;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        .van-icon {
          color: orangered;
        }
      }
    }
    .B {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        .gray1 {
          color: #b7bbbf;
        }
        em {
          font-size: 18px;
        }
      }
    }
  }
  .bottom {
    .bulletin {
      padding: 20px 0;
      border-bottom: 1px solid #e6e6e6;
      p {
        line-height: 24px;
        color: orangered;
        text-indent: 1em;
      }
    }
    .supports {
      li {
        line-height: 36px;
        display: flex;
        align-items: center;
        img {
          margin-right: 5px;
        }
      }
      li:not(:last-of-type) {
        border-bottom: 1px solid #e6e6e6;
      }
    }
    .gray {
      height: 20px;
      background: #f3f6f6;
      border-bottom: 1px solid #e7e7e7;
      border-top: 1px solid #e7e7e7;
      margin-bottom: 28px;
    }
    .sellerImg {
      margin-bottom: 24px;
      display: flex;
      justify-content: space-around;
      img {
        margin-right: 3px;
      }
    }
    .info{
        p{
            padding: 15px;
        }
        p:not(:last-of-type){
            border-bottom: 1px solid #e6e6e6;
        }

    }
  }
}
</style>




 