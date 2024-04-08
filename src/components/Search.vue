<template>
<section id="main" class="search d-flex justify-cntent-center align-items-center">
    <div class="container" id="search">
  
      <div class="card">
  
        <div class="card-header"><h5 class="font-weight-bold">Advanced search</h5></div>
        <div class="card-body text-des">Here, we provide an advanced search content for users, and you can combine two or more keywords to perform a more accurate search. For example: gene + condition ("WRKY" AND "quad/WT"), etc.</div>
        <div class="card-body">
          <!-- Advanced search -->
          <form id="advance_search_form">
            <input type="hidden" name="type" value="search">
  
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-2">
                <select class="form-control my-select-tag" id="simple_search_tag0" name="simple_search_tag0">
                  <option value="Context">Any Field</option>
                  <option value="proid uniprotaccs">Protein Accession</option>
                  <option value="genename">Gene Name</option>
                  <option value="proteinname">Protein Name</option>
                  <option value="function">Function</option>
                  <option value="condition">Condition</option>
                </select>
              </div>
              <div class="col-md-6">
                <input class="form-control" type="text" placeholder="Please select a type and enter keyword(s)." id="simple_search_input0" name="simple_search_input0">
              </div>
              <div class="col-md-1"></div>
            </div>
  
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <select class="form-control my-select-tag" name="simple_search_link1" id="simple_search_link1">
                  <option value="and">AND</option>
                  <option value="or">OR</option>
                  <option value="and not">NOT</option>
                </select>
              </div>
              <div class="col-md-2">
                <select class="form-control my-select-tag" id="simple_search_tag1" name="simple_search_tag1">
                  <option value="Context">Any Field</option>
                  <option value="protein accession">Protein Accession</option>
                  <option value="genename">Gene Name</option>
                  <option value="proteinname">Protein Name</option>
                  <option value="function">Function</option>
                  <option value="condition">Condition</option>
                </select>
              </div>
              <div class="col-md-6">
                <input class="form-control" type="text" placeholder="Please select a type and enter keyword(s)." id="simple_search_input1" name="simple_search_input1">
              </div>
              <div class="col-md-1">
                <i class="ri-add-circle-fill"></i>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <select class="form-control my-select-tag" name="simple_search_link2" id="simple_search_link2">
                  <option value="and">AND</option>
                  <option value="or">OR</option>
                  <option value="and not">NOT</option>
                </select>
              </div>
              <div class="col-md-2">
                <select class="form-control my-select-tag" id="simple_search_tag2" name="simple_search_tag2">
                  <option value="Context">Any Field</option>
                  <option value="proid uniprotaccs">Protein Accession</option>
                  <option value="genename">Gene Name</option>
                  <option value="proteinname">Protein Name</option>
                  <option value="function">Function</option>
                  <option value="condition">Condition</option>
                </select>
              </div>
              <div class="col-md-6">
                <input class="form-control" type="text" placeholder="Please select a type and enter keyword(s)." id="simple_search_input2" name="simple_search_input2">
              </div>
              <div class="col-md-1">
                <i class="ri-add-circle-fill"></i><i class="ri-indeterminate-circle-fill"></i>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-1"></div>
  
              <div class="col-md-2">
                <select class="form-control my-select-mod" name="simple_search_org" id="simple_search_org">
                  <option value="All">All organisms</option>
                  <option value="Actinidia deliciosa">Actinidia deliciosa</option>
                  <option value="Ananas comosus">Ananas comosus</option>
                  <option value="Arabidopsis thaliana">Arabidopsis thaliana</option>
                  <option value="Arachis duranensis">Arachis duranensis</option>
                  <option value="Arachis hypogaea">Arachis hypogaea</option>
                  <option value="Bermudagrass stolon">Bermudagrass stolon</option>
                  <option value="Brachypodium distachyon">Brachypodium distachyon</option>
                  <option value="Brassica napus">Brassica napus</option>
                  <option value="Camellia sinensis">Camellia sinensis</option>
                  <option value="Capsicum annuum">Capsicum annuum</option>
                  <option value="Chlamydomonas reinhardtii">Chlamydomonas reinhardtii</option>
                  <option value="Cicer arietinum">Cicer arietinum</option>
                  <option value="Citrus sinensis">Citrus sinensis</option>
                  <option value="Cyanidioschyzon merolae">Cyanidioschyzon merolae</option>
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
                  <option value="Oryza sativa subsp. indica">Oryza sativa subsp. indica</option>
                  <option value="Oryza sativa subsp. japonica">Oryza sativa subsp. japonica</option>
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
                <select class="form-control my-select-mod" name="simple_search_mod" id="simple_search_mod">
                  <option value="All">All modifications</option>
                  <option value="Carbonylation">Carbonylation</option>
                  <option value="Glycation">Glycation</option>
                  <option value="Lysine 2-hydroxyisobutyrylation">Lysine 2-hydroxyisobutyrylation</option>
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
                  <option value="N-terminal Acetylation">N-terminal Acetylation</option>
                  <option value="N-terminal Myristoylation">N-terminal Myristoylation</option>
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
                <button type="button" @click="Select()" class="form-control btn btn-warning" id="Example">Example</button>
              </div>
              <div class="col-md-2">
                <button type="reset" @click="reset()" class="form-control btn btn-warning">Clear</button>
              </div>
              <div class="col-md-2">
                <button @click="searchData()" class="form-control btn btn-warning">Submit</button>
              </div>
            </div>
          </form>
          <!-- Advanced search end -->
        </div>
  
      </div>
      <br><br>
      <div class="card">
  
        <div class="card-header"><h5 class="font-weight-bold">Blast search</h5></div>
        <div class="card-body text-des">Here, we provide an blast search content for users, and you can input a protein sequence and search the result.</div>
        <div class="card-body">
          <!-- Blast search -->
          <form id="blast_search_form" action="blast.php" method="post" >
            <input type="hidden" name="type" value="blast">
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                <textarea name="pro_seq" id="pro_seq" rows="10" required class="form-control" placeholder="Paste your protein sequence here"></textarea>
                <label for="evalue">E value: </label>
                <select name="evalue" id="evalue">
                  <option value="0.00001">0.00001</option>
                  <option value="0.0001">0.0001</option>
                  <option value="0.001">0.001</option>
                  <option value="0.01">0.01</option>
                  <option value="0.1">0.1</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="10">10</option>
                  <option value="100">100</option>
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-5"></div>
              <div class="col-md-2">
                <button class="form-control btn btn-warning" id="Example2">Example</button>
              </div>
              <div class="col-md-2">
                <button  class="form-control btn btn-warning">Clear</button>
              </div>
              <div class="col-md-2">
                <button  class="form-control btn btn-warning">Submit</button>
              </div>
            </div>
          </form>
          <!-- Blast search end -->
        </div>
      </div>
    </div>
  </section><!-- End Main -->
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
    Select() {
      console.log("randomSelect");
       document.getElementById("simple_search_tag0").value="proteinname";
       document.getElementById("simple_search_tag1").value="condition";
       
      
      
      document.getElementById("simple_search_input0").value = "MADS23";
      document.getElementById("simple_search_input1").value = "control";
      
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
      let field1 = document.getElementById("simple_search_tag0").value;
      let field2 =document.getElementById("simple_search_tag1").value;
      let name=document.getElementById("simple_search_input0").value;
      let field3=document.getElementById("simple_search_input1").value;
      let organisms = document.getElementById("simple_search_org").value;
      let modifications = document.getElementById("simple_search_mod").value;

      this.$axios.post("/search", {
        data: {
          field1,
          field2,
          field3,
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

<style >
/* 在这里添加你的 CSS 样式 */

</style>