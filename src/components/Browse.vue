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
              <v-chart class="condition_chart" :option="proteinOption" autoresize />
            </div>
          </div>

          <div class="card-body">
            <!-- 中部的表切换tag -->
            <div class="tag_area">
              <div class="tag" v-for="(item,index) in tagList" :key="index" @click="clickTag2(item)">{{ item }}</div>
            </div>
          </div>

          <div class="card-body">
            <!-- <span class="sub-title"
              >Browse for proteins with
              <span class="chooseMod des-highlight"></span> in
              <span class="chooseOrg des-highlight"></span
            ></span>
            <br /><br />
            <div class="card">
              <div class="card-body">
                <div class="tab-pane" id="protein-fword"></div>
              </div>
            </div>
            <br /><br /> -->
            <div>
              <span id="protein-pageInfo">{{ "Showing 1 to 25 of " + tableData.totalNum + " proteins， " }}</span>
              <select id="protein-selectColNumber" class="selectRowNumber">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5" selected="selected">5</option>
                <option value="10">10</option>
              </select>
              columns per row,
              <select id="protein-selectRowNumber" class="selectRowNumber">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              rows per page.
            </div>
            <div class="table-responsive">
              
                <el-table
                  :data="tableData.nowList"
                  style="width: 100%">
                  <el-table-column
                    type="index"
                    :index="indexMethod">
                  </el-table-column>
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>


              <!-- </table> -->
            </div>
            <div class="row">
              <div class="col-md-6"></div>
              <div class="col-md-6 buttonInfo" id="protein-buttonInfo"></div>
            </div>
            <hr />
            <br /><br />

            <span class="sub-title"
              >Browse for conditions with
              <span class="chooseMod des-highlight"></span> in
              <span class="chooseOrg des-highlight"></span
            ></span>
            <br /><br />
            <div class="card">
              <div class="card-body">
                <div class="tab-pane" id="condition-fword"></div>
              </div>
            </div>
            <br /><br />

            <div>
              <span id="condition-pageInfo"></span>,
              <select id="condition-selectColNumber" class="selectRowNumber">
                <option value="1">1</option>
                <option value="2" selected="selected">2</option>
                <option value="5">5</option>
              </select>
              columns per row,
              <select id="condition-selectRowNumber" class="selectRowNumber">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              rows per page.
            </div>
            <div class="table-responsive">
              <table
                class="table table-bordered table-hover"
                id="condition-option-show"
              >
                <tbody></tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-md-6"></div>
              <div class="col-md-6 buttonInfo" id="condition-buttonInfo"></div>
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [63, 24, 18, 25, 27, 28, 25]
          }
        ]
      },
       tagList: ["Actinidia  deliciosa","Ananas comosus","Actinidia  deliciosa", "Arabidopsis thaliana", "Araucaria  unicolor","Brachypodium distachyon","Citrus limon","Daphne purpurea"],
        activeName: 'first',
        tableData:{
          totalNum:0,
          nowList:[]
        }
    };
  },
  computed: {
    // 在这里定义计算属性
  },
  methods: {
    // 点击标签刷新图表
    clickTag(val){
      console.log(val,'clickTag');
      // 假设这是服务端提供的数据
      let resdata = [{name:'dapeng',val:Math.ceil(Math.random()*10) },{name:'zhupi',val:Math.ceil(Math.random()*20)}, {name:'chouzhu',val:Math.ceil(Math.random()*15)}];
      this.loadCharts(resdata);
      this.loadTable();
      
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
    loadTable(){

    },
    // 点击刷新表格
    clickTag2(item) {
      console.log(item, 'clickTag2');
      this.tableData = MtableData;
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

#browse-control-org, .card-body{
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
}

  // #e4e7ed
  // #b1b3b8
  // #dedfe0
  // #73767a
.footer {
  /* 在这里添加你的 CSS 样式 */

}
</style>
