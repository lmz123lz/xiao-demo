<template>
  <div>
    <!-- <button @click="huoqu">点击获取</button> -->
    <li v-for="item in arr" :key="item">
      <van-card
        id="yan"
        :price="item.sales"
        :desc="item.title"
        title="商品"
        :thumb="item.tupian"
      >
        <template #footer>
          <van-button size="mini" id="yan2" @click="xiang(item.uid,item.imgs,item.mm,item.zz)">选择</van-button>
        </template>
      </van-card>
    </li>
    <li>11</li>
    <li>1</li>
    <li>1</li>
    <van-sticky :offset-bottom="0" position="bottom">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" id="dibu2">我的</van-tabbar-item>
        <van-tabbar-item icon="search" id="dibu2" dot>搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o" id="dibu2" badge="5">朋友</van-tabbar-item>
        <van-tabbar-item icon="setting-o" id="dibu2" badge="20">设置</van-tabbar-item>
      </van-tabbar>
    </van-sticky>
  </div>
</template>

<script>
import { shuju } from "../http/api.js";
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
// import { Sticky } from "vant";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const data = reactive({
      arr: [],
    });
    const router = useRouter();
    const huoqu = () => {
      shuju({
        type: "shuju",
        data: {
          sort: "加载...",
        },
      })
        .then(function (res) {
          // console.log(res);
          res.datas.forEach((val) => {
            data.arr.push(val);
            // console.log(val);
          });
          data.arr = res.newslist;
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const xiang =(uid,imgs,mm,zz)=>{  
      console.log(imgs);
      router.push({path:'/xiangq', query:{id:uid ,imgs:imgs,mm:mm,zz:zz}})
    }
    onMounted(() => {
      huoqu();
    });
    return { ...toRefs(data),xiang };
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
#yan {
  background-color: rgb(208, 226, 173);
}
#yan2 {
  background-color: violet;
}
#dibu2 {
  background-color: aquamarine;
}
</style>
