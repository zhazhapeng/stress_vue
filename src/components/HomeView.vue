<template>
  <div class="welcome">
    <div class="row text-center">
      <div class="col-md-12">
        <h2 class="animate animate__fadeInDown">Welcome to ASPTM</h2>
        <p class="animate animate__fadeInLeft">
          Throughout the entire life cycle, plants often suffer from <span class="des-highlight">abiotic stresses</span> such as temperature, 
          drought, and salinity in the environment, and have evolved complex response mechanisms.
          Post-translational modification (<span class="des-highlight">PTM</span
          >) is a biochemical process that changes the properties and extends
          the chemical composition of a protein by participating in the addition
          of chemical groups (such as phosphate, succinyl and sulfate) to
          specific amino acid residues or by proteolytic cleavage of the protein
          sequence backbone. More than <span class="des-num">300</span> PTMs
          have been registered in UniProt, and they can regulate the structure,
          function, and localization of proteins. Plant PTMs play critical roles
          in nearly all biological processes, such as signal transduction,
          metabolism, stress resistance, plant immunity and other cellular
          events.
        </p>
        <p class="animate animate__fadeInLeft">
          Here, we developed an integrative database of PTMs in plants under stress named <span class="des-name">ASPTM</span>, 
          which curated and hosted the published <span class="des-num">31</span> types of Stress including <span class="des-num">261,389</span> sites on 
          <span class="des-num">92,900</span> proteins in <span class="des-num">58</span> plant species from <span class="des-num">111</span> literature. In addition, it also includes 
          <span class="des-num">127</span> low throughput literature, involving <span class="des-num">27</span> types of stress and <span class="des-num">191</span> modification events under <span class="des-num">12</span> species
          
        </p>
      </div>
    </div>
    <!-- 内容开始 -->
    <!-- <form
      id="simple_search_form"
      action=""
      method="post"
    > -->
      <input type="hidden" name="type" value="search" />
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-2">
          <select
            class="form-control my-select-tag con1"
            id="simple_search_tag0"
            name="simple_search_tag0"
          >
            <option value="Context">Any Field</option>
            <option value="ProteinID">Protein Accession</option>
            <option value="Genename">Gene Name</option>
            <option value="Proteinnames">Protein Name</option>
            <option value="stress">Stress</option>
            <option value="Condition">Condition</option>
          </select>
        </div>
        <div class="col-md-6">
          <input
            class="form-control"
            type="text"
            placeholder="e.g.A0A2K3D3L7"
            id="simple_search_input0"
            name="simple_search_input0"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>

        <div class="col-md-2">
          <select
            class="form-control my-select-mod con2"
            name="simple_search_org"
            id="simple_search_org"
          >
            <option value="All">All organisms</option>
            <option value="Arachis hypogaea">Arachis hypogaea</option>
            <option value="Arabidopsis thaliana">Arabidopsis thaliana</option>
            <option value="apple rootstock">Apple Rootstock</option>
            <option value="Actinidia chinensis">Actinidia chinensiss</option>
            <option value="Amborella trichopoda">Amborella trichopoda</option>
            <option value="Brassica napus">Brassica napusn</option>
            <option value="Brachypodium distachyon">
              Brachypodium distachyon
            </option>
            <option value="Brassica napus">Brassica napus</option>
            <option value="Brassica rapa subsp. pekinensis">Brassica rapa subsp. pekinensis</option>
            <option value="Broussonetia papyrifera">Broussonetia papyrifera</option>
            <option value="Bruguiera gymnorhiza">
              Bruguiera gymnorhiza
            </option>
            <option value="Chlamydomonas reinhardtii">Chlamydomonas reinhardtii</option>
            <option value="Camellia sinensis">Camellia sinensis</option>
            <option value="Cicer arietinum">
              Cicer arietinum
            </option>
            <option value="Cucumis sativus">Cucumis sativus</option>
            <option value="Capsicum annuum">Capsicum annuum</option>
            <option value="Citrus sinensis">Citrus sinensis</option>
            <option value="Citrus clementina">Citrus clementina</option>
            <option value="Capsella rubella">Capsella rubella</option>
            <option value="Dendranthema morifolium">Dendranthema morifolium</option>
            <option value="Glycine max">Glycine max</option>
            <option value="Gossypium hirsutum">Gossypium hirsutum</option>
            <option value="Hordeum vulgare">Hordeum vulgare</option>
            <option value="Hevea brasiliensis">Hevea brasiliensis</option>
            <option value="Jatropha curcas">Jatropha curcas</option>
            <option value="Kandelia candel">Kandelia candel</option>
            <option value="Lactuca sativa">Lactuca sativa</option>
            <option value="Musa acuminata">Musa acuminata</option>
            <option value="Manihot esculenta">Manihot esculenta</option>
            <option value="Nostoc flagelliforme">Nostoc flagelliforme</option>
            <option value="Nicotiana plumbaginifolia">Nicotiana plumbaginifolia</option>
            <option value="Nuphar advena">Nuphar advena</option>
            <option value="Neobodo saliens">Neobodo saliens</option>
            <option value="Oryza sativa subsp. japonica">Oryza sativa subsp. japonica</option>
            <option value="Oryza sativa subsp. Indica">Oryza sativa subsp. Indica</option>
            <option value="Populus canescens">Populus canescens</option>  
            <option value="Populus yunnanensis">Populus yunnanensis</option>
            <option value="Puccinellia tenuiflora">Puccinellia tenuiflora</option>
            <option value="Populus trichocarpa">Populus trichocarpa</option>
            <option value="Prunus persica">Prunus persica</option>
            <option value="Populus tomentosa">Populus tomentosaa</option>
            <option value="Populus euphratica">Populus euphratica</option>
            <option value="Phaseolus vulgaris">Phaseolus vulgaris</option>
            <option value="Populus tremula">Populus tremula</option>
            <option value="Quercus rubra">Quercus rubra</option>
            <option value="Ricinus communis">Ricinus communis</option>  
            <option value="Solanum lycopersicum">Solanum lycopersicum</option>
            <option value="Solanum tuberosum">Solanum tuberosum</option>
            <option value="Setaria italica">Setaria italica</option>
            <option value="Sugar Beet">Sugar Beet</option>
            <option value="Spinacia oleracea">Spinacia oleracea</option>
            <option value="Spinacia oleracea">Spinacia oleracea</option>
            <option value="Salvia miltiorrhiza">Salvia miltiorrhiza</option>
            <option value="Sandersonia aurantiaca">Sandersonia aurantiaca</option>
            <option value="Triticum aestivum">Triticum aestivums</option> 
            <option value="Theobroma cacao">Theobroma cacao</option>
            <option value="Vitis vinifera">Vitis vinifera</option>
            <option value="Volvox carteri">Volvox carteri</option>
            <option value="Zea mays">Zea mays</option>           
            
          </select>
        </div>

        <div class="col-md-2">
          <select
            class="form-control my-select-mod con2"
            name="simple_search_mod"
            id="simple_search_mod"
          >
            <option value="">All modifications</option>
            <option value="S-nitrosylation">S-nitrosylation</option>
            <option value="Phosphorylation">Phosphorylation</option>
            <option value="Lysine Acetylation">Lysine Acetylation</option>
            <option value="O-GlcNAcylation">O-GlcNAcylation</option>
            <option value="Glycation">Glycation</option>
            <option value="N-terminal Acetylation">N-terminal Acetylation</option>
            <option value="Lysine SUMOylation">Lysine SUMOylation</option>
            <option value="Glycation">Glycation</option>
            <option value="Lysine Crotonylation">Lysine Crotonylation</option>
            <option value="Lysine Butyrylation">Lysine Butyrylation</option>
            <option value="Lysine Succinylation">Lysine Succinylation</option>
            <option value="S-glutathionylation">S-glutathionylation</option>
            <option value="methylation">methylation</option>
            <option value="N-glycosylation">N-glycosylation</option>
            <option value="Glycosylation">Glycosylation</option>
            <option value="Lysine Ubiquitination">Lysine Ubiquitination</option>
            <option value="Lysine-2-hydroxyisobutyrylaton">Lysine-2-hydroxyisobutyrylaton</option>
            <option value="S-Sulfonylation">S-Sulfonylation</option>
          </select>
        </div>
        <div class="col-md-2">
          <button @click="randomSelect()" type="button" class="form-control btn  btn-mine" id="Example">
            Example
          </button>
        </div>
        <div class="col-md-2">
          <button type="reset" @click="reset()" class="form-control btn btn-mine">
            Clear
          </button>
        </div>
        <div class="col-md-2">
          <button type="submit" @click="searchData()" class="form-control btn  btn-mine">
            Submit
          </button>
        </div>
      </div>
    <!-- </form> -->
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: "Welcome",
  data() {
    return {

    }
  },
  methods: {
    randomSelect() {
      // console.log("randomSelect");
      let options1 = document.getElementById("simple_search_tag0").options;
      // let options3 = document.getElementById("simple_search_org").options;
      // let options4 = document.getElementById("simple_search_mod").options;
      // // 随机选择
      // // console.log(options1,'------');
      // let randomSeed = Math.floor(Math.random() * options1.length);
      options1[1].selected = true;
      // options3[randomSeed].selected = true;
      // options4[randomSeed].selected = true;
      document.getElementById("simple_search_input0").value = "A0A2K3D3L7";
    },
    reset() {
      let options1 = document.getElementById("simple_search_tag0").options;
      // let inputVal = document.getElementById("simple_search_input0").value;
      let options3 = document.getElementById("simple_search_org").options;
      let options4 = document.getElementById("simple_search_mod").options;
      document.getElementById("simple_search_input0").value = "";
      options1[0].selected = true;
      options3[0].selected = true;
      options4[0].selected = true;
    },
    searchData(){
      let field = document.getElementById("simple_search_tag0").value;
      let name = document.getElementById("simple_search_input0").value;
      let organisms = document.getElementById("simple_search_org").value;
      let modifications = document.getElementById("simple_search_mod").value;

      this.$axios.post("/search", {
        data: {
          field,
          name,
          organisms,
          modifications
        }}).then(res =>{
          // 跳转到result页面,需要把查询到的信息塞到result页面里
          console.log(res,'------res');

          store.SetSearchData(res);
          this.$router.push('/result');
        })

    }
  }
}
</script>

