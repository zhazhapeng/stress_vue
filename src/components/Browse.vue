<template>
  <div class="browse">
    <!-- 内容开始 -->
    <section id="main" class="d-flex justify-cntent-center align-items-center">
      <div class="container" id="browse">
        <div class="card">
          <div class="card-header">
            <h5 class="font-weight-bold">Browse</h5>
          </div>

          <div id="browse-control-org">
            <!-- 顶部的图切换tag -->
            <div class="tag_area">
              <div class="tag" v-for="(item,index) in tagList" :key="index" @click="clickTag(item)">{{ item }}</div>
            </div>
            <div class="chart_area">
              <v-chart class="protein_chart" :option="proteinOption" autoresize />
            </div>
            <div class="chart_area">
              <v-chart class="condition_chart" :option="proteinOption2" autoresize />
            </div>
          </div>

          <div class="modify">
            <!-- 中部tag区域 -->
            <div class="card-tag">
              <!-- 中部的表切换tag -->
              <div class="tag_area">
                <div class="tag" v-for="(item,index) in modList" :key="index" @click="clickTag2(item.val)">{{ item.name }}</div>       
              </div>
            </div>
            <!-- table -->
            <div class="card-table">
              
              <div class="table_middle">
                <div class="table_cell" v-for="(item,index) in proteinNameList[currentPage -1]" :key="index">
                  {{ item }}
                </div>            
              </div>
              <div >
                <el-pagination
                v-show="proteinNameList.length > 0"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[ 20, 50, 70]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next"
                    :total="totalItems"
                  ></el-pagination>
              </div>

              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6 buttonInfo" id="protein-buttonInfo"></div>
              </div>
              <hr />
              <br /><br />

              <!-- <div class="tag" v-for="(item,index) in stressList" :key="index" @click="clickTag2(item.val)">{{ item.name }}</div>
                -->
              <!-- <div class="table_cell" v-for="(item,index) in proteinNameList[currentPage]" :key="index">
                  {{ item }}
              </div>       -->
            
              

            
              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6 buttonInfo" id="condition-buttonInfo"></div>
              </div>
            </div>
        </div>


        <div class="stress">
            <!-- 中部tag区域 -->
            <div class="card-tag">
              <!-- 中部的表切换tag -->
              <div class="tag_area">
                <div class="tag" v-for="(item,index) in stressList" :key="index" @click="clickTag3(item.val)">{{ item.name }}</div>       
              </div>
            </div>
            <!-- table -->
            <div class="card-table">
              
              <div class="table_middle">
                <div class="table_cell" v-for="(item,index) in stressNameList[currentPage2 - 1]" :key="index">
                  {{ item }}
                </div>            
              </div>
              <div >
                <el-pagination
                 v-show="stressNameList.length > 0"
                    @size-change="handleSizeChange2"
                    @current-change="handleCurrentChange2"
                    :current-page="currentPage2"
                    :page-sizes="[ 20, 50, 70]"
                    :page-size="pageSize2"
                    layout="total, sizes, prev, pager, next"
                    :total="totalItems2"
                  ></el-pagination>
              </div>

              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6 buttonInfo" id="protein-buttonInfo"></div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6 buttonInfo" id="condition-buttonInfo"></div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
    <!-- End Main -->
  </div>
</template>

<script>
import { store } from '../store.js'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts';
import {MtableData, MResultData} from './mockData'

use([GridComponent, BarChart, CanvasRenderer])

