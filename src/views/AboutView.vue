<!-- <template>  
  <div>  
    <form @submit.prevent="handleSubmit">  
      <label>  
        姓名:  
        <input v-model="name" type="text" required>  
      </label>  
      <br>  
      <label>  
        邮箱:  
        <input v-model="email" type="email" required>  
      </label>  
      <br>  
      <label>  
        选项:  
        <select v-model="selectedOption">  
          <option value="">请选择</option>  
          <option v-for="option in options" :value="option.value" :key="option.value">  
            {{ option.text }}  
          </option>  
        </select>  
      </label>  
      <br>  
      <button type="submit">提交</button>  
    </form>  
  </div>  
</template>  
  
<script>  
import axios from 'axios';  
  
export default {  
  data() {  
    return {  
      name: '',  
      email: '',  
      selectedOption: '',  
      options: [  
        { value: 'option1', text: '选项1' },  
        { value: 'option2', text: '选项2' },  
        // ...其他选项  
      ],  
    };  
  },  
  methods: {  
    async handleSubmit() {  
      try {  
        // 验证输入数据（此处省略）  
  
        // 将数据发送到后端  
        
        const response = await axios.post('/down', {  
          name: this.name,  
          email: this.email,  
          selectedOption: this.selectedOption,  
        });  
  
        // 处理响应或显示通知  
        if (response.data.success) {  
          alert('邮件发送成功！');  
        } else {  
          alert('邮件发送失败，请重试。');  
        }  
      } catch (error) {  
        console.error('提交表单时发生错误', error);  
      }  
    },  
  },  
};  
</script>

 -->

 <template>  
  <div ref="chartContainer" style="width: 100%; height: 400px;"></div>  
</template>  
  
<script>  
import * as echarts from 'echarts';  
import { BarChart } from 'echarts/charts';  
import { GridComponent, TooltipComponent } from 'echarts/components';  
  
// 注册必须的组件  
echarts.use([BarChart, GridComponent, TooltipComponent]);  
  
export default {  
  mounted() {  
    this.renderChart();  
  },  
  methods: {  
    renderChart() {  
      // 获取图表容器  
      const chartContainer = this.$refs.chartContainer;  
  
      // 初始化图表实例  
      const myChart = echarts.init(chartContainer);  
  
      // 设置图表选项  
      const option = {  
        tooltip: {  
          trigger: 'axis',  
          axisPointer: {  
            type: 'shadow'  
          }  
        },  
        legend: {  
          data: ['销量']  
        },  
        grid: {  
          left: '3%',  
          right: '4%',  
          bottom: '3%',  
          containLabel: true  
        },  
        xAxis: {  
          type: 'category',  
          boundaryGap: false,  
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']  
        },  
        yAxis: {  
          type: 'value'  
        },  
        series: [  
          {  
            name: '销量',  
            type: 'bar',  
            stack: '总量',  
            label: {  
              show: true,  
              position: 'insideRight'  
            },  
            data: [120, 200, 150, 80, 70, 110, 130]  
          }  
        ]  
      };  
  
      // 使用刚指定的配置项和数据显示图表。  
      myChart.setOption(option);  
    }  
  }  
};  
</script>  
  
<style scoped>  
/* 添加必要的样式 */  
</style>