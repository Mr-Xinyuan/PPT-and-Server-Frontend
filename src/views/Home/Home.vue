<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <router-link class="item" to="/">主頁</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link class="item" to="/miniprogram">微信小程序</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link class="item" to="/instruction">用戶指南</router-link>
        </el-menu-item>
        <router-link class="item-login" to="/login" >登錄</router-link>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      <p>聯繫方式  188-7239-2990</p><br/>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
}
</script>

<style scoped>
.el-header {
  background-color: #e9e342;
  color: #333;
  text-align: right;
  line-height: 60px;
}
.el-footer
{
  background-color: #e9e342;
  color: #333;
  text-align: right;
}
.el-main {
  background-color: #eee;
  color: #4f5046;
  text-align: center;
}
.item{
  color: #333;
  text-decoration: none;
}
.el-menu-demo{
  background-color: #e9e342;
  color: #7c7d6d;
}
.el-menu-item{
  background-color: #e9e342;
  color: #7c7d6d;
}
.item-login{
  color: #145815;
}
</style>
