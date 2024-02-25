<template>
<div class="container">
<div class="download"><h2>Dowload</h2></div>
<div class="prompt"><p>Please submit the form to get the download link of the dataset, many thanks for your cooperation.</p></div>
<div class="prompt note"><p>Note: All the field are requied.</p></div>
<!--下拉框输入框-->
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content setsize bg-purple">
  <label class="title">Title</label>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
  </div></el-col>
  <el-col :span="9"><div class="grid-content size bg-purple">
   <label class="title">First name</label>
   <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div></el-col>
  <el-col :span="9"><div class="grid-content size bg-purple">
   <label class="title">Last name</label>
   <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content setsize bg-purple">
  <label class="title">Country/Region</label>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
  </div></el-col>
  <el-col :span="18"><div class="grid-content size_b bg-purple">
     <label class="title">Affiliation </label>
     <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content setsize bg-purple">
  <label class="title">Dataset</label>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
  </div></el-col>
  <el-col :span="18"><div class="grid-content size_b  bg-purple">
     <label class="title"> Email</label>
     <el-input v-model="input" placeholder="请输入内容"></el-input>
     <button class="submit">Submit</button>
  </div></el-col>
</el-row>
<div class="prompt prompt_note"><p>qPTMplants is ONLY freely available for academic research. For commercial usage, please contact us.</p></div>
</div>
</template>
<script>
/*下拉框输入框*/

</script>
<style>
.container{
    width:1100px;
    height:500px;
    margin:0 auto;
    
    border: .5px solid rgba(0,0,0,0.125); 
}
.download{
    width:1100px;
    height:50px;
    
    
    border: .5px solid rgba(0,0,0,0.125); 
}
.download h2{
    margin-top:20px;
    margin-left:30px;
    
}
.prompt {
    width:1100px;
    height:50px;
    font-size:15px;
    line-height:50px;
    border: .5px solid rgba(0,0,0,0.125); 
    
   
}
.prompt p{
    color:black;
}

.note{
    background:#b8daff;
     
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    /*background-color: transparent;*/
  }
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
.grid-content{
    background:white;
    
}
.setsize{
    width:150px;
    height:30px;
    margin-left:50px;
    margin-top:20px;
}
.size{
    
    width:300px;
    height:30px;
    margin-top:20px;
    
}
.size_b {
    width:720px;
    height:30px;
    margin-top:20px;
}
.submit{
    margin-top:20px;
    margin-left:550px;
    background:orange;
    border:none;
    width:150px;
    height:30px;
}
.prompt_note{
    margin-top:90px;
}
</style>