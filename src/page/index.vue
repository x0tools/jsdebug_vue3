<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header ></Header>
      </el-header>
      <el-main>
        <el-backtop :right="100" :bottom="100" />
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  },
  setup() {
    return {}
  }
}
</script>
<style scope >
* {
  margin: 0;
  padding: 0;
  
}
body{
  background-color: var(--el-bg-color);
}
.el-header{
  background-image: radial-gradient(transparent 1px,var(--el-bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0px;
  
}
.el-main{
  padding: 70px 0 0 0;
}

.testdiv{
  width: 100%;;
  height: 2000px;
}
</style>
