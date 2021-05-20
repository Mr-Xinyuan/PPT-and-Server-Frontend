<template>
    <div style=" height: 1250px;">
        <el-row style=" height: 425px;">
            <h3>小程序二維碼</h3>
            <div class="demo-image__lazy">
                <el-image :src="require('../../../src/assets/miniprogram.png')" fit="contain" style="height: 150px" lazy/>
            </div>
            <h3>產品展示</h3>
            <p>學生界面</p>
            <div class="demo-image__lazy">
                <el-image :src="require('../../../src/assets/student.png')" fit="contain" style="height: 420px" lazy/>
            </div>
            <p>老師界面</p>
            <div class="demo-image__lazy">
                <el-image :src="require('../../../src/assets/teacher.png')" fit="contain" style="height: 420px" lazy/>
            </div>  
        </el-row> 
    </div>
</template>
