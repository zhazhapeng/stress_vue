<template>
  <div class="header">
     <!-- 顶部开始 -->
     <div class="top">
        <div class="center top_c">
            <i>
                integrative database of
                <span>q</span>uantitative 
                <span>P</span>ost-
                <span>T</span>ranslational
                <span>M</span>odifications in
                <span>plants</span> 
                <span>under</span>
                <span>stress</span>
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
                    
                    <li class="active"><a href="./index.html">Home</a></li>
                    <li><a href="./browse.html">Browse</a></li>
                    <li><a href="./search.html">Search</a></li>
                    <li><a href="./download.html">Download</a></li>
                    <li><a href="./help.html">Help</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./citation.html">Citation</a></li>
                    <li  id="list"><a href="#" class="arrow-icon">LZX Lab </a>
                        <ul  id="under" style="display: none" >
                            <li ><a href="#"></a>Introduction</li>
                            <li ><a href="#"></a>Databases</li>
                            <li ><a href="#"></a>Tools</li>
                        </ul>

                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
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

  .fr {
    float: left;
  }
}
</style>