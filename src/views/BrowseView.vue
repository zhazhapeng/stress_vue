<template>
<div class="container">
    <div class="card">
        <div class="browse">Browse</div>
        <div class="browse-con">
            <el-tabs type="border-card">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            <el-tab-pane label="用户管理">sdf</el-tab-pane>
            <el-tab-pane label="配置管理">djfjgkg</el-tab-pane>
            <el-tab-pane label="角色管理">dfhsidiod</el-tab-pane>
            <el-tab-pane label="定时任务补偿">hsidodooehff</el-tab-pane>
            <el-tab-pane label="用户管理">用户dfjsblsdf</el-tab-pane>
            <el-tab-pane label="配置管理">dfjdjhfnfnddj</el-tab-pane>
            <el-tab-pane label="角色管理">erriwiii</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <div class="card-body-first">
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">1</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">2</div></el-col>
            </el-row>
        </div>
        <div class="card-body-mid">
            <div id='browse-control-mod'>
              <ul class="nav nav-tabs">
          
              </ul>
            </div>
        </div>

        <div class="card-pro-con">
          <span class="sub-title">Browse for proteins with <span class="chooseMod des-highlight"></span> in <span class="chooseOrg des-highlight"></span></span>
          <br><br>
          <div class="pro-con">
            <div class="card-body-pro"><div class="tab-pane" id="protein-fword"></div></div>
          </div>
          <br><br>
          <div>
            <span id="protein-pageInfo"></span>, 
            <select id='protein-selectColNumber' class="selectRowNumber">
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='5' selected="selected">5</option>
              <option value='10'>10</option>
            </select> columns per row, 
            <select id='protein-selectRowNumber' class="selectRowNumber">
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
            </select> rows per page.
          </div>
          <div class="table-responsive">
            <table class="table table-bordered table-hover" id="protein-option-show"><tbody></tbody></table>
          </div>
          <div class="row">
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
          </div>
          <hr>
          <br><br>

          
    </div>
</div>
</div>
</template>
<script></script>
<style>
body{
     font-family: Arial, sans-serif; 
     font-size:20px; 
}
.container{
    width: 1100px; /* 可以根据需要调整宽度 */ 
    height:2000px;
    display:flex;
    margin: 30 auto; /* 水平居中 */  
    padding:-12px;
    padding-right: 0; 
    padding-left: 0; 
    margin-right: auto;
    border: .5px solid rgba(0,0,0,.125);
    
}
.card{
    width:1100px;
    height:2000px;
    background-color: rgba(0,0,0,.03);
    border-bottom: .5px solid rgba(0,0,0,.125);
}
.browse{
    margin-left:20px;
    height:57px;
    line-height:57px;
    
}
.browse-con{
    width:1100px;
    height:290px;
   
}
.card-body-first{
    width:1100px;
    height:440px;
    background:pink;
}
.card-body-mid{
    margin-top:100px;
}
。des-highlight{
    color:red;
}
</style>