<script setup>
import Footer from '../components/Footer.vue'


</script>

<template>
  <main>
    <div class="wrapper">
  <section id="main" class="d-flex justify-cntent-center align-items-center">
    <div class="container" id="home">

      <!-- Database introduce -->
      <div class=" text-center">
        <div class="col-md-12">
          <h2 class="animated fadeInDown">Welcome to <span>qPTMplants</span></h2>
          <p class="animated fadeInUp text-des">Post-translational modification (<span class="des-highlight">PTM</span>) is a biochemical process that changes the properties and extends the chemical composition of a protein by participating in the addition of chemical groups (such as phosphate, succinyl and sulfate) to specific amino acid residues or by proteolytic cleavage of the protein sequence backbone. More than <span class="des-num">200</span> PTMs have been registered in UniProt, and they can regulate the structure, function, and localization of proteins. Plant PTMs play critical roles in nearly all biological processes, such as signal transduction, metabolism, stress resistance, plant immunity and other cellular events.</p>
          <p class="animated fadeInUp text-des">Here, we developed an integrative database of quantitative PTMs in plants named <span class="des-webname">qPTMplants</span>, which curated and hosted the published <span class="des-num">23</span> types of PTMs including <span class="des-num">429,821</span> sites on <span class="des-num">123,551</span> proteins in <span class="des-num">43</span> plant species from <span class="des-num">293</span> literature. Moreover, we collected and organized <span class="des-num">620,509</span> kinds of quantitative events for <span class="des-num">136,700</span> sites on <span class="des-num">55,361</span> proteins from <span class="des-num">139</span> literature.</p>
        </div>
      </div>
      <!-- Database introduce end -->

      <!-- Simple search -->
      <form id="simple_search_form" action="result.php" method="post" onSubmit="return check_simple_search_form()">
        <input type="hidden" name="type" value="search">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-2">
            <select class="form-control my-select-tag" id="simple_search_tag0" name="simple_search_tag0">
              <option value="Context">Any Field</option>
              <option value="proid uniprotaccs">Protein Accession</option>
              <option value="genename">Gene Name</option>
              <option value="proteinname">Protein Name</option>
              <option value="func">Function</option>
              <option value="con">Condition</option>
            </select>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" placeholder="e.g. WRKY" id="simple_search_input0" name="simple_search_input0">
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
            <button type="button" class="form-control btn btn-mine" id="Example">Example</button>
          </div>
          <div class="col-md-2">
            <button type="reset" class="form-control btn btn-mine">Clear</button>
          </div>
          <div class="col-md-2">
            <button type="submit" class="form-control btn btn-mine">Submit</button>
          </div>
        </div>
      </form>
      <!-- Simple search end -->

    </div>
  </section><!-- End Main -->
</div>
   
  </main>
</template>





<style>
header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

.wrapper{
  box-sizing: border-box;/*版心*/
  max-width: 1200px;
  margin: 0 auto;
}
.container{
  margin:0 auto;
}
.text-center{
  
  height:600px;
  width:1000px;
  font-family:”Arial”;
  
  
  
}
.col-md-12{
  
  height:600px;
  width:1100px;
  
 
  
  
}
.col-md-12 h2{
  text-align:center;
  font-size:50px;
  
}
.col-md-12 p{
  text-align: justify;
  text-indent: 3em;
  
  

  font-size:22px;
  color:black;
}
.des-highlight{
  color:red;
}
.des-webname{
  color:#ffc000;
}
.des-num{
  color:green;
}
#simple_search_form{
  
  margin-top:50px;
}
.row {
  
    display: flex; /* 设置为 Flexbox 布局 */
}
.col-md-1 {
  flex:0 0 10%;
    width: 120px; /* 每个 div 元素的宽度 */
    height: 48px; /* 每个 div 元素的高度 */
   
   
    
}
.col-md-2{
   flex:0 0 18%;
    width: 120px; /* 每个 div 元素的宽度 */
    height: 48px; /* 每个 div 元素的高度 */
    
}
.col-md-2 .my-select-tag{
  background-color: #77ca94;
    color: #000;
    border-width: 0;
}
.col-md-2 .my-select-mod{
  background-color: #57a8ec;
    color: #000;
    border-width: 0;
}
.col-md-2 .btn-mine {
    background-color: #ffc000;
    color: #000000;
    font-weight: bolder;
}

button:not(:disabled) {
    cursor: pointer;
   
}
.col-md-2 button:hover{
  background-color:#ffe69c;
  
}
.col-md-3{
  flex:0 0 28%;
  width: 180px; /* 每个 div 元素的宽度 */
  height: 48px; /* 每个 div 元素的高度 */
  
}
.col-md-6{
  
  flex:0 0 54%;
  width: 360px; /* 每个 div 元素的宽度 */
  height: 48px; /* 每个 div 元素的高度 */
  
}


.form-control {
    display: block;
    width: 99%;
    height:46px;
    margin-top:0px;
    font-size: 1rem;
    font-weight: 400;
   
    color: #495057;
    background-color: #fff;
   
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    
}
</style>