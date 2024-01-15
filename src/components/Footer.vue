<template>
  <div class="footer">
    <!-- 底部开始 -->
    <div class="foot">
      <div class="center f_c">
        <div class="f_up">
          <div>
            <h4>USEFUL LINKS</h4>
            <ul>
              <li><a class="arrow-icon1" href=""> Home</a></li>
              <li><a class="arrow-icon1" href=""> Browse</a></li>
              <li><a class="arrow-icon1" href=""> Search</a></li>
              <li><a class="arrow-icon1" href="">Download</a></li>
              <li><a class="arrow-icon1" href=""> Help</a></li>
              <li><a class="arrow-icon1" href=""> About</a></li>
              <li><a class="arrow-icon1" href=""> Citation</a></li>
            </ul>
          </div>
          <div>
            <h4>OUR DATABASES</h4>
            <ul>
              <li>
                <a
                  class="arrow-icon1"
                  href="http://dbebv.omicsbio.info"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="a database of Epstein-Barr virus variants and their correlations with human health"
                  >dbEBV</a
                >
              </li>
              <li>
                <a
                  class="arrow-icon1"
                  href="http://dbricepro.omicsbio.info"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="a database of protein phosphorylation dynamics in rice"
                >
                  dbRicePro</a
                >
              </li>
              <li>
                <a
                  class="arrow-icon1"
                  href="http://gutmega.omicsbio.info"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="a database of the human gut metagenome atlas"
                >
                  gutMEGA
                  </a>
              </li>
              <li>
                <a
                  class="arrow-icon1"
                  href="http://ihypoxia.omicsbio.info"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="an integrative database for hypoxia associated proteins in mammals"
                >
                  iHypoxia</a
                >
              </li>
              <li>
                <a
                  class="arrow-icon1"
                  href="http://icysmod.omicsbio.info"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="an integrative database for protein cysteine modifications in eukaryotes"
                >
                  iCysMod</a
                >
              </li>
              <li>
                <a
                  class="arrow-icon1"
                  href="http://qphos.omicsbio.info"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title=" a database of protein phosphorylation dynamics in humans"
                >
                  qPhos</a
                >
              </li>
              <li>
                <a
                  class="arrow-icon1"
                  href="http://qptm.omicsbio.info"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="the updated database of protein PTM dynamics in human"
                >
                  qPTM</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h4>OUR TOOLS</h4>
            <ul>
              <li><a class="arrow-icon1" href="">cPhosBac</a></li>
              <li><a class="arrow-icon1" href="">DeepCalpain</a></li>
              <li><a class="arrow-icon1" href="">DeepGSH</a></li>
              <li><a class="arrow-icon1" href="">Deep-PLA</a></li>
              <li><a class="arrow-icon1" href="">DrugCVar</a></li>
              <li><a class="arrow-icon1" href="">dSCOPE</a></li>
              <li><a class="arrow-icon1" href="">pCysMod</a></li>
              <li><a class="arrow-icon1" href="">prkC-PSP</a></li>
            </ul>
          </div>
          <div>
            <h4>About qPTMplants</h4>
            <br />
            <p>
              qPTMplants is an integrative database of<br />
              quantitative post-translational <br />
              modifications in plants, which curated <br />
              and hosted the published 23 types of <br />
              PTMs including 429,821 sites on <br />
              123,551 proteins in 43 plant species.
            </p>
            <br />
            <h3>Statement</h3>

            <p>
              qPTMplants will not obtain the user's<br />
              private information in any way, including <br />
              IP address and geographic location.<br />
            </p>
          </div>
        </div>
      </div>
      <div class="f_down">
        <div class="f_down_center">
          Copyright © All rights reserved.
          <a href="http://lzx.cancerbio.info" target="_blank"
            >Zexian Liu@SYSUCC</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
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
.footer {
  /* 在这里添加你的 CSS 样式 */
}
</style>
