<template>
  <div id="evaluate">
    <!-- 综合评价部分 -->
    <div class="top">
      <!-- 左侧 -->
      <div class="left">
        <h1 style="color:#f9a100">3.9</h1>
        <p style="font-weight: bold">综合评分</p>
        <p class="font12" style="color:#c6c9cb">高于周边商家69.2%</p>
      </div>

      <!-- 右侧 -->
      <div class="right">
        <Card>
          <ul>
            <li v-for="(item,i) in star" :key="i">
              <a style="marginRight:5px;color:#061219;fontWeight:bold">服务态度</a>
              <span>
                <Icon type="ios-star" v-for="(n,index) in 4" :key="index"></Icon>
                <Icon type="ios-star" v-if="item.rate >= 5"></Icon>
                <Icon type="ios-star-half" v-else></Icon>
                {{ item.rate }}
              </span>
            </li>
          </ul>
          <p>
            <span style="fontSize:12px;lineHeight:28px;fontWeight:bold;marginRight:5px">送达时间:</span>
            <span style="color:#c6c9cb;fontSize:12px">44分钟</span>
          </p>
        </Card>
      </div>
    </div>

    <!-- 灰色色块 -->
    <div class="gray"></div>

    <!-- 下面评论列表部分 -->
    <div class="btn">
      <i-button type="info">全部</i-button>
      <i-button type="primary">满意</i-button>
      <i-button>不满意</i-button>
    </div>
    <p class="read">
      <van-icon name="checked" />
      <span>只查看有内容的评价</span>
    </p>
    <div v-for="(item,index) in list" :key="index" style="marginBottom:10px" class="content">
      <!-- 头像 -->
      <img :src="item.avatar" alt class="headImg" />
      <!-- 用户名、时间、内容等 -->
      <div class="evalateR">
        <!-- 用户名、评价时间 -->
        <div class="name" style="display:flex;justify-content: space-between;">
          <p>{{item.username}}</p>
          <p style="color:#c6c9cb;">{{item.rateTime |formatDate3}}</p>
        </div>

        <!-- 评星 -->
        <p>
          <van-rate v-model="item.score" style="fontSize: 12px;" />
         <span v-show="item.deliveryTime"> {{item.deliveryTime}}分钟送达</span>
        </p>

        <!-- 评价内容 -->
        <p>{{item.text}}</p>
        <!-- 推荐菜 -->
        <p class="recommend">
          <Icon type="thumbsup"></Icon>
          <span v-for="(v,i) in item.recommend" :key="i">{{v}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getevaluate } from "../api/api";
import { formatDate } from "../components/date";

export default {
  data() {
    return {
      list: [], //评论列表数组

      // 综合评分右侧星星的数据
      limitNum: 3,
      limitFrom: 0,
      star: [
        {
          rate: 3.9
        },
        {
          rate: 4.0
        }
      ]
    };
  },

  methods: {
    // 评分星星的方法
    changeLimit() {
      this.limitFrom = this.limitFrom === 0 ? 5 : 0;
    }
  },
  created() {
    getevaluate().then(res => {
      this.list = res.data.data;
      console.log(this.list);
    });
  },
  filters: {
    /*
    时间格式自定义 只需把字符串里面的改成自己所需的格式
   */

    formatDate3(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy年MM月dd日 hh:mm:ss");
    }
  }
};
</script>

<style lang="less">
#evaluate {
  font-size: 12px;
  padding: 0 20px;
  color: #061219;
  .top {
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 18px;
      h1 {
        font-size: 18px;
        margin-bottom: 5px;
      }
      p {
        line-height: 20px;
      }
      border-right: 1px solid #ddd;
      padding-right: 20px;
      text-align: center;
    }
    .right {
      li {
        line-height: 28px;
        font-size: 12px;
        .ivu-icon {
          color: #f9a100;
        }
      }
      .ivu-card-bordered {
        border: none;
      }
    }
  }
  .gray {
    height: 20px;
    background: #f3f6f6;
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
    margin-bottom: 28px;
  }
  .btn {
    margin-left: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
    .ivu-btn {
      margin-right: 5px;
    }
  }
  .read {
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #e5e8e8;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    .van-icon {
      color: #b7bbbf;
      font-size: 26px;
      margin-right: 6px;
    }
    span {
      color: #b7bbbf;
      font-size: 14px;
    }
  }
  .content {
    padding-bottom: 18px;
    border-bottom: 1px solid #e5e8e8;
    .headImg {
      height: 30px;
      width: "30px";
      border-radius: 15px;
      margin-right: 10px;
    }
    display: flex;
    .evalateR {
      .van-rate__item{
        padding-right: 0px;
        .van-icon::before {
          font-size: 12px;
        }
      }
      p {
        line-height: 20px;
      }
      .name {
        display: flex;
        justify-content: space-between;
      }
      .recommend {
        span {
          border: 1px solid #ccc;
          margin: 3px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>