<template>
  <div class="home">
    <DingD/>
    <TuT></TuT>
    <AxiosA></AxiosA>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <ZhuC msg="Welcome to Your Vue.js App"/> -->
    <!-- <DingD msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import ZhuC from '@/views/ZhuC.vue'
import DingD from '@/components/DingD.vue'
import TuT from '@/components/TuT.vue'
import AxiosA from '@/components/AxiosA.vue'
export default {
  
  components: {
    TuT,
    DingD,
    AxiosA
  },
  name: 'HomeView',
}
</script>