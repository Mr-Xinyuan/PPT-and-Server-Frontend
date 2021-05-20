<template>
    <div>
        <el-row type="flex" justify="center">
             <el-col :span="12">
                <el-card shadow="always">
                    <h1>Id:</h1>        
                    <span>{{this.$storage.Info.userID}}</span>
                    <el-divider/>
                    <h1>Name:</h1> 
                    <span>{{this.$storage.Info.Name}}</span>
                    <el-divider/>
                    <h1>Group:</h1> 
                    <span>{{this.$storage.Info.Group}}</span>
                    <el-divider/>
                    <h1>School:</h1> 
                    <span>{{this.$storage.Info.School}}</span>
                    <el-divider/>
                    <h1>Identity:</h1> 
                    <span>{{this.$storage.Info.Identity}}</span>
                    <el-divider/>   
                </el-card>
             </el-col>
        </el-row>  
    </div>
</template>

<script>
export default({
    name: 'Info',
})
</script>

<style scoped>
.el-card{
  border-radius: 15px;
}
</style>