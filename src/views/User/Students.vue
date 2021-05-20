<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type= "index"
      label="序號"
      width="160">
    </el-table-column>
    <el-table-column
      prop="userID"
      label="用戶ID"
      width="444">
    </el-table-column>
    <el-table-column
      prop="Name"
      label="姓名"
      width="276">
    </el-table-column>
    <el-table-column
      prop="Group"
      label="組"
      width="145">
    </el-table-column>
    <el-table-column label="操作" width="235">
        <template slot-scope="scope" v-if="Identity==='Teacher'">
          <el-button type="text" icon="el-icon-download" @click="download(scope.row)" :disabled="scope.row.filename === 'null'?true : false">下载</el-button>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Students',
  data() {
    return {
      tableData: [],
      Identity:this.$storage.Info.Identity
    }
  },
  mounted(){
    this.loadData();
  },
  methods:{
    loadData(){
      if(this.$storage.Info.Password&&(this.$storage.Info.Identity==='Teacher')){
        this.$axios.get("/pptserver/", {   
                          headers: {
                            'action': "query_students_belong_to_One_Tearcher",
                          },      
                          params: {
                            userID: this.$storage.Info.userID,
                            password: this.$storage.Info.Password
                          },
                        })
                     .then(response => {
                        if(response.data.students) this.tableData = response.data.students;
                      });
      }
      if(this.$storage.Info.Password&&(this.$storage.Info.Identity==='Root')){
        this.$axios.get("/pptserver/", {   
                          headers: {
                            'action': "query_teachers_belong_to_One_Root",
                          },      
                          params: {
                            userID: this.$storage.Info.userID,
                            password: this.$storage.Info.Password
                          },
                        })
                     .then(response => {
                        if(response.data.students) this.tableData = response.data.teachers;
                      });
      }
    },
    download(row) {
      this.$axios.get("/pptserver/", {
                        headers: {
                          "action": "download"
                        },
                        responseType: "blob",
                        params: {
                            userID: row.userID,
                        }
                      })
                      .then(response => {

                        const blob = new Blob([response.data], {
                          type: "application/vnd.ms-pptx;charset=utf-8"
                        });
                        const url = window.URL.createObjectURL(blob);
                        const aLink = document.createElement("a");

                        aLink.href = url;
                        
                        aLink.setAttribute("download", row.Name + "_" + row.userID + ".pptx"); // 下载的文件
                        document.body.appendChild(aLink);
                        aLink.click();

                        document.body.removeChild(aLink);
                        window.URL.revokeObjectURL(url);
                      });
    }
  }
}
</script>
