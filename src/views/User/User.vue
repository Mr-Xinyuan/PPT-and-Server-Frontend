<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <el-menu  default-active="1">
                    <el-menu-item index="1">
                        <i class="el-icon-user-solid"/>
                        <router-link to="/user/info">個人信息</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-s-order"/>
                        <router-link to="/user/stu">{{members}}</router-link>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; front-size:12px">
                    <el-dropdown>
                        <i class="el-icon-s-tools" style="margin-right: 15px"/>{{this.$storage.Info.Name}}
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/user/info">個人信息</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link v-on:click.native="Logout()" to="/">退出登錄</router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>

                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default({
    name: 'User',
    beforeRouteEnter:(to, from, next)=>{
      if((from.name === 'Login') || (sessionStorage.getItem('storage'))) next();
      else next({name: 'Login'});   
    },
    data(){
        return{
            members :'學生管理'
        }
    },
    created(){
        if(this.$route.query.userName) this.$storage.Info.Name = this.$route.query.userName;
        if(sessionStorage.getItem('storage')){
            this.$storage.Info = JSON.parse(sessionStorage.getItem('storage'))
        }
        window.addEventListener('beforeunload',()=>{
            sessionStorage.setItem('storage', JSON.stringify(this.$storage.Info))
        })
        if(this.$storage.Info.Identity === 'Root')
        {
            this.data.members = '老師管理'
        } 
    },
    methods:{
        Logout()
        {
            sessionStorage.clear();
        }
    },
    destroyed(){
        sessionStorage.clear();
    }
})
</script>

<style scoped lang="css">
.el-header{
    background-color: #e9e342;
    color: #7c7d6d;
    line-height: 60px;
}
.el-aside{
    color: #7c7d6d;
}
</style>