<template>
  <div class="hello">
    <van-nav-bar
      id="yan"
      title="京东生鲜"
      left-text="返回"
      right-text="设置"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-notice-bar scrollable text="好消息!好消息!好消息!全场一折起！！" />

    <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
    <van-notice-bar
      :scrollable="false"
      text="水果,生鲜,零食,日用品,应有尽有!!全场一折起先到先得!!"
    />
    <van-search
      v-model="value"
      shape="round"
      background="#f60"
      placeholder="请输入搜索关键词"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://m.360buyimg.com/babel/s850x340_jfs/t1/202788/21/19990/171229/61c91a42E0d847ceb/983e2cec860a676a.png.webp"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://m.360buyimg.com/babel/s850x340_jfs/t1/173714/15/25561/157944/61caf5b7E5eac8928/322fdf27660a5a72.png.webp"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://m.360buyimg.com/babel/s850x340_jfs/t1/208773/24/13741/182407/61c574c0E6f78ddca/342d91b03e577408.png.webp"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://m.360buyimg.com/babel/s850x340_jfs/t1/211353/34/13525/186172/61c43869E9ab9fa0f/e26db762c4339445.png.webp"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  setup() {
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast("按钮");
    return {
      onClickLeft,
      onClickRight,
    };
  },
};
</script>
<style scoped lang="scss">
.my-swipe .van-swipe-item {
  color: rgb(48, 8, 122);
  font-size: 20px;
  line-height: 60px;
  text-align: center;
  background-color: rgb(27, 143, 104);
}
img {
  width: 100%;
}
#yan {
  background-color: rgb(194, 153, 19);
}
</style>
