<template>
  <div class="header">
     <!-- 顶部开始 -->
     <div class="top">
        <div class="center top_c">
           <i>
                integrative database of
                <span>A</span>biotic
                <span>S</span>tress-responsive
                <span>P</span>ost-
                <span>T</span>ranslational
                <span>M</span>odifications in
                <span>plants</span> 
                
            </i>
        </div>
    </div>
    <!-- 顶部结束 -->
    <!-- logo begin  -->
    <div class="logo">
        <div class="center l_c">
            <div class="l_left fl">
                <h1>
                    <a href="#">替换图片</a>
                </h1>
            </div>
            <div class="l_right fr">
                <ul>
                    <li class="active"><router-link to="/index">Home</router-link></li>
                    <li><router-link to="/browse">Browse</router-link></li>
                    <li><router-link to="/search">Search</router-link></li>
                    <li><router-link to="/download">Download</router-link></li>
                    <li><router-link to="/help">Help</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/citation">Citation</router-link></li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Header',
  components: {
    // 在这里注册任何子组件
  },
  data() {
    return {
      // 在这里定义组件的初始数据
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

<style lang="scss" scoped>
.header {
  /* 在这里添加你的 CSS 样式 */
  width: 100%;
  margin-bottom: 30px;
  .fr {
    float: left;
  }
}
</style>