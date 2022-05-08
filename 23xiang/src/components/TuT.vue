<template>
  <div>
    <div id="xuanze">
      <p class="fa fa-stethoscope">逢鲜必检</p>
      <p class="fa fa-check">优选严格</p>
      <p class="fa fa-diamond">品质资源</p>
      <p class="fa fa-snowflake-o">全程冷链</p>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li>
              <a href=""><span class="fangzi"></span><span>时令生鲜</span></a>
            </li>
            <li>
              <a href=""><span class="kezhan"></span><span>品牌上新</span></a>
            </li>
          </ul>
          <ul class="Dul">
            <li>
              <a href=""><span class="feiji"></span><span>小时达</span></a>
            </li>
            <li>
              <a href=""><span class="baobao"></span><span>千县名品</span></a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=""><span class="huoche"></span><span>中国特产</span></a>
            </li>
            <li>
              <a href=""><span class="qiche"></span><span>PLUS权益</span></a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=""><span class="lvyou"></span><span>自有品牌</span></a>
            </li>
            <li>
              <a href=""><span class="mpiao"></span><span>平价菜场</span></a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=""><span class="gonglue"></span><span>烘培速食</span></a>
            </li>
            <li>
              <a href=""><span class="meishi"></span><span>肉禽蛋品</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuT",
  props: { msg: String },
  setup() {
      
  },
};
</script>

<style lang="scss" scoped>
@import url("../assets/css/xiaotu.css");
</style>
