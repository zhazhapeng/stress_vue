<template>
  <div class="result">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.GeneName }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.method }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="Protein ID" prop="ProteinID"> </el-table-column>
      <el-table-column label="Gene name" prop="GeneName"> </el-table-column>
      <el-table-column label="Condition" prop="Condition"> </el-table-column>
    </el-table>

    <v-chart class="chart" :option="option" autoresize />
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
    };
  },
  computed: {
    // 在这里定义计算属性
  },
  methods: {
    // 在这里定义方法
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
  font-weight: bolder;
  margin-left: 5%;
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
