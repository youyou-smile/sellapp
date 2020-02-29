<template>
  <div id="goods">
    <div class="left">
      <ul class="content">
        <div v-for="(item,index) in list" :key="item.name" 
        :class="{listBox:true,selected:index==indexCur}" 
        @click="clickLeft(index)">{{ item.name }}</div>
      </ul>
    </div>
    <!-- 右边商品图片加详细信息 -->
    <div class="right">
      <ul class="content">
        <div v-for="item in list" :key="item.name">
          <!-- 标题 -->
          <h1>{{ item.name }}</h1>
          <!-- 子元素 -->
          <div v-for="(v,i) in item.foods" :key="v.id" class="children" :id="i">
            <img :src="v.image" alt width="100px" />
            <div class="right_r">
              <p>{{v.name}}</p>
              <p>{{v.description}}</p>
              <p>
                <span>月售{{v.sellCount}}份</span>
                <span>好评率{{v.rating}}%</span>
              </p>
              <p>
                <span style="color:red">¥{{v.price}}</span>
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getgoods } from "../api/api";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      list: [],
      indexCur:0,  //左侧列表存索引值
    };
  },
  created() {
    getgoods().then(res => {
      this.list = res.data.data;
        // console.log(this.list)
    });
  },
  mounted() {
    // 左侧滚动板
    new BScroll(document.querySelector(".left"),{click:true});
    // 右侧滚动板
    this.rightScroll=new BScroll(document.querySelector(".right"));
  },
  methods:{
    //   左侧菜单点击事件
      clickLeft(index){
          this.indexCur=index;
          this.rightScroll.scrollToElement(document.getElementById(index),600)
      },
  }
};
</script>

<style lang="less">
#goods {
  font-size: 14px;
  display: flex;
  .left {
    background: #eee;
    width: 84px;
    height: 500px;
    overflow: scroll;
    .selected{
        // 动态点击效果样式
        background: #fff;
    }
    .listBox {
      padding: 0 5px;
      height: 60px;
      display: flex;
      align-items: center;
    }
  }
  .right {
    overflow: scroll;
    height: 500px;
    flex: 1;
    .children {
      display: flex;
    }
  }
}
</style>