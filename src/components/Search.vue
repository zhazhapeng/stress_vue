<template>  
  <div class="container" id="search">
    <div class="card" >
      
    <div class="card-header"><h5 class="font-weight-bold">Advanced search</h5></div>
    <div class="card-body text-des">Here, we provide an advanced search content for users, and you can combine two or more keywords to perform a more accurate search. For example: gene + condition ("A0A2K3D3L7" AND "35°C/25°C"), etc.</div>
    <div class="card-body">
        <!-- Advanced search -->
        
          <input type="hidden" name="type" value="search">  
      
          <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-2">
            <select class="form-control my-select-tag" id="simple_search_tag0" name="simple_search_tag0">
              <option value="">Any Field</option>
              <option value="ProteinID">Protein Accession</option>
              <option value="Genename">Gene Name</option>
              <option value="Proteinnames">Protein Name</option>
              <option value="stress">stress</option>
              <option value="Condition">Condition</option>
            </select>
          </div>
          <div class="col-md-5">
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
            
          </select>
        </div>  
        <div class="col-md-2">
          <select class="form-control my-select-tag" id="simple_search_tag1" name="simple_search_tag1">
            <option value="">Any Field</option>
              <option value="ProteinID">Protein Accession</option>
              <option value="Genename">Gene Name</option>
              <option value="Proteinnames">Protein Name</option>
              <option value="stress">stress</option>
              <option value="Condition">Condition</option>
         </select>
        </div>
        <div class="col-md-5">
          <input class="form-control" type="text" placeholder="Please select a type and enter keyword(s)." id="simple_search_input1" name="simple_search_input1">
        </div>  
        <button class="col-md-offset-9 col-md-2 small" v-if="rows.length === 0"  @click="addRow">+</button>
        <div v-for="(row, index) in rows" :key="index" class="row">  
        <div class="col-md-1"></div>  
        <div class="col-md-2">
          <select class="form-control my-select-tag" name="simple_search_link1" id="simple_search_link1">
            <option value="and">AND</option>
            <option value="or">OR</option>
            
          </select>
        </div>  
        <div class="col-md-2">
          <select class="form-control my-select-tag" id="simple_search_tag1" name="simple_search_tag1">
            <option value="">Any Field</option>
              <option value="ProteinID">Protein Accession</option>
              <option value="Genename">Gene Name</option>
              <option value="Proteinnames">Protein Name</option>
              <option value="stress">stress</option>
              <option value="Condition">Condition</option>
          </select>
        </div>  
        <div class="col-md-6">
          <input class="form-control" type="text" placeholder="Please select a type and enter keyword(s)." id="simple_search_input1" name="simple_search_input1">
        </div>  
        <div class="col-md-1">
          <button class="small" @click="addRow">+</button>  
          <button class="small" @click="removeRow" :disabled="rows.length === 0">-</button>  
        </div>
      </div> 
      <div class="row">
                  <div class="col-md-1"></div>
      
                  <div class="col-md-2">
                    <select class="form-control my-select-mod con2" name="simple_search_org" id="simple_search_org">
                      <option value="">All organisms</option>
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
                    <select class="form-control my-select-mod con2" name="simple_search_mod" id="simple_search_mod">
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
                    <button type="button" @click="Select()" class="form-control btn btn-warning" id="Example">Example</button>
                  </div>
                  <div class="col-md-2">
                    <button type="reset" @click="reset()" class="form-control btn btn-warning">Clear</button>
                  </div>
                  <div class="col-md-2">
                    <button @click="searchData()" class="form-control btn btn-warning">Submit</button>
                  </div>
                </div>
          </div>
        
    </div>
    </div>
   
  <br></br>  
  <br></br>
    <div class="card">
      
      <div class="card-header"><h5 class="font-weight-bold">Blast search</h5></div>
      <div class="card-body text-des">Here, we provide an blast search content for users, and you can input a protein sequence and search the result.</div>
      <div class="card-body">
        <!-- Blast search -->
       
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
              <button @click="Select2()" class="form-control btn btn-warning" id="Example2">Example</button>
            </div>
            <div class="col-md-2">
              <button  @click="reset2()" class="form-control btn btn-warning">Clear</button>
            </div>
            <div class="col-md-2">
              <button  class="form-control btn btn-warning" @click="goToBlast">Submit</button>
            </div>
          </div>
        
        <!-- Blast search end -->
      </div>
    </div>
  </div>
  </template>  
  
  
  <script>
    import { store } from '../store.js'
    export default {
      name: "Welcome",
      data() {
        return {
          rows: [] // 用来保存row的数组  
        }
      },
    
      methods: {
        goToBlast() {  
          this.$router.push(('/blast'));  
        },
        Select2() {
          
           document.getElementById("pro_seq").value=">sp|Q9XI90|WRKY4_ARATH Probable WRKY transcription factor 4 OS=Arabidopsis thaliana OX=3702 GN=WRKY4 PE=1 SV=2 MSEKEEAPSTSKSTGAPSRPTLSLPPRPFSEMFFNGGVGFSPGPMTLVSNMFPDSDEFRS FSQLLAGAMSSPATAAAAAAAATASDYQRLGEGTNSSSGDVDPRFKQNRPTGLMISQSQS PSMFTVPPGLSPAMLLDSPSFLGLFSPVQGSYGMTHQQALAQVTAQAVQANANMQPQTEY PPPSQVQSFSSGQAQIPTSAPLPAQRETSDVTIIEHRSQQPLNVDKPADDGYNWRKYGQK QVKGSEFPRSYYKCTNPGCPVKKKVERSLDGQVTEIIYKGQHNHEPPQNTKRGNKDNTAN INGSSINNNRGSSELGASQFQTNSSNKTKREQHEAVSQATTTEHLSEASDGEEVGNGETD VREKDENEPDPKRRSTEVRISEPAPAASHRTVTEPRIIVQTTSEVDLLDDGYRWRKYGQK VVKGNPYPRSYYKCTTPGCGVRKHVERAATDPKAVVTTYEGKHNHDLPAAKSSSHAAAAA  QLRPDNRPGGLANLNQQQQQQPVARLRLKEEQTT"
        },
        reset2() {
           document.getElementById("pro_seq").value='';
        },
        addRow() {  
          this.rows.push(null); // 向数组中添加一个新项，代表一个新的row  
        },  
        removeRow() {  
          if (this.rows.length > 0) {  
            this.rows.pop(); // 移除数组中的最后一个项，代表删除一个row  
          }  
        }  ,
        Select() {
          console.log("randomSelect");
           document.getElementById("simple_search_tag0").value="ProteinID";
           document.getElementById("simple_search_tag1").value="Condition";
           
          
          
          document.getElementById("simple_search_input0").value = "A0A2K3D3L7";
          document.getElementById("simple_search_input1").value = "35°C/25°C";
          
        },
        reset() {
          let options1 = document.getElementById("simple_search_tag0").options;
          // let inputVal = document.getElementById("simple_search_input0").value;
          let options3 = document.getElementById("simple_search_tag1").options;
         
          
          document.getElementById("simple_search_input0").value = "";
          document.getElementById("simple_search_input1").value = "";
          options1[0].selected = true;
          options3[0].selected = true;
          
         
        },
        searchData(){
          let field1 = document.getElementById("simple_search_tag0").value;
          let operator  = document.getElementById("simple_search_link1").value; 
          let field2 =document.getElementById("simple_search_tag1").value;
          let name1=document.getElementById("simple_search_input0").value;
          let name2=document.getElementById("simple_search_input1").value;
          let organisms = document.getElementById("simple_search_org").value;
          let modifications = document.getElementById("simple_search_mod").value;
          console.log(field1, '-------', field2);
          if(name1 == '' || name2 == '' || field1 == '' || field2 == ''){
            let warnMessage = name1 == '' ? '查询条件1不能为空' : '查询条件2不能为空';
            alert(warnMessage);
            return;
          }
        
          this.$axios.post("/Accsearch", {
            data: {
              field1,
              field2,
              name2,
              operator,
              name1,
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
    
    <style >
    /* 在这里添加你的 CSS 样式 */
    .small{
      width: 30px;
      height: 30px;
      background-color:orange;
      color: black;
    }
    .btn{
      width: 150px;
      height: 38px;
    }
    .con2{
      background-color:#57a8ec;
    }
    </style>