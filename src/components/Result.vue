<template>
  <div class="container">
  <div class="result">
    
    <div class="result-header card-h">Result</div> 
    <div class="result-header alert-p">Search content: Gene Name = WRKY; Organism: Arabidopsis thaliana; Modification: All</div>
    <div class="result-header alert-s">There are 1168 entries with your keyword(s).</div>
   
    <el-table :data="tableData"  :cell-style="{textAlign:'left'}" style="width: 100%"  >
      <el-table-column type="expand" @expand-change="handleExpandChange"  >
        <template #default="props" >
          <div class="result_button">
          <button @click="toggleDiv('1')">About experiment</button>
          <button @click="toggleDiv('2')">About protein</button>
          <button @click="toggleDiv('3')">Sequence and Structure</button>
          </div>
        <div  v-show="isDiv1Visible == 1">
         
        <el-form label-position="left" inline class="demo-table-expand">
  
          <el-form-item label="1">
            <span class="vertically-align">{{ props.row.Conditiondetail }}</span>
          </el-form-item>
          <el-form-item label="Sample type">
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
     
      <div v-show="isDiv1Visible == 2">
          
        <el-form label-position="left" inline class="demo-table-expand">
  
          <el-form-item label="Uniprot accession">
            <span class="vertically-align">{{ props.row.From }}</span>
          </el-form-item>
          <el-form-item label="Entrez ID">
            <span>{{ props.row.GeneID }}</span>
          </el-form-item>
          <el-form-item label="Genbank protein ID">
            <span>{{ props.row.RefSeq }}</span>
          </el-form-item>
          <el-form-item label="Genbank nucleotide ID">
            <span>{{ props.row.Sampletype }}</span>
          </el-form-item>
          
          <el-form-item label="Protein names">
            <span>{{ props.row.Proteinnames }}</span>
          </el-form-item>
          <el-form-item label="Gene Names">
            <span>{{ props.row.GeneNames }}</span>
          </el-form-item>
          <el-form-item label="Organism">
            <span>{{ props.row.Organism }}</span>
          </el-form-item>
          <el-form-item label="OrganismID">
            <span><a  @click="goOut(props.row.OrganismID)">{{ props.row.OrganismID}}</a></span>
          </el-form-item>
          <el-form-item label="Function">
            <span>{{ props.row.Function }}</span>
          </el-form-item>
          <el-form-item label="Sequence">
            <span>{{ props.row.Sequence }}</span>
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
      </el-table-column>
      
      <el-table-column label="Protein ID" prop="ProteinID" min-width="100"> </el-table-column>
      <el-table-column label="Gene name" prop="GeneName" min-width="100"></el-table-column>
      <el-table-column label="Position" prop="Position" min-width="100"> </el-table-column>
      <el-table-column label="stress" prop="stress" min-width="180" :filters="[]"
      :filter-method="filterHandler"> </el-table-column>
      <el-table-column label="Modification" prop="Modification" min-width="180" :filters="[]"
      :filter-method="filterHandler"> </el-table-column>
      <el-table-column label="Sequence window" prop="Sequencewindow" min-width="180"> </el-table-column>
      <el-table-column label="Sample" prop="Sample" min-width="100"> </el-table-column>
      <el-table-column label="Condition" prop="Condition" min-width="170" :filters="[]"
      :filter-method="filterHandler"> </el-table-column>
      <el-table-column label="Log2ratio" prop="Log2ratio" min-width="90"> </el-table-column>
      <el-table-column label="Pvalue" prop="Pvalue" min-width="70"> </el-table-column>
      <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
    </el-table-column>
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
    row: {  
      type: Object,  
      required: true  
    }  
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
      
        isDiv1Visible: 1 , 
        isDiv2Visible: false ,
        isDiv3Visible: false ,
       
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
      tableData: store.searchData,
      // 初始的href基础值 
      baseUrl: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?lvl=0&id=',
    };
  },
  computed: {  
    // 计算属性，根据props.row.OrganismID动态生成完整的URL  
    
    dynamicHref() {  
      // 假设OrganismID是一个数字，我们直接将其添加到URL的末尾  
      return this.baseUrl + this.row.OrganismID;
    } 
    
  }  ,
  methods: {
    // 在这里定义方法
    goOut(val){
      console.log('id是:',val);
      // this.location.href=this.baseUrl+':'+val;
      // this.$router.replace("www.baidu.com"); 
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
  },
  created() {
    // 在这里执行组件创建后的逻辑
  },
  mounted() {
    // 在这里执行组件挂载到 DOM 后的逻辑
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

</style>
