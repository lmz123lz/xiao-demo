<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
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
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          @click="onSubmit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
import { Dialog } from 'vant'
// import { reactive, toRefs } from "vue";
export default {
  setup() {
    const router = useRouter();
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast("按钮");
    const username = ref("");
    const password = ref("");
    const onSubmit = () => {
      if (sessionStorage.getItem("username") !== username.value||sessionStorage.getItem("password") !== password.value) {
        Dialog.alert({
          title: "错误",
          message: "用户名或密码错误!!!",
        })
      } else {
        
        Dialog.alert({
          title: "恭喜",
          message: "登陆成功",
        })
        router.push("/shouy");
      }
    };
    return {
      onClickLeft,
      onClickRight,
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped></style>
