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
              <li><a class="arrow-icon1" href="http://cbacphos.omicsbio.info/">cPhosBac</a></li>
              <li><a class="arrow-icon1" href="http://deepcalpain.omicsbio.info/">DeepCalpain</a></li>
              <li><a class="arrow-icon1" href="http://deepgsh.omicsbio.info/">DeepGSH</a></li>
              <li><a class="arrow-icon1" href="http://deeppla.omicsbio.info/">Deep-PLA</a></li>
              <li><a class="arrow-icon1" href="http://drugcvar.omicsbio.info/">DrugCVar</a></li>
              <li><a class="arrow-icon1" href="http://dscope.omicsbio.info/">dSCOPE</a></li>
              <li><a class="arrow-icon1" href="http://pcysmod.omicsbio.info/">pCysMod</a></li>
              <li><a class="arrow-icon1" href="http://prkc.omicsbio.info/">prkC-PSP</a></li>
            </ul>
          </div>
          <div>
            <h4>About ASPTM</h4>
            <br />
            <p>
             
              ASPTM is an integrative database of<br />
              PTM under stress in plants <br />
              A total of 261389 post-translational modification <br />
              sites identified by high-throughput experiments <br />
              were obtained from 92900 proteins under <br />
              31 stress conditions in 111 literature, <br />
              involving 58 plants, 31 stress species, <br />
              and 23 modification types. <br />
              191 low flux experimental validated <br />
              post-translational modification sites <br />
              of 122 proteins under 27 stress conditions <br />
              were obtained from 127 references<br />
              
             
            </p>
            <br />
          

            
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
