// 封装axios，便于各个页面调用及后期维护
import axios from 'axios';


// 创建请求对象
let req=axios.create({
    baseURL:'http://localhost:3000/',
    timeout:10000,   //设置请求超时时限，单位：ms
});

// 商家信息请求
function getSeller(){
    return req.get('api/seller');
}
// 商品列表请求
function getgoods(){
    return req.get('api/goods');
}
// 评价列表请求
function getevaluate(){
    return req.get('api/ratings');
}

export{
    getSeller, //暴露获取商家信息发口
    getgoods, //暴露商品信息
    getevaluate,
}
