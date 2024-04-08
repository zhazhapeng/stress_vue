<template>
  <div class="help">
    <section id="main" class="d-flex justify-cntent-center align-items-center">
      <div class="container" id="help">
        <div class="row">
          <div class="col-md-4 "  >
            <div id="help-navigation" class="card" >
              <div class="card-header">
                <h5 class="font-weight-bold">Navigation</h5>
              </div>
              <nav class="navbar navbar-light">
                <nav class="nav nav-pills flex-column">
                  <a class="nav-link" href="#help1">What is qPTMplants</a>
                  <a class="nav-link" href="#help2"  >How to use qPTMplants</a>
                  <nav class="nav nav-pills flex-column hidden" v-show="isDivVisible" >
                    <a class="nav-link ml-3 my-1" href="#help2-1"
                      >Quick Search</a
                    >
                    <a class="nav-link ml-3 my-1" href="#help2-2">Browse</a>
                    <a class="nav-link ml-3 my-1" href="#help2-3"
                      >Advanced Search</a
                    >
                    <a class="nav-link ml-3 my-1" href="#help2-4">Result</a>
                  </nav>
                  <a class="nav-link" href="#help3"
                    >Post-translational modifications resources in plants</a
                  >
                  <nav class="nav nav-pills flex-column hidden" v-show="isDivVisible">
                    <a class="nav-link ml-3 my-1" href="#help3-1">PhosPhAt</a>
                    <a class="nav-link ml-3 my-1" href="#help3-2">P³DB</a>
                    <a class="nav-link ml-3 my-1" href="#help3-3"
                      >Plant PTM Viewer</a
                    >
                    <a class="nav-link ml-3 my-1" href="#help3-4">FAT-PTM</a>
                    <a class="nav-link ml-3 my-1" href="#help3-5">dbPTM</a>
                    <a class="nav-link ml-3 my-1" href="#help3-6">SysPTM</a>
                    <a class="nav-link ml-3 my-1" href="#help3-7">EPSD</a>
                    <a class="nav-link ml-3 my-1" href="#help3-8">iCysMod</a>
                    <a class="nav-link ml-3 my-1" href="#help3-9">PLMD</a>
                  </nav>
                </nav>
              </nav>
            </div>
          </div>

          <div class="col-md-8" id="navigation-body">
            <div class="card"  >
              <div class="card-header">
                <h5 class="font-weight-bold" id="help1">What is qPTMplants</h5>
              </div>
              <div class="card-body">
                <p class="card-text text-des">
                  We developed the qPTMplants, an integrative database of
                  quantitative post-translational modifications in plants, which
                  curated and hosted the published 23 types of PTMs including
                  429,821 sites on 123,551 proteins in 43 plant species from 293
                  literature. Moreover, we collected and organized 620,509 kinds
                  of quantitative events for 136,700 sites on 55,361 proteins
                  from 139 literature. The detailed information about the PTM
                  events was organized and visualized in detail. In addition,
                  the annotations including the sequence and structural
                  characteristics were orchestrated.
                </p>
              </div>
            </div>
            <br />

            <div class="card">
              <div class="card-header">
                <h5 class="font-weight-bold" id="help2">
                  How to use qPTMplants
                </h5>
              </div>
              <div class="card-body">
                <h5 class="card-title text-info" id="help2-1">Quick Search</h5>
                <p class="card-text text-des">
                  In the home page of qPTMplants, users can specify one field or
                  all the fields to perform a quick search with the keyword(s)
                  in the field(s). Users can simply click example and submit
                  buttons to perform an example search.
                </p>
              </div>
              <img
                src="./assets/img/quick_search.png"
                class="card-img-bottom"
              />

              <div class="card-body">
                <h5 class="card-title text-info" id="help2-2">Browse</h5>
                <p class="card-text text-des">
                  In the Browse page, users can click one term to search the
                  specified data in qPTMplants. The data was firstly grouped by
                  organisms and further grouped by PTMs, the detailed
                  information is consisting of two modules including conditions
                  and proteins, which are sorted alphabetically. Users can click
                  the initial and select the term of interest.
                </p>
              </div>
              <img src="./assets/img/help_browse.png" class="card-img-bottom" />
              <img
                src="./assets/img/help_browse2.png"
                class="card-img-bottom"
              />

              <div class="card-body">
                <h5 class="card-title text-info" id="help2-3">
                  Advanced Search
                </h5>
                <p class="card-text text-des">
                  In the Search page, users can add more keyword boxes and
                  choose 'AND', 'OR' or 'NOT' to perform a more accurate
                  multiple keywords search. Users can simply click example and
                  submit buttons to perform an example search.
                </p>
                <p class="card-text text-des">
                  The option of 'BLAST search' was designed to find related
                  information in qPTMplants quickly. Users can input a protein
                  sequence in FASTA format and select the required E value to
                  search identical or homologous proteins through the blastall
                  program in NCBI BLAST packages.
                </p>
              </div>
              <img src="./assets/img/help_search.png" class="card-img-bottom" />
              <img
                src="./assets/img/help_search2.png"
                class="card-img-bottom"
              />

              <div class="card-body">
                <h5 class="card-title text-info" id="help2-4">Result</h5>
                <p class="card-text text-des">
                  In the Result page, users can view the search or browse
                  results, and further filter them by the options we provide.
                  More information about experiment and protein is also
                  displayed while users click the 'Detail' button.
                </p>
              </div>
              <img src="./assets/img/help_result.png" class="card-img-bottom" />
            </div>
            <br />

            <div class="card">
              <div class="card-header">
                <h5 class="font-weight-bold" id="help3">
                  Post-translational modifications resources in plants
                </h5>
              </div>
              <div class="card-body">
                <h5 class="card-title text-info" id="help3-1">PhosPhAt</h5>
                <p class="card-text text-des">
                  PhosPhAt is the Arabidopsis protein phosphorylation site
                  database, which not only for experimental and predicted
                  phosphorylation sites of individual proteins, but also for
                  known substrates for a given kinase or kinase family.
                </p>
                <p>
                  <strong>website:</strong>
                  <a href="http://phosphat.mpimp-golm.mpg.de" target="_blank"
                    >http://phosphat.mpimp-golm.mpg.de</a
                  >
                </p>
                <p>
                  <strong>citation:</strong> Zulawski, M., Braginets, R. and
                  Schulze, W.X. (2013) PhosPhAt goes kinases--searchable protein
                  kinase target information in the plant phosphorylation site
                  database PhosPhAt. <i>Nucleic Acids Res.</i>, 41, D1176-1184.
                  (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/23172287/"
                    target="_blank"
                    >23172287</a
                  >)
                </p>
              </div>

              <div class="card-body">
                <h5 class="card-title text-info" id="help3-2">P³DB</h5>
                <p class="card-text text-des">
                  The plant protein phosphorylation database 3.0 (P3DB) has
                  47,923 phosphosites in 16,477 phosphoproteins curated across
                  nine plant organisms from 32 studies, and incorporates
                  multiple network viewers.
                </p>
                <p>
                  <strong>website:</strong>
                  <a href="http://p3db.org" target="_blank">http://p3db.org</a>
                </p>
                <p>
                  <strong>citation:</strong> Yao, Q., Ge, H., Wu, S., Zhang, N.,
                  Chen, W., Xu, C., Gao, J., Thelen, J.J. and Xu, D. (2014) P³DB
                  3.0: From plant phosphorylation sites to protein networks.
                  <i>Nucleic Acids Res.</i>, 42, D1206-1213. (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/24243849/"
                    target="_blank"
                    >24243849</a
                  >)
                </p>
              </div>

              <div class="card-body">
                <h5 class="card-title text-info" id="help3-3">
                  Plant PTM Viewer
                </h5>
                <p class="card-text text-des">
                  The Plant PTM Viewer is a central resource for exploring plant
                  protein modifications, which comprises approximately 370,000
                  PTM sites for 19 types of protein modifications in plant
                  proteins from five different species.
                </p>
                <p>
                  <strong>website:</strong>
                  <a
                    href="http://www.psb.ugent.be/PlantPTMViewer"
                    target="_blank"
                    >http://www.psb.ugent.be/PlantPTMViewer</a
                  >
                </p>
                <p>
                  <strong>citation:</strong> Willems, P., Horne, A., Van Parys,
                  T., Goormachtig, S., De Smet, I., Botzki, A., Van Breusegem,
                  F. and Gevaert, K. (2019) The Plant PTM Viewer, a central
                  resource for exploring plant protein modifications.
                  <i>Plant J.</i>, 99, 752-762. (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/31004550 /"
                    target="_blank"
                    >31004550 </a
                  >)
                </p>
              </div>

              <div class="card-body">
                <h5 class="card-title text-info" id="help3-4">FAT-PTM</h5>
                <p class="card-text text-des">
                  The functional analysis tools for post-translational
                  modifications (FAT-PTM) database includes eight different
                  types of PTM and over 49,000 PTM sites identified in
                  large-scale proteomic surveys of Arabidopsis thaliana. FAT-PTM
                  currently supports tools to visualize protein-centric PTM
                  networks, quantitative phosphorylation site data, PTM
                  information displayed in protein-centric metabolic pathways
                  and groups of proteins that are co-modified by multiple PTMs.
                </p>
                <p>
                  <strong>website:</strong>
                  <a
                    href="https://bioinformatics.cse.unr.edu/fat-ptm/"
                    target="_blank"
                    >https://bioinformatics.cse.unr.edu/fat-ptm/</a
                  >
                </p>
                <p>
                  <strong>citation:</strong> Cruz, E.R., Nguyen, H., Nguyen, T.
                  and Wallace, I.S. (2019) Functional analysis tools for
                  post-translational modification: a post-translational
                  modification database for analysis of proteins and metabolic
                  pathways. <i>Plant J.</i>, 99, 1003-1013. (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/31034103/"
                    target="_blank"
                    >31034103</a
                  >)
                </p>
              </div>

              <div class="card-body">
                <h5 class="card-title text-info" id="help3-5">dbPTM</h5>
                <p class="card-text text-des">
                  dbPTM is a comprehensive database of experimental
                  post-translational modifications, which has integrated over
                  900,000 PTM sites. With continuous updates, dbPTM also
                  integrates annotation information such as the linear
                  relationship between SAPs and PTM sites, the
                  disease-associated PTM sites, and PTM crosstalk.
                </p>
                <p>
                  <strong>website:</strong>
                  <a href="http://dbPTM.mbc.nctu.edu.tw/" target="_blank"
                    >http://dbPTM.mbc.nctu.edu.tw/</a
                  >
                </p>
                <p>
                  <strong>citation:</strong> Huang, K.Y., Lee, T.Y., Kao, H.J.,
                  Ma, C.T., Lee, C.C., Lin, T.H., Chang, W.C. and Huang, H.D.
                  (2019) dbPTM in 2019: exploring disease association and
                  cross-talk of post-translational modifications.
                  <i>Nucleic Acids Res.</i>, 47, D298-d308. (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/30418626/"
                    target="_blank"
                    >30418626</a
                  >)
                </p>
              </div>

              <div class="card-body">
                <h5 class="card-title text-info" id="help3-6">SysPTM</h5>
                <p class="card-text text-des">
                  SysPTM is a systematic resource installed with comprehensive
                  PTM data including 471,109 PTM sites on 53,235 proteins,
                  covering over 50 modification types across 2,031 species. Four
                  web-based tools (PTMBlast, PTMPathway, PTMPhylog, PTMCluster)
                  were implemented in SysPTM.
                </p>
                <p>
                  <strong>website:</strong>
                  <a href="http://lifecenter.sgst.cn/SysPTM/" target="_blank"
                    >http://lifecenter.sgst.cn/SysPTM/</a
                  >
                </p>
                <p>
                  <strong>citation:</strong> Li, J., Jia, J., Li, H., Yu, J.,
                  Sun, H., He, Y., Lv, D., Yang, X., Glocker, M.O., Ma, L. et
                  al. (2014) SysPTM 2.0: an updated systematic resource for
                  post-translational modification. <i>Database (Oxford)</i>,
                  2014, bau025. (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/24705204/"
                    target="_blank"
                    >24705204</a
                  >)
                </p>
              </div>

              <div class="card-body">
                <h5 class="card-title text-info" id="help3-7">EPSD</h5>
                <p class="card-text text-des">
                  The eukaryotic phosphorylation site database (EPSD) collects
                  1,616,804 experimentally identified p-sites in 209,326
                  phosphoproteins from 68 eukaryotic species. These data not
                  only come from published literature, but also integrate other
                  resources, such as dbPPT, dbPAF, PhosphoSitePlus, etc.
                </p>
                <p>
                  <strong>website:</strong>
                  <a href="http://epsd.biocuckoo.cn/" target="_blank"
                    >http://epsd.biocuckoo.cn/</a
                  >
                </p>
                <p>
                  <strong>citation:</strong> Lin, S., Wang, C., Zhou, J., Shi,
                  Y., Ruan, C., Tu, Y., Yao, L., Peng, D. and Xue, Y. (2021)
                  EPSD: a well-annotated data resource of protein
                  phosphorylation sites in eukaryotes. <i>Brief. Bioinform.</i>,
                  22, 298-307. (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/32008039/"
                    target="_blank"
                    >32008039</a
                  >)
                </p>
              </div>

              <div class="card-body">
                <h5 class="card-title text-info" id="help3-8">iCysMod</h5>
                <p class="card-text text-des">
                  iCysMod is an integrative database for protein cysteine
                  modifications in eukaryotes, which curated and hosted 108,030
                  PCM events for 85,747 experimentally identified sites on
                  31,483 proteins from 48 eukaryotes for 8 types of PCMs.
                </p>
                <p>
                  <strong>website:</strong>
                  <a href="http://icysmod.omicsbio.info" target="_blank"
                    >http://icysmod.omicsbio.info</a
                  >
                </p>
                <p>
                  <strong>citation:</strong> Wang, P., Zhang, Q., Li, S., Cheng,
                  B., Xue, H., Wei, Z., Shao, T., Liu, Z.X., Cheng, H. and Wang,
                  Z. (2021) iCysMod: an integrative database for protein
                  cysteine modifications in eukaryotes.
                  <i>Brief. Bioinform.</i>, 10.1093/bib/bbaa400. (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/33406221/"
                    target="_blank"
                    >33406221</a
                  >)
                </p>
              </div>

              <div class="card-body">
                <h5 class="card-title text-info" id="help3-9">PLMD</h5>
                <p class="card-text text-des">
                  Protein lysine modification database (PLMD) integrates 284,780
                  modification events in 53,501 proteins from 176 eukaryotes and
                  prokaryotes for 20 types of PLMs, involving ubiquitination,
                  acetylation, sumoylation, and so on.
                </p>
                <p>
                  <strong>website:</strong>
                  <a href="http://plmd.biocuckoo.org/" target="_blank"
                    >http://plmd.biocuckoo.org/</a
                  >
                </p>
                <p>
                  <strong>citation:</strong> Xu, H., Zhou, J., Lin, S., Deng,
                  W., Zhang, Y. and Xue, Y. (2017) PLMD: An updated data
                  resource of protein lysine modifications.
                  <i>J. Genet. Genomics</i>, 44, 243-250. (PMID:
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/28529077/"
                    target="_blank"
                    >28529077</a
                  >)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      // 控制div是否可见的布尔值  
      isDivVisible: false,  
      // 滚动触发的阈值（页面滚动到这个高度时，div将展开）  
      scrollThreshold: 20, // 例如，500px  
    };  
  },
  computed: {
    // 在这里定义计算属性
  },
  methods: {
    // 在这里定义方法
    handleScroll() {  
      const scrollTop = window.scrollY || document.documentElement.scrollTop;  
      // 当滚动高度达到阈值时，显示div  
      if (scrollTop >= this.scrollThreshold) {  
        this.isDivVisible = true;  
      } else {  
        // 可以选择是否在滚动回去时隐藏div  
        this.isDivVisible = false;  
      }  
    },  
    
  },
  created() {
    // 在这里执行组件创建后的逻辑
  },
  mounted() {  
    // 添加滚动事件监听器  
    window.addEventListener('scroll', this.handleScroll);  
  },  
  beforeDestroy() {  
    // 移除滚动事件监听器  
    window.removeEventListener('scroll', this.handleScroll);  
  },  
 
  
};
</script>

<style lang="scss" scoped>
p{
  color: black;
}

 
.collapsible-div {  
  /* 折叠时的样式 */  
  height: 0;  
  overflow: hidden;  
  transition: height 0.3s ease;  
}  
  
.collapsible-div.v-enter-active,  
.collapsible-div.v-leave-active {  
  transition: height 0.3s ease;  
}  
  
.collapsible-div.v-enter,  
.collapsible-div.v-leave-to {  
  height: 0;  
}  
  
/* 展开时的样式 */  
.collapsible-div.visible {  
  height: auto; /* 或者指定一个具体的高度 */  
}  

</style> 