<!-- // @media (min-width: 1024px)  -->
<style >
body .welcome{  
    margin: 0 auto;  
    max-width: 1200px; /* 这里的值可以根据你的设计需求进行调整 */  
}
 .animate__fadeInDown{
  color:black;
  font-weight: bold;
  font-size: 50px;
}
.des-num{
  color: #20c997;
}
.des-highlight{
  color: #dc3545;
}
.des-name{
  color: #ffc107;
}
.my-select-tag {
    background-color: #77ca94;
}
.con2{
  background-color:#57a8ec;
}
.form-control {
    font-weight: bolder;
    font-size: 1rem;
}
.btn-mine {
    background-color: #ffc000;
    height: 40px;
}
.btn-mine:focus {  
    /* 聚焦时的按钮样式 */  
    background-color: #ffc107; /* 聚焦时背景色变浅 */
    transition: color .15s 
      
   
}
  .row {

      .text-center {
        .animate__fadeInLeft{
          color: black;
        }
      }

      p{
        color: black;
        font-weight: 500; 
        text-align: justify;  
        text-indent: 2em; /* 首行缩进两个字符的宽度 */  
        font-family: Arial, "Open Sans", sans-serif;
        font-size: 18px;
       
        
      }
      .animate{
        animation-duration: 1s;
      }
    
      i {
        top: calc(50% - 25px);
        left: -26px;
        position: absolute;
        border: 1px solid var(--color-border);
        background: var(--color-background);
        border-radius: 8px;
        width: 50px;
        height: 50px;
      }
    
      .item:before {
        content: " ";
        border-left: 1px solid var(--color-border);
        position: absolute;
        left: 0;
        bottom: calc(50% + 25px);
        height: calc(50% - 25px);
      }
    
      .item:after {
        content: " ";
        border-left: 1px solid var(--color-border);
        position: absolute;
        left: 0;
        top: calc(50% + 25px);
        height: calc(50% - 25px);
      }
    
      .item:first-of-type:before {
        display: none;
      }
    
      .item:last-of-type:after {
        display: none;
      }
  }

</style>
