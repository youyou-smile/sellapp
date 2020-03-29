<template>
  <div id="goods">
    <!-- 左边list列表 -->
    <div class="left">
      <ul class="content">
        <div v-for="(item,index) in list" :key="item.name" :class="{listBox:true,selected:index==indexCur}" @click="clickLeft(index)">
          <span v-show="item.type==1">
            <img src="../assets/imgs/discount_1@2x.png" alt />
          </span>
          <span v-show="item.type==2">
            <img src="../assets/imgs/decrease_1@2x.png" alt />
          </span>
          <span v-show="item.type==3">
            <img src="../assets/imgs/special_3@2x.png" alt />
          </span>
          <span v-show="item.type==4">
            <img src="../assets/imgs/invoice_3@2x.png" alt />
          </span>
          {{ item.name }}
        </div>
      </ul>
    </div>

    <!-- 右边商品图片加详细信息 -->

    <!-- shopcarBar组件 -->
    <!-- <shoppingCar v-show="this.show  && this.total"></shoppingCar> -->
    <!-- 蒙版层 -->
    <!-- <meng v-show="this.show && this.total>0"></meng> -->
  </div>
</template>

<script>
// import shoppingCar from "../components/ShoppingCar";
// import meng from "../components/Meng";
import { getgoods } from "../api/api";
// import BScroll from "better-scroll";

export default {
  data () {
    return {
      indexCur: 0, //左侧列表存索引值
      show: false //是否显示所选商品
    };
  },

  components: {
    // shoppingCar,
    // meng
  },

  created () {
    getgoods().then(res => {
      // 调用vuex的commit方法更改vuex仓库数据
      this.$store.commit("list", res.data.data);
      // console.log(this.$store.state.list);
    });
    // 存商品名称和已选数量至仓库
    var arr = [];
    this.list.forEach(obj => {
      obj.foods.forEach(food => {
        arr.push({ name: food.name, num: this.num });
      });
    });
  },

  mounted () {
    // 左侧滚动板
    // new BScroll(document.querySelector(".left"), { click: true });
    // 右侧滚动板
    // this.rightScroll = new BScroll(document.querySelector(".right"), {
    // click: true,
    // probeType: 3
    // });
    // this.rightScroll.on("scroll", ({ y }) => {
    //   let _y = Math.abs(y);
    //   for (let divObj of this.getMath) {
    //     if (_y >= divObj.min && _y < divObj.max) {
    //       this.indexCur = divObj.index;
    //       console.log(divObj);
    // return; //结束剩下的循环
    // }
    // }
    // });
  },

  methods: {
    //   左侧菜单点击事件
    clickLeft (index) {
      this.indexCur = index;
      this.rightScroll.scrollToElement(document.getElementById(index), 600);
    },
    // 点击购物车出现所选商品函数
    showCar () {
      this.show = !this.show;
    },
    // 点击添加商品按钮
    change (n, i, index) {
      var numBelong = this.list[i].foods[index].num + n; //相当于给foods下面每个对象增加了num属性
      this.$store.commit("num", { i, index, numBelong });

      if (this.total > 0) {
        document.getElementById("car").classList.add("carColor");
      } else {
        document.getElementById("car").classList.remove("carColor");
      }
    }
  },
  computed: {
    // 右联左算法
    getMath () {
      let arr = [];
      let total = 0; //之前所有div高度的累加
      for (let i = 0; i < this.list.length; i++) {
        let curDivHeight = document.getElementById(i).offsetHeight;
        arr.push({ min: total, max: total + curDivHeight, index: i });
        total += curDivHeight;
      }
      return arr;
    },

    // 返回 VUEX仓库数据,用于页面渲染
    list () {
      return this.$store.state.list;
    },
    // 计算总价
    total () {
      var total = 0;
      for (let i = 0; i < this.list.length; i++) {
        for (let j = 0; j < this.list[i].foods.length; j++) {
          total += this.list[i].foods[j].num * this.list[i].foods[j].price;
        }
      }
      return total;
    }
  }
};
</script>

<style lang="less">
#goods {
  background: orange;
  flex: 1;
  // height: 100%;
  display: flex;
  font-size: 14px;
  .left {
    padding: 0 5px;
    background: #eee;
    width: 100px;
    overflow: auto;
    .selected {
      // 动态点击效果样式
      margin: 0 -5px;
      text-indent: 5px;
      background: #fff;
    }
    .listBox {
      padding: 0 5px;
      height: 65px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #dcdfdf;
      img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
        vertical-align: super;
      }
    }
  }
  .right {
    h1 {
      background: #eee;
      text-indent: 8px;
      color: #969da2;
      line-height: 34px;
      border-left: 1px solid #d9dde1;
    }
    overflow: scroll;
    height: 100%;
    flex: 1;
    .children {
      padding: 1px 0;
      display: flex;
      p {
        line-height: 24px;
      }
      .van-icon-add {
        color: #00a1dc;
      }
      .reduce {
        height: 20px;
        width: 20px;
        border-radius: 10px;
        border: none;
        line-height: 20px;
      }
    }
  }
  // 购物车______________________________
  .shoppingCar {
    z-index: 101;
    padding-left: 92px;
    width: 100%;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #131d27;
    .send {
      display: flex;
      justify-content: space-around;
      align-items: center;
      p {
        line-height: 60px;
      }
    }
    .ivu-icon-ios-cart {
      position: absolute;
      bottom: 6px;
      left: 10px;
      padding: 10px;
      font-size: 44px;
      background: #2a343c;
      border-radius: 50%;
      color: #7f8689;
    }
    .carColor {
      color: orange;
    }
  }
}
</style>