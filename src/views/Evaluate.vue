<template>
  <div id="evaluate">
    <div v-for="item in list" :key="item.text" style="marginBottom:10px" class="content">
      <!-- 头像 -->
      <img :src="item.avatar" alt width="30px" />
      <!-- 用户名、时间、内容等 -->
      <div class="evalateR">
        <!-- 用户名、评价时间 -->
        <p class="name">
          <span>{{item.username}}</span>
          <span>{{item.rateTime}}</span>
        </p>
        <!-- 评价内容 -->
        <p>{{item.text}}</p>
        <!-- 推荐菜 -->
        <div class="recommend">
          <span v-for="(v,i) in item.recommend" :key="i">{{v}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getevaluate } from "../api/api";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    getevaluate().then(res => {
      this.list = res.data.data;
      console.log(this.list);
    });
  }
};
</script>

<style lang="less" scoped>
#evaluate {
  .content {
    display: flex;
    .evalateR {
      .name {
        display: flex;
        justify-content: space-between;
      }
      .recommend{
          span{
              border: 1px solid #ccc;
              margin: 3px;
              border-radius: 5px;
              
          }
      }
    }
  }
}
</style>