<template>
  <div id="shopcarBar">
    <ul>
      <li v-for="(obj,i) in this.shopped" :key="i">
        <p v-show="obj.num">{{obj.name}}</p>
        <div class="edit" v-show="obj.num">
          <span style="color:red">¥10</span>
          <div class="num">
            <button>-</button>
            1
            <button>+</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {
    // console.log(this.shopped)
  },
  // 计算属性
  computed: {
    list() {
      return this.$store.state.list;
    },
    shopped() {
      return [...new Set(this.$store.getters.shopped)];
    }
  }
};
</script>

<style lang="less" scoped>
#shopcarBar {
  z-index: 100;
  padding: 10px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  //   height: 100px;
  background: #fff;
  width: 100%;
  position: fixed;
  bottom: 60px;
  li {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 7px 0;
    .edit {
      display: flex;
      align-items: center;
      .num {
        display: flex;
        align-items: center;
        margin-left: 20px;
        button {
          margin: 4px;
          width: 22px;
          height: 22px;
          border-radius: 11px;
          border: none;
          color: #fff;
          background: #00a1dc;
          text-align: center;
          line-height: 22px;
        }
      }
    }
  }
}
</style>