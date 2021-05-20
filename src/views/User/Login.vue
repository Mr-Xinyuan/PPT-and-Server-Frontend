<template>
<div id="Login">
  <el-row type="flex" justify="center">
    <el-col :span="6">
      <div class="grod-content"/>
    </el-col>
  </el-row>

  <el-row type="flex" justify="center">
    <el-col :span="6">
      <el-card shadow="always">
          <h1 style="text-align: center;">登錄</h1>
          <hr>
          <el-form :model="userForm" ref="userForm" label-width="70px" class="demo-ruleForm">
            <el-form-item label="用戶" prop="userID" 
            :rules="[
                { required: true, message: '用戶不能为空', trigger: 'blur'}
              ]">
              <el-input type="text" placeholder="请输入用戶ID" v-model="userForm.userID" autocomplete="off"/>
            </el-form-item>

            <el-form-item label="密碼" prop="password" 
            :rules="[
                { required: true, message: '密碼不能为空', trigger: 'blur'}
              ]">
              <el-input type="text" placeholder="请输入密码" v-model="userForm.password" show-password/>
            </el-form-item>

            <el-form-item class="submit-item">
              <el-button type="primary" @click="submitForm('userForm')">登錄</el-button>
              <el-button type="primary" @click="resetForm()">重置</el-button>
            </el-form-item>
          </el-form>  
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        userForm: {
          userID: '',
          password: ''
        }
      };
    },
    methods: {
      resetForm(){
        this.userForm.userID='';
        this.userForm.password='';
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          this.$axios.get("/pptserver", {   
                            headers: {
                              'action': "query",
                            },      
                            params: {
                                userID: this.userForm.userID,
                                password: this.userForm.password
                            }
                          })
          .then(response => {
            if(response.data.msg === 'fail')
            {
              this.$message('密碼錯誤');
            }
            else
            {
              this.$storage.Info.Password = this.userForm.password;
              this.$storage.Info.School = response.data.School;
              this.$storage.Info.Group = response.data.Group;
              this.$storage.Info.Identity = response.data.Identity;
              this.$storage.Info.userID = this.userForm.userID;

              this.$router.push({
                                  path: '/user',
                                  query: {
                                    userName: response.data.Name
                                  }
                               })
            }
          })            
          } else {
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
.el-card{
  border-radius: 30px;
  width: 380px;
}
.grod-content{
  border-radius: 4px;
  min-height: 80px;
}
.el-row{
  margin-bottom: 20px;
}
.el-form-item{
  text-align: center;
}
</style>