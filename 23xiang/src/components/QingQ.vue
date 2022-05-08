<template>

  <div>    
    <van-nav-bar
    id="yy"
      title="商品详情页"
      left-text="返回"
      right-text="我的"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
  <div id="lmz">
     <img :src="imgs" alt="">
      <h3>{{ mm }}</h3>
      <h4>价格是:{{ zz }}</h4>
    </div>
</van-pull-refresh>

   
  </div>
</template>

<script>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
import { ref } from 'vue';
// import { Toast } from 'vant';
import { Toast } from "vant";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
     const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast("按钮");
    const route = useRoute();
    const imgs = route.query.imgs;
    const mm = route.query.mm;
    const zz = route.query.zz;
    const huoqu = () => {
      console.log(route.query.imgs);
    };
    onMounted(() => {
      huoqu();
    });
    return {  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,imgs, mm, zz, onClickLeft, onClickRight,count,
      loading,
      onRefresh,};
  },
};
</script>

<style lang="scss" scoped>
#lmz {
  font-size: 35px;
  // display: flex;
  background-color: antiquewhite;
}
#yy{
  background-color: aqua;
  font-size: 30px;
}
img{
display: flex;
flex-direction:"row";
}
</style>
