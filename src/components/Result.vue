<template>
  <div class="container">
  <div class="result">
    
    <div class="result-header card-h">Result</div> 
    <div class="result-header alert-p">{{resultText }}</div>
    <div class="result-header alert-s">There are 1168 entries with your keyword(s).</div>
    <button style="margin: 20px 0 20px 1000px;" @click="downloadTableData">Download</button>
    
    <el-button @click="clearFilter" style="margin-bottom:20px ;">清除所有筛选条件</el-button>
    <el-table  ref="filterTable" :data="tableData"  class="my-table"  >
      
      <el-table-column type="expand" @expand-change="handleExpandChange"  >
         
        <template #default="props" >
          
          <div class="result_button">
          <button @click="toggleDiv('1')">About experiment</button>
          <button @click="toggleDiv('2')">About protein</button>
          <button @click="toggleDiv('3')">Sequence and Structure</button>
          </div>
          
        <div  v-show="isDiv1Visible == 1">
         
        <el-form label-position="left" inline class="demo-table-expand " style="display: flex; flex-direction: column; ">
          
          <el-form-item class="vertically-align" label="Condition" >
            
            <span class="vertically-align a">{{ props.row.Conditiondetail }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Sample type">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Enrichment method">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Mass spectrometer">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Search database">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="FDR">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Precursor mass tolerance">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Protease">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Variable modifications">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Fixed modification">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Decoy strategy">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Raw peptide">
            <span class="vertically-align a">{{ props.row.Sampletype }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="PRIDE accession" >
            <span class="vertically-align a">{{ props.row.Rawpeptide }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Resource">
            <span class="vertically-align a">{{ props.row.Resource }}</span>
          </el-form-item>
        
          </el-form>
      </div>
     
      <div v-show="isDiv1Visible == 2">
          
        <el-form label-position="left" inline class="demo-table-expand " style="display: flex; flex-direction: column; ">
  
          <el-form-item class="vertically-align" label="Uniprot accession">
            <span class="vertically-align">{{ props.row.From }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Entrez ID">
            <span class="vertically-align">{{ props.row.GeneID }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Genbank protein ID">
            <span class="vertically-align">{{ props.row.RefSeq }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Genbank nucleotide ID">
            <span class="vertically-align">{{ props.row.Sampletype }}</span>
          </el-form-item>
          
          <el-form-item class="vertically-align" label="Protein names">
            <span class="vertically-align">{{ props.row.Proteinnames }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Gene Names">
            <span class="vertically-align">{{ props.row.GeneNames }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Organism">
            <span class="vertically-align">{{ props.row.Organism }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="OrganismID">
            <span class="vertically-align"><a  @click="goOut(props.row.OrganismID)">{{ props.row.OrganismID}}</a></span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Function">
            <span class="vertically-align">{{ props.row.Function }}</span>
          </el-form-item>
          <el-form-item class="vertically-align" label="Sequence" >
            <span class="vertically-align" >{{ props.row.Sequence }}</span>
          </el-form-item>
          
          
          </el-form>
      </div>

      <div v-show="isDiv1Visible == 3">
          
          <el-form label-position="left" inline class="demo-table-expand">
    
            <el-form-item label="Conditiondetail">
              <span class="vertically-align">{{ props.row.Conditiondetail }}</span>
            </el-form-item>
            <el-form-item label="Sample type333333">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Enrichment method">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Mass spectrometer">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Search database">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="FDR">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Precursor mass tolerance">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Protease">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Variable modifications">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Fixed modification">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Decoy strategy">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="Raw peptide">
              <span>{{ props.row.Sampletype }}</span>
            </el-form-item>
            <el-form-item label="PRIDE accession" >
              <span>{{ props.row.Rawpeptide }}</span>
            </el-form-item>
            <el-form-item label="Resource">
              <span >{{ props.row.Resource }}</span>
            </el-form-item>
            </el-form>
        </div>
      </template>
      </el-table-column >
      <!-- <el-table-column >
        <template #header>
        <el-input v-model="search" size="mini" class="minisearch" placeholder="输入关键字搜索" />
      </template>
    </el-table-column> -->
     
      <el-table-column  label="Protein ID" prop="ProteinID" min-width="150":filters="getFiltersForColumn('ProteinID')" :filter-method="filterHandler"> </el-table-column>
      <el-table-column label="Gene name" prop="GeneName" min-width="180" :filters="getFiltersForColumn('GeneName')" :filter-method="filterHandler"></el-table-column>
      <el-table-column label="Position" prop="Position" min-width="100" column-key="position" :filters="getFiltersForColumn('Position')" :filter-method="filterHandler"></el-table-column>
      <el-table-column label="stress" prop="stress" min-width="120" :filters="getFiltersForColumn('stress')" :filter-method="filterHandler"> </el-table-column>
      <el-table-column label="Modification" prop="Modification" min-width="150" :filters="getFiltersForColumn('Modification')" :filter-method="filterHandler"> </el-table-column>
      <el-table-column label="Sequence window" prop="Sequencewindow" min-width="180" :filters="getFiltersForColumn('Sequencewindow') " :filter-method="filterHandler"> </el-table-column>
      <el-table-column label="Sample" prop="Sample" min-width="100" :filters="getFiltersForColumn('Sample')" :filter-method="filterHandler"> </el-table-column>
      <el-table-column label="Condition" prop="Condition" min-width="170" :filters="getFiltersForColumn('Condition')" :filter-method="filterHandler"></el-table-column> 
      <el-table-column label="Log2ratio" prop="Log2ratio" min-width="120" :filters="getFiltersForColumn('Log2ratio')" :filter-method="filterHandler">  </el-table-column>
      <el-table-column label="Pvalue" prop="Pvalue" min-width="100" :filters="getFiltersForColumn('Pvalue')" :filter-method="filterHandler"> </el-table-column>
    </el-table>
    
    <v-chart class="chart" :option="option" autoresize />
  </div>
</div>
</template>

<script>
import { store } from "../store.js";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
 
  props: {
    title: String,
    likes: Number,
  },

  name: "Result",
  components: {
    // 在这里注册任何子组件
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
    // [THEME_KEY]: "default",
  },
  data() {
    return {
       // 控制 div 显示与隐藏的变量  
        resultText: '',
        isDiv1Visible: 1 , 
        isDiv2Visible: false ,
        isDiv3Visible: false ,

      //输入框的变量
        input1: '',  
        input2: '',  
        input3: '',  
        input4: '',  
        input5: '',
        input6: '',  
        input7: '',  
        input8: '',  
        input9: '',  
        input10: '',
//


      tableData:[],
      // 在这里定义组件的初始数据
      option: {
        title: {
          text: "Traffic Sources",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Direct",
            "Email",
            "Ad Networks",
            "Video Ads",
            "Search Engines",
          ],
        },
        series: [
          {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            // 饼图中心位置相对整个画布
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "Direct" },
              { value: 310, name: "Email" },
              { value: 234, name: "Ad Networks" },
              { value: 135, name: "Video Ads" },
              { value: 1548, name: "Search Engines" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      searchResult: store.searchResult,
      
    };
  },
  created() {  
    const {list, name, filed, organisms, modifications} = this.searchResult;
    this.tableData = list;
    this.resultText = `Search content: Gene Name = ${name}; Organism: ${organisms}; Modification: ${modifications}`
    // 初始化时，将原始数据赋值给筛选后的数据  
  },
  mounted() {
    // 在这里执行组件挂载到 DOM 后的逻辑
    // 组件挂载后获取所有 Position 的值  
  
  },
  computed: {  
    
    
  },
  methods: {
    // 在这里定义方法
    goOut(val){
      console.log('id是:',val);
      
      window.location.href ='https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?lvl=0&id='+val;
    },
      
      handleExpandChange(row, expanded) {  
      // 处理展开行变化时的逻辑，如果需要的话  
      },  
      toggleDiv(id) {  
        // 根据传入的 divId 来切换相应的 isDivVisible 属性  
        this.isDiv1Visible = id;
        // this[`isDiv${divId}Visible`] = !this[`isDiv${divId}Visible`];  
      },

      
      clearFilter() {
        this.$refs.filterTable.clearFilter()
      },
      formatter(row, column) {
        return row.address
      },
     
      
      // handleInputChange(){
        
      //   const value = this.tableData.map(row => row.Position);  
        
        
      //   const matchingRow = this.tableData.find(row => row.Position === this.input3);  
      //   if (matchingRow) {  
      //   console.log('找到匹配的行:', matchingRow); 
        
      //   // 这里你可以根据需要处理匹配的行数据  
      //   } else {  
      //   console.log('没有找到匹配的行');  
       
      //   }  
      //   return value;
        
      // },
      // 通用函数，用于生成某列的过滤器选项  
      getFiltersForColumn(propertyName) {  
        // 提取所有不重复的属性值  
        const uniqueValues = [...new Set(this.tableData.map(row => row[propertyName]))];  
        // 将这些值转换为过滤器所需的格式：[{ text: 'Value', value: 'Value' }]  
        return uniqueValues.map(propertyName => ({ text: propertyName, value:propertyName }));  
      },  
      filterHandler(value, row, column) {
        const property = column['property']
        return row[property] === value
      },
      downloadTableData() {  
      // 将表格数据转换为文本格式  
      const dataText = this.tableData  
        .map(row => Object.values(row).join('\t')) // 使用制表符作为字段分隔符  
        .join('\n'); // 使用换行符作为行分隔符  
  
      // 创建一个隐藏的a标签用于下载  
      const link = document.createElement('a');  
      link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(dataText)}`;  
      link.download = 'table_data.txt'; // 设置下载文件名  
      link.click(); // 触发下载  
  
      // 清理创建的a标签（可选）  
      document.body.removeChild(link);  
    },  
  
  
      
      
  },
  
};
</script>

<style>
.container {  
  width: 1200px; /* 你可以设置你需要的版心宽度 */  
  margin: 0 auto; /* 水平居中 */  
  padding: 20px; /* 可选的内边距 */  
  background-color: #fff; /* 可选的背景色，用于区分版心区域 */  
}  
.result-header{
    width:1200px;
    height:65px;
    line-height:65px;
    border-collapse: collapse;
    padding-left:20px;
    margin-top:-10px;
    margin-left:-10px;  
}
.card-h{
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
    
}
.alert-p {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.alert-s {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}
.chart {
  width: 600px;
  height: 600px;
}

.demo-table-expand {
    font-size: 0;
    
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
    
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
   
  }
.btn-group{
  text-align: center;
}
button{
    width: 150px;
    height: 30px;
    color:white;
    background-color:rgba(23,162,184,.5);
    border:1px solid rgba(23,162,184,.5);
    
}
button:focus{   
    box-shadow: 0 0 0 0.2rem rgba(23,162,184,.5);
    background-color:rgba(23,162,184,.5);
    
}
/* .card_1{
  width: 500px;
  height: 200px;
  
  
} */
/* .table-expand .form-item-label {  
  float: left; 
  height: 45px;
  width: 1000px;
  line-height: 45px;
  border-bottom: 1px solid #000; 
  
  background-color: yellow;
}   */
/* 
.label-content {  
  display: inline-block;  
  
  
}   */
/* .label-content span{
  display: block;
  
  width: 600px;
  height: 45px;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  border-collapse:collapse ;
  text-align: center;
  line-height: 45px;
  background-color:yellowgreen;
} */
button{
    color:white;
    background-color:rgba(23,162,184,.5);
    border:1px solid rgba(23,162,184,.5);
    
}
button:focus{   
    box-shadow: 0 0 0 0.2rem rgba(23,162,184,.5);
    background-color:rgba(23,162,184,.5);
    
}

.result_button{
  margin-left: 400px;
}
.filter{
  background-color: yellow;
}
.demo-table-expand{
  margin-left: 100px;
}


 
.demo-table-expand .el-form-item__label {  
  /* 设置宽度，根据需要调整 */  
  width: 180px; 
  height: 70px; 
  align-items: center;
  text-align: center; /* 水平居中 */  
  justify-content: center; 
  display: flex;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;  
  border-right:0.5px solid skyblue;
}  
  
/* 如果需要设置span中的文字样式，也可以添加相应的样式 */  
.demo-table-expand .vertically-align {  
  width: 1000px;
  height: 70px; 
  align-items: center;
  justify-content: center; 
  font-family: 'Times New Roman', Times, serif;  
  font-size: 16px;
  display: flex;
  font-weight: bold;
  text-align: center; /* 水平居中 */ 
  border: 0.5px solid skyblue;
  border-collapse:collapse;
  display: flex;
  flex: 1; /* 占据可用空间 */  
  overflow: auto; /* 内容超出时显示垂直滚动条 */  
   
} 
.el-table__header-wrapper th {  
  font-family: 'Times New Roman', Times, serif; 
  border: 1px solid #ebeef5; /* 根据需要调整边框样式 */  
  font-size: 16px;
  color: black;
  font-weight: bold; /* 字体加粗 */  
}
/* 假设你的 Element UI 表格有一个特定的类名，比如 .my-table */  
.my-table .cell {  
  text-align: center;  
  vertical-align: middle;  
  font-weight: bold; 
    
}


.el-table td {  
  font-family: 'Times New Roman', Times, serif; /* 设置字体 */  
  font-size: 14px; /* 设置字体大小 */  
  border: 1px solid #ebeef5; /* 设置边框 */  
 
}
.custom-input {  
  width: 80px;  
  height: 30px;  
  padding: 0;  
  line-height: normal;  
  box-sizing: border-box; 
  margin-bottom: 0px; 
}  

::v-deep .el-table-column__header-filter-trigger {  
  color: #ff0000; /* 筛选器箭头颜色 */  
  font-size: 18px; /* 筛选器箭头大小 */  
} 
</style>
