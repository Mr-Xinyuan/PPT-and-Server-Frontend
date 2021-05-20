<template>
    <div class="block">
        <el-carousel trigger="click" height="250px">
            <el-carousel-item v-for="item in 2" :key="item">
                <el-image :src="require('../../../src/assets/'+item+'.png')" fit="fill"/>
            </el-carousel-item>
        </el-carousel>
        <el-container>
            <el-header>
                <h1>介紹</h1>
            </el-header>
            <el-main>
                <p>如今的教育过程中，学生们会参加许许多多的答辩，例如论文答辩。</p>
                <p>在參加答辯的過程中，PPT文件的分類以及学生的信息管理會存在諸多問題。</p>
                <p>PPT答辩微信小程序將解決這一切。</p>
            </el-main>
        </el-container>
        <el-container>
            <el-header>
                <h1>開源</h1>
            </el-header>
            <el-main>
                <p>PPT答辯微信小程序堅持開源的原則</p>
                <el-link href="https://github.com/weihongliang233/PPTServer">
                    <p>https://github.com/weihongliang233/PPTServer</p>
                </el-link>
                <br/>
                <el-link href="https://github.com/Mr-Xinyuan/PPTserver_frontend.git">
                    <p>https://github.com/Mr-Xinyuan/PPTserver_frontend.git</p>
                </el-link>
            </el-main>
        </el-container>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
    color: #695447;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