export default {
  name: "Footer",
  components: {
    // 在这里注册任何子组件
    VChart,
  },
  data() {
    return {
      proteinOption: {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel:{
            show:true,
            rotate: 45,
            textStyle: {  
                color: '#333', // 字体颜色  
                fontWeight: 'bold', // 字体加粗  
                fontFamily: 'Times New Roman' // 字体为新罗马  
            }  
          }
        },
        yAxis: {
          axisLabel:{
            
            
            textStyle: {  
              color: '#333', // 字体颜色  
              fontWeight: 'bold', // 字体加粗  
              fontFamily: 'Times New Roman' // 字体为新罗马  
          }  
        }},
        series: [
          {
            type: 'bar',
            data: [63, 24, 18, 25, 27, 28, 25]
            
          }
        ]
      },
      proteinOption2: {
        xAxis: {
          data: ['a', 'b', 'x', 'c', 'd', 'f', 'g'],
          axisLabel:{
            show:true,
            rotate: 45,
            textStyle: {  
                color: '#333', // 字体颜色  
                fontWeight: 'bold', // 字体加粗  
                fontFamily: 'Times New Roman' // 字体为新罗马  
            }  
          }
          
        },
        yAxis: {
          axisLabel:{
            
            
            textStyle: {  
              color: '#333', // 字体颜色  
              fontWeight: 'bold', // 字体加粗  
              fontFamily: 'Times New Roman' // 字体为新罗马  
          }  
        }},
        series: [
          {
            type: 'bar',
            data: [63, 24, 18, 25, 27, 28, 25]
          }
        ]
      },
      // 
      modList: [],
      stressList:[],
       tagList: ["Arachis hypogaea","Arabidopsis thaliana"," apple rootstock", "Actinidia chinensis", "Amborella trichopoda","Brassica napus","Brachypodium distachyon","Brassica rapa subsp. pekinensis ","Broussonetia papyrifera","Bruguiera gymnorhiza",
      "Chlamydomonas reinhardtii","Camellia sinensis","Cicer arietinum","Cucumis sativus","Capsicum annuum","Citrus sinensis","Citrus clementina","Capsella rubella","Dendranthema morifolium","Glycine max","Gossypium hirsutum","Hordeum vulgare","Hevea brasiliensis",
    "Jatropha curcas","Kandelia candel","Lactuca sativa","Musa acuminata","Manihot esculenta","Nostoc flagelliforme","Nicotiana plumbaginifolia","Nuphar advena","Neobodo saliens","Oryza sativa subsp. japonica","Oryza sativa subsp. Indica","Populus canescens",
  "Populus yunnanensis","Puccinellia tenuiflora","Populus trichocarpa","Prunus persica","Populus tomentosa","Populus euphratica","Phaseolus vulgaris","Populus tremula","Quercus rubra","Ricinus communis","Solanum lycopersicum","Solanum tuberosum","Setaria italica","Sugar Beet","Spinacia oleracea","Spinacia oleracea","Salvia miltiorrhiza","Sandersonia aurantiaca",
"Triticum aestivum","Theobroma cacao","Vitis vinifera","Volvox carteri","Zea mays"],
        // 分好页的蛋白质数组名
        proteinNameList:[],
        // 未分页，临时存储的蛋白质数组名
        tempNameList: [],
         // 分好页的胁迫数组名
         stressNameList:[],
        // 未分页，临时存储的胁迫数组名
        tempStressList: [],

        currentPage:1,
        pageSize: 70,
        totalItems:10,

        currentPage2:1,
        pageSize2: 70,
        totalItems2:10,
        
    };
  },
  computed: {
    // 在这里定义计算属性
  },
  methods: {
    // 点击标签刷新图表
    clickTag(val){
      console.log(val,'clickTag');
      this.modList = [];
      this.stressList = [];
      // 假设这是服务端提供的数据
      this.$axios.post("/browseChart", {
        data: {
          val
        }}).then(res =>{
          // 跳转到result页面,需要把查询到的信息塞到result页面里
          const {obj, obj2} = res;
          console.log(obj,'------res',obj2);
          let resdata = [];
          let resdata2 = [];

          for(let item in obj){
            let temp = {name:item,val:obj[item].length};
            let tempVal = {name:item,val:obj[item]};
            resdata.push(temp);
            this.modList.push(tempVal);
          }

          
          
          for(let item in obj2){
            let temp = {name:item,val:obj2[item].length};
            let tempVal2 = {name:item,val:obj2[item]};
            resdata2.push(temp);
            this.stressList.push(tempVal2);
          }

          // let resdata = [{name:'dapeng',val:Math.ceil(Math.random()*10) },{name:'zhupi',val:Math.ceil(Math.random()*20)}, {name:'chouzhu',val:Math.ceil(Math.random()*15)}];

          // let resdata = res.data.list;
          // this.stressList = tempVal2;
          console.log(this.modList,this.stressList,'-------aaaaaa')
          this.loadCharts(resdata);
          this.loadCharts2(resdata2);
          // this.loadTable();
        })


      
    },
    loadCharts(resdata){
      // 对数据进行简单处理
      let formatData = {categories:[], values:[]};
      resdata.forEach(item => {
        formatData.categories.push(item.name);
        formatData.values.push(item.val);
      })
      this.proteinOption.xAxis.data = formatData.categories;
      this.proteinOption.series[0].data = formatData.values;
    },
    
    loadCharts2(resdata2){
      // 对数据进行简单处理
      let formatData = {categories:[], values:[]};
      resdata2.forEach(item => {
        formatData.categories.push(item.name);
        formatData.values.push(item.val);
      })
      this.proteinOption2.xAxis.data = formatData.categories;
      this.proteinOption2.series[0].data = formatData.values;
    },
    loadTable(){

    },
    // 切换每页展示数量
    handleSizeChange(e){
      console.log('sizechange-----',e);
      this.pageSize = e;
      this.proteinNameList = this.chunkArray(this.tempNameList,this.pageSize);
    },
    // 切换页码
    handleCurrentChange(e){
      console.log('换页',e)
      this.currentPage = e;
    },
   
    // 点击刷新表格
    clickTag2(val) {
      this.tempNameList = val;
      this.totalItems = val.length;
      this.proteinNameList = this.chunkArray(val,this.pageSize);
      // console.log(this.proteinNameList, 'clickTag2');
    },


     // 切换每页展示数量
     handleSizeChange2(e){
      console.log('sizechange-----',e);
      this.pageSize2 = e;
      this.stressNameList = this.chunkArray(this.tempStressList, this.pageSize2);
    },
    // 切换页码
    handleCurrentChange2(e){
      console.log('换页',e)
      this.currentPage2 = e;
    },
   
    // 点击刷新表格
    clickTag3(val) {
      this.tempStressList = val;
      this.totalItems2 = val.length;
      this.stressNameList = this.chunkArray(val,this.pageSize2);
      // console.log(this.proteinNameList, 'clickTag2');
    },

  
    chunkArray(array,pageSize) {
      let result = [];
      for (let i = 0; i < array.length; i += pageSize) {
        result.push(array.slice(i, i + pageSize));
      }
      return result;
    },
    // 在这里定义方法
    indexMethod(index) {
      return index * 2;
    }
  },
  created() {
    // 在这里执行组件创建后的逻辑
  },
  mounted() {
    // 在这里执行组件挂载到 DOM 后的逻辑
  },
};
</script>

<style lang="scss" scoped>

#main{
  .tag_area{
    display:  flex;
    flex-wrap: wrap;
    .tag{
      // flex-grow: 1;
      // width: 200px;
      padding: 0.5rem 1rem;
      white-space: nowrap;
      border: solid 1px transparent;
    }
    :hover{
      cursor:pointer;
      border: solid 1px #e4e7ed;
    }
  }
  .chart_area{
    display:  flex;
    width: 100%;
    height: 500px;
    // background-color: pink;
  }
  .card-table{

    .table_middle{
      margin-top: 2rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      .table_cell{
        display: grid;
        width: 10rem;
        height: 2rem;
        justify-content: center;
        align-items: center;
        border: #e4e7ed solid 1px;
      }
    }
    .el-pagination{
      justify-content: center;
    }
  }
}

  // #e4e7ed
  // #b1b3b8
  // #dedfe0
  // #73767a
.footer {
  /* 在这里添加你的 CSS 样式 */

}
</style>
