
<template>

<div class="header">
     <div class="h">
      <div class="card-header">Result</div>
      <div class="card-border1">2</div>
      <div class="card-border2">3</div>
     </div>
     <div class="card-bord">
      <div class="form">
        <div class="form1">
            <el-select v-model="value1" multiple class="select_mul" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
                >
                </el-option>
              </el-select>
              <el-checkbox v-model="checked1"></el-checkbox>

              <el-select
                v-model="value2"
                multiple
                class="select_mul"
                collapse-tags
                
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-checkbox v-model="checked1"></el-checkbox>

              <el-select
                v-model="value3"
                multiple
                class="select_mul"
                collapse-tags
  
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-checkbox v-model="checked1"></el-checkbox>
              
              <el-select
                v-model="value4"
                multiple
                class="select_mul"
                collapse-tags
                
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-checkbox v-model="checked1" class="el-checkbox"></el-checkbox>
            </div>
            
        <el-button  type="primary" style="width:200px;margin-top:20px;margin-right:60px;">Filter</el-button>
      </div>
      <div class="row">
       <el-checkbox class="download" v-model="checked1" label="Download with labelled"></el-checkbox>
       <el-button class="download" type="primary">Download</el-button>
      </div>
     </div>
     
</div>
<div class="content">
<el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{prop: 'date', order: 'descending'}"
  >
  <el-table-column type="expand" width="180">1</el-table-column>
    <el-table-column prop="date" label="日期" sortable width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" sortable width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址" :formatter="formatter">
    </el-table-column>
  </el-table>
</div>  


<!--分页-->

<div class="block">
    <span class="demonstration"></span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div> 
 
</template>


<script>
export default {
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
          },
          {
            value: '选项4',
            label: '龙须面',
          },
          {
            value: '选项5',
            label: '北京烤鸭',
          },
        ],
        value1: [],
        value2: [],
        value3: [],
        value4: [],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
      }
    },
  }
</script>

<style>
.card-header{
  weight:1160px;
  height:60px;
  font-size:22px;
  line-height:60px;
  padding:0 30px;
  background:rgba(0,0,0,0.125);
  border: .5px solid rgba(0,0,0,0.125);  

}
.card-border1{
  weight:1160px;
  height:60px;
  background:#b8daff;
  border: .5px solid rgba(0,0,0,0.125);  
}
.card-border2{
  weight:1160px;
  height:60px;
  background:#c3e6cb;
  border: .5px solid rgba(0,0,0,0.125);  
}
.card-bord{
  width:1160px;
  height:180px;
  
  border: .5px solid rgba(0,0,0,0.125); 
}
.form{
  width:1160px;
  display: flex; 
}
.form1{
  width:990px;
  display: flex;
   
}
.select_mul{
  width:150px;
  height:30px;
  margin-left:20px;
  margin-top:20px;
}
.el-checkbox{
  margin-left:10px;
  margin-top:20px;
}
.input-item{
  margin-right:10px
}

.row{
  height:80px;
  margin-top:30px;
  flex-direction: column;
  
}

.row .download{
  margin-top:5px;
  margin-left:920px;
  width:180px;
  
}
</style>