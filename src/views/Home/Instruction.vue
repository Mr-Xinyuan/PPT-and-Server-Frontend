<template>
 <el-container>
    <el-header>
        <el-steps :active="active" simple>
            <el-step title="步骤 1" icon="el-icon-mobile-phone"/>
            <el-step title="步骤 2" icon="el-icon-circle-plus-outline"/>
            <el-step title="步骤 3" icon="el-icon-mobile-phone"/>
            <el-step title="步骤 4" icon="el-icon-upload"/>
            <el-step title="步骤 5" icon="el-icon-user"/>
            <el-step title="步骤 6" icon="el-icon-document"/>
        </el-steps>
    </el-header>
    <el-main>
        <el-row style=" height: 380px;"> 
            <el-col :span="12" :offset="6" v-if="active==0">
                <h3>準備</h3>
                <br/>
                <p>PPT答辩微信小程序是一款網頁與小程序相結合的APP</p>
                <br/>
                <p>首先，準備一個身份為老師的賬號</p>
            </el-col>
            <el-col :span="12" :offset="6" v-if="active==1">
                <h3>登錄微信小程序（老師）</h3>
                <br/>
                <p>點擊頁面上的“log in”按鈕</p>
                <br/>
                <p>進入登錄頁面</p>
                <br/>
                <p>輸入用戶ID與密碼</p>
                <br/>
                <p>點擊“LOGIN”按鈕</p>
            </el-col>
            <el-col :span="12" :offset="6" v-if="active==2">
                <h3>添加學生ID</h3>
                <br/>
                <p>點擊頁面上的“add student”按鈕</p>
                <br/>
                <p>填寫學生先關信息</p>
                <br/>
                <p>提交表單</p>
            </el-col>
            <el-col :span="12" :offset="6" v-if="active==3">
                <h3>登錄微信小程序（學生）</h3>
                <br/>
                <p>點擊頁面上的“log in”按鈕</p>
                <br/>
                <p>進入登錄頁面</p>
                <br/>
                <p>輸入用戶ID與密碼</p>
                <br/>
                <p>點擊“LOGIN”按鈕</p>
            </el-col>
            <el-col :span="12" :offset="6" v-if="active==4">
                <h3>上傳PPT文件</h3>
                <br/>
                <p>點擊頁面上的“upload”按鈕</p>
                <br/>
                <p>輸入文件名</p>
                <br/>
                <p>選擇文件“choose file”</p>
                <br/>
                <p>點擊“upload file”按鈕</p>
            </el-col>
            <el-col :span="12" :offset="6" v-if="active==5">
                <h3>頁面登錄賬號（老師）</h3>
                <br/>
                <p>點擊頁面右上角的“登錄"按鈕</p>
                <br/>
                <p>輸入賬戶ID與密碼，並登錄</p>
            </el-col>
            <el-col :span="12" :offset="6" v-if="active==6">
                <h3>查看學生信息</h3>
                <br/>
                <p>點擊學生管理，查看</p>
                <br/>
                <p>點擊“下載”鏈接，下載相關學生的PPT文件</p>
            </el-col>
            <el-col :span="12" :offset="6" v-if="active==7">
                <h3>結束</h3>
                <br/>
                <p>開始，使用吧</p>
                <br/>
                <p>“PPT答辯微信小程序，讓文件管理變得簡單”</p>
            </el-col>
        </el-row>   
        <el-button v-if="active!=0" style="margin-top: 12px;" @click="back">上一步</el-button>
        <el-button v-if="active!=7" style="margin-top: 12px;" @click="next">下一步</el-button>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 7) this.active--;
      },
      back() {
        if (this.active-- < 0) this.active++;
      }
    }
  }
</script>
