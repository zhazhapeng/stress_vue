<template>
  <div class="welcome">
    <div class="row text-center">
      <div class="col-md-12">
        <h2 class="animate animate__fadeInDown">Welcome to <span>qPTMplants</span></h2>
        <p class="animate animate__fadeInLeft">
          Post-translational modification (<span class="des-highlight">PTM</span
          >) is a biochemical process that changes the properties and extends
          the chemical composition of a protein by participating in the addition
          of chemical groups (such as phosphate, succinyl and sulfate) to
          specific amino acid residues or by proteolytic cleavage of the protein
          sequence backbone. More than <span class="des-num">200</span> PTMs
          have been registered in UniProt, and they can regulate the structure,
          function, and localization of proteins. Plant PTMs play critical roles
          in nearly all biological processes, such as signal transduction,
          metabolism, stress resistance, plant immunity and other cellular
          events.
        </p>
        <p class="animate animate__fadeInLeft">
          Here, we developed an integrative database of quantitative PTMs in
          plants named <span class="des-webname">qPTMplants</span>, which
          curated and hosted the published <span class="des-num">23</span> types
          of PTMs including <span class="des-num">429,821</span> sites on
          <span class="des-num">123,551</span> proteins in
          <span class="des-num">43</span> plant species from
          <span class="des-num">293</span> literature. Moreover, we collected
          and organized <span class="des-num">620,509</span> kinds of
          quantitative events for <span class="des-num">136,700</span> sites on
          <span class="des-num">55,361</span> proteins from
          <span class="des-num">139</span> literature.
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
            class="form-control my-select-tag"
            id="simple_search_tag0"
            name="simple_search_tag0"
          >
            <option value="Context">Any Field</option>
            <option value="proid uniprotaccs">Protein Accession</option>
            <option value="genename">Gene Name</option>
            <option value="proteinname">Protein Name</option>
            <option value="func">Function</option>
            <option value="con">Condition</option>
          </select>
        </div>
        <div class="col-md-6">
          <input
            class="form-control"
            type="text"
            placeholder="e.g. WRKY"
            id="simple_search_input0"
            name="simple_search_input0"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>

        <div class="col-md-2">
          <select
            class="form-control my-select-mod"
            name="simple_search_org"
            id="simple_search_org"
          >
            <option value="All">All organisms</option>
            <option value="Actinidia deliciosa">Actinidia deliciosa</option>
            <option value="Ananas comosus">Ananas comosus</option>
            <option value="Arabidopsis thaliana">Arabidopsis thaliana</option>
            <option value="Arachis duranensis">Arachis duranensis</option>
            <option value="Arachis hypogaea">Arachis hypogaea</option>
            <option value="Bermudagrass stolon">Bermudagrass stolon</option>
            <option value="Brachypodium distachyon">
              Brachypodium distachyon
            </option>
            <option value="Brassica napus">Brassica napus</option>
            <option value="Camellia sinensis">Camellia sinensis</option>
            <option value="Capsicum annuum">Capsicum annuum</option>
            <option value="Chlamydomonas reinhardtii">
              Chlamydomonas reinhardtii
            </option>
            <option value="Cicer arietinum">Cicer arietinum</option>
            <option value="Citrus sinensis">Citrus sinensis</option>
            <option value="Cyanidioschyzon merolae">
              Cyanidioschyzon merolae
            </option>
            <option value="Fragaria ananassa">Fragaria ananassa</option>
            <option value="Fragaria vesca">Fragaria vesca</option>
            <option value="Glycine max">Glycine max</option>
            <option value="Gossypium hirsutum">Gossypium hirsutum</option>
            <option value="Hibiscus cannabinus">Hibiscus cannabinus</option>
            <option value="Hordeum vulgare">Hordeum vulgare</option>
            <option value="Jatropha curcas">Jatropha curcas</option>
            <option value="Lactuca sativa">Lactuca sativa</option>
            <option value="Lotus japonicus">Lotus japonicus</option>
            <option value="Medicago truncatula">Medicago truncatula</option>
            <option value="Musa acuminata">Musa acuminata</option>
            <option value="Nicotiana benthamiana">Nicotiana benthamiana</option>
            <option value="Nicotiana tabacum">Nicotiana tabacum</option>
            <option value="Oryza sativa subsp. indica">
              Oryza sativa subsp. indica
            </option>
            <option value="Oryza sativa subsp. japonica">
              Oryza sativa subsp. japonica
            </option>
            <option value="Panicum virgatum">Panicum virgatum</option>
            <option value="Petunia hybrida">Petunia hybrida</option>
            <option value="Phaseolus vulgaris">Phaseolus vulgaris</option>
            <option value="Physcomitrella patens">Physcomitrella patens</option>
            <option value="Physcomitrium patens">Physcomitrium patens</option>
            <option value="Picea asperata">Picea asperata</option>
            <option value="Populus canescens">Populus canescens</option>
            <option value="Populus trichocarpa">Populus trichocarpa</option>
            <option value="Prunus persica">Prunus persica</option>
            <option value="Solanum lycopersicum">Solanum lycopersicum</option>
            <option value="Solanum tuberosum">Solanum tuberosum</option>
            <option value="Triticum aestivum">Triticum aestivum</option>
            <option value="Vitis vinifera">Vitis vinifera</option>
            <option value="Zea mays">Zea mays</option>
          </select>
        </div>

        <div class="col-md-2">
          <select
            class="form-control my-select-mod"
            name="simple_search_mod"
            id="simple_search_mod"
          >
            <option value="All">All modifications</option>
            <option value="Carbonylation">Carbonylation</option>
            <option value="Glycation">Glycation</option>
            <option value="Lysine 2-hydroxyisobutyrylation">
              Lysine 2-hydroxyisobutyrylation
            </option>
            <option value="Lysine Acetylation">Lysine Acetylation</option>
            <option value="Lysine Butyrylation">Lysine Butyrylation</option>
            <option value="Lysine Carbamylation">Lysine Carbamylation</option>
            <option value="Lysine Crotonylation">Lysine Crotonylation</option>
            <option value="Lysine Malonylation">Lysine Malonylation</option>
            <option value="Lysine SUMOylation">Lysine SUMOylation</option>
            <option value="Lysine Succinylation">Lysine Succinylation</option>
            <option value="Lysine Ubiquitination">Lysine Ubiquitination</option>
            <option value="Methylation">Methylation</option>
            <option value="N-glycosylation">N-glycosylation</option>
            <option value="N-terminal Acetylation">
              N-terminal Acetylation
            </option>
            <option value="N-terminal Myristoylation">
              N-terminal Myristoylation
            </option>
            <option value="O-GlcNAcylation">O-GlcNAcylation</option>
            <option value="Oxidation">Oxidation</option>
            <option value="Persulfidation">Persulfidation</option>
            <option value="Phosphorylation">Phosphorylation</option>
            <option value="S-cyanylation">S-cyanylation</option>
            <option value="S-glutathionylation">S-glutathionylation</option>
            <option value="S-nitrosylation">S-nitrosylation</option>
            <option value="S-sulfenylation">S-sulfenylation</option>
          </select>
        </div>
        <div class="col-md-2">
          <button @click="randomSelect()" type="button" class="form-control btn btn-info" id="Example">
            Example
          </button>
        </div>
        <div class="col-md-2">
          <button type="reset" @click="reset()" class="form-control btn btn-success">
            Clear
          </button>
        </div>
        <div class="col-md-2">
          <button type="submit" @click="searchData()" class="form-control btn btn-warning">
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
      console.log("randomSelect");
      let options1 = document.getElementById("simple_search_tag0").options;
      let options3 = document.getElementById("simple_search_org").options;
      let options4 = document.getElementById("simple_search_mod").options;
      // 随机选择
      console.log(options1,'------');
      let randomSeed = Math.floor(Math.random() * options1.length);
      options1[randomSeed].selected = true;
      options3[randomSeed].selected = true;
      options4[randomSeed].selected = true;
      document.getElementById("simple_search_input0").value = "MADS23";
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
          store.SetSearchData(res.data);
          this.$router.push('/result');
        })

    }
  }
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .text-center {
    color: aquamarine;

    p{
      color: aquamarine;
    }
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
