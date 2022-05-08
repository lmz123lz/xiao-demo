<template>
  <div>
    <van-image
      width="35rem"
      height="15rem"
      fit="cover"
      src="https://img1.baidu.com/it/u=886723594,944261890&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=242"
    />
    <van-notice-bar
      scrollable
      text="吃了睡,睡醒吃,没心没肺快乐加倍!我不想上班!!!!"
    />
    <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
    <van-notice-bar
      :scrollable="false"
      text="有钱没钱都不能就带了自己的肚子,一个好身体是革命的资本"
    />
    <van-switch v-model="checked" />
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          /><van-field
            v-model="qqhao"
            type="qqhao"
            name="qq"
            label="qq"
            placeholder="qq"
            :rules="[{ required: true, message: '请填写qq' }]"
          /><van-field
            v-model="shoujihao"
            type="shoujihao"
            name="手机"
            label="手机"
            placeholder="手机"
            :rules="[{ required: true, message: '请填写手机号' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            @click="onSubmit"
            round
            block
            type="primary"
            native-type="submit"
          >
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import { useRouter } from "vue-router";
import { Toast } from "vant";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const checked = ref(true);
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast("按钮");
    const username = ref("");
    const password = ref("");
    const qqhao = ref("");
    const shoujihao = ref("");
    const onSubmit = (values) => {
      console.log("submit", values);
      router.push("/dengl");
      sessionStorage.setItem("username", username.value);
      sessionStorage.setItem("password", password.value);
    };
    return {
      checked,
      onClickLeft,
      onClickRight,
      username,
      password,
      onSubmit,
      qqhao,
      shoujihao,
      Dialog
    };
  },
};
</script>

<style lang="scss" scoped></style>
