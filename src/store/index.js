import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 存放数据
    state: {
        // 存商品信息
        list: [],

        // 存商家信息
        seller: {
            id: null,
            name: '',
            description: '',
            deliveryTime: null,
            score: null,
            serviceScore: null,
            rankRate: null,
            minPrice: null,
            deliveryPrice: null,
            ratingCount: null,
            sellCount: null,
            bulletin: '',
            supports: [
                { type: null, description: '' },
            ],
            avatar: '',
            pics: '',
            infos: []
        },

    },

    // 存放改变state的执行函数
    mutations: {
        list(state, newArr) {
            state.list = newArr; //将vuex里的state属性的list数组改为Goods.vue里axios获取到的商品列表
        },

        //  修改商家信息执行函数  ,无意义函数
        seller(state, newObj) {
            state.seller = newObj; //将仓库里的seller{}对象数据修改为index.vue里请求到的商家信息
        },

        //    修改商品数量函数
        num(state, newobj) {
            state.list[newobj.i].foods[newobj.index].num = newobj.numBelong;//给对象定义num属性并赋值
        }


    },

    getters:{
       shopped(state){
           var arr=[];
           state.list.forEach(v=>{
               arr.push(...(v.foods.filter(obj=>obj.num>0)));
           });
           return arr; //选出num大于0的foods下属对象
       },
    //    计算总价
    //    total(){
    //     var total=0;
    //     this.
    //    }
    }
})






