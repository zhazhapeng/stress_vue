<template>
<div class="container">
    <div class="body-header card-header">Result</div> 
    <div class="body-header alert-primary">Search content: Gene Name = WRKY; Organism: Arabidopsis thaliana; Modification: All</div>
    <div class="body-header alert-success">There are 1168 entries with your keyword(s).</div>
    <div class="card-body">
        <div class="row">
            <el-row>
                <el-col :span="20"><div class="grid-content bg-purple">1</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"><button>Filter</button></div></el-col>
            </el-row>
        </div>
        <div class="row">
            <el-row>
                <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-left"><el-checkbox v-model="checked1" label="Download with labelled "></el-checkbox></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"><button>Download</button></div></el-col>
            </el-row>
        </div>
    </div>  
    <div class="table-responsive">
        <table class="resultTable">
            <thead class='thead-dark'><tr>
			<th width='6%'>Detail</th>
			<th class='arrange' value='proid' width='11%'>Protein ID<i class='arrow ri-arrow-up-down-fill'></i></th>
    		<th class='arrange' value='gene' width='10%'>Gene name<i class='arrow ri-arrow-up-down-fill'></i></th>
    		<th class='arrange' value='pos' width='8%'>Position<i class='arrow ri-arrow-up-down-fill'></i></th>
            <th class='arrange' value='mods' width='12%'>Modification<i class='arrow ri-arrow-up-down-fill'></i></th>
    		<th class='arrange' value='pep' width='15%'>SequenceWindow<i class='arrow ri-arrow-up-down-fill'></i></th>
    		<th class='arrange' value='sample' width='9%'>Sample<i class='arrow ri-arrow-up-down-fill'></i></th>   		
    		<th class='arrange' value='con' width='13%'>Condition<i class='arrow ri-arrow-up-down-fill'></i></th>       		
            <th class='arrange' value='qratio' width='8%'>Log2Ratio<i class='arrow ri-arrow-up-down-fill'></i></th>
    		<th class='arrange' value='pvalue' width='8%'><i>P</i>&nbsp;value<i class='arrow ri-arrow-up-down-fill'></i></th>
		    </tr></thead>
            <thead class='table-light table-sm'><tr>
			<th><div class='form-control form-control-sm border-0'><i class='ri-search-line'></i></div></th>
			<th><input class='search-line form-control form-control-sm' type='text' name='proid'></th>
            <th><input class='search-line form-control form-control-sm' type='text' name='gene'></th>
            <th><input class='search-line form-control form-control-sm' type='text' name='pos'></th>
            <th><input class='search-line form-control form-control-sm' type='text' name='mods'></th>
            <th><input class='search-line form-control form-control-sm' type='text' name='pep'></th>
            <th><input class='search-line form-control form-control-sm' type='text' name='sample'></th>
            <th><input class='search-line form-control form-control-sm' type='text' name='con'></th>
            <th><input class='search-line form-control form-control-sm' type='text' name='qratio'></th>
            <th><input class='search-line form-control form-control-sm' type='text' name='pvalue'></th>
		</tr></thead>
        <tbody>
            <tr class="parent-row">
                <td>
                    <div class="expand-indicator"></div>
                </td>
                <td>DFJSJ</td>
                <td>Wifr</td>
                <td>135</td>
                <td>phuydsdfi</td>
                <td>sdkfhshSdfhsdkj</td>
                <td>seedling</td>
                <td>cold/control</td>
                <td>-</td>
                <td>-</td>
                
            </tr>
            <tr class="nexted-content">
                <td colspan="10">
                   <div class="btn-group">
                        <button>About experiment</button>
                        <button>About protein</button>
                        <button>Sequence and Structure</button>
                   </div>
                   <div class="more-info" >
                        <table class="more-table">
                            <tbody>
                                <tr>
                                    <td width="15%">Resource</td>
                                    <td><a href="https://pubmed.ncbi.nlm.nig.gov/28154133/">28154133</a></td>
                                </tr>
                                <tr>
                                    <td>Condition detail</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Sample type</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Enrichment method</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Mass spectrometer</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Search database	</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Search algorithm</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>FDR</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Precursor mass tolerance</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Protease</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Variable modifications</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Fixed modification</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Decoy strategy	</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>PRIDE accession</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Raw peptide</td>
                                    <td>28154133</td>
                                </tr>
                            </tbody>
                        </table>
                   </div>
                   <div class="more-info" style="display:none;" >
                            <table class="more-table">
                            <tbody>
                                <tr>
                                    <td width="15%">Uniprot accession</td>
                                    <td><a href="https://pubmed.ncbi.nlm.nig.gov/28154133/">28154133</a></td>
                                </tr>
                                <tr>
                                    <td>Entrez ID</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Genbank protein ID	</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Genbank nucleotide ID</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Protein name</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Gene name	</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Organism</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Functional description</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Sequence</td>
                                    <td>28154133</td>
                                </tr>
                            
                            </tbody>
                        </table>
                   </div>
                   <div class="more-info" style="display:none;">3</div>
                </td>
            </tr>

            <tr class="parent-row">
                <td>
                    <div class="expand-indicator"></div>
                </td>
                <td>DFJSJ</td>
                <td>Wifr</td>
                <td>135</td>
                <td>phuydsdfi</td>
                <td>sdkfhshSdfhsdkj</td>
                <td>seedling</td>
                <td>cold/control</td>
                <td>-</td>
                <td>-</td>
                
            </tr>
            <tr class="nexted-content">
                <td colspan="10">
                   <div class="btn-group">
                        <button>About experiment</button>
                        <button>About protein</button>
                        <button>Sequence and Structure</button>
                   </div>
                   <div class="more-info" style="display:none;" >
                        <table class="more-table">
                            <tbody>
                                <tr>
                                    <td width="15%">Resource</td>
                                    <td><a href="https://pubmed.ncbi.nlm.nig.gov/28154133/">28154133</a></td>
                                </tr>
                                <tr>
                                    <td>Condition detail</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Sample type</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Enrichment method</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Mass spectrometer</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Search database	</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Search algorithm</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>FDR</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Precursor mass tolerance</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Protease</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Variable modifications</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Fixed modification</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Decoy strategy	</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>PRIDE accession</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Raw peptide</td>
                                    <td>28154133</td>
                                </tr>
                            </tbody>
                        </table>
                   </div>
                   <div class="more-info" >
                            <table class="more-table">
                            <tbody>
                                <tr>
                                    <td width="15%">Uniprot accession</td>
                                    <td><a href="https://pubmed.ncbi.nlm.nig.gov/28154133/">28154133</a></td>
                                </tr>
                                <tr>
                                    <td>Entrez ID</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Genbank protein ID	</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Genbank nucleotide ID</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Protein name</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Gene name	</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Organism</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Functional description</td>
                                    <td>28154133</td>
                                </tr>
                                <tr>
                                    <td>Sequence</td>
                                    <td>28154133</td>
                                </tr>
                            
                            </tbody>
                        </table>
                   </div>
                   <div class="more-info" style="display:none;">3</div>
                </td>
            </tr>
            <tr class="parent-row">
                <td>
                    <div class="expand-indicator"></div>
                </td>
                <td>DFJSJ</td>
                <td>Wifr</td>
                <td>135</td>
                <td>phuydsdfi</td>
                <td>sdkfhshSdfhsdkj</td>
                <td>seedling</td>
                <td>cold/control</td>
                <td>-</td>
                <td>-</td>
                
            </tr> 
        </tbody>

        </table>
        <div class="card-body">
            
            <el-row>
                <el-col :span="6"><div class="grid-content bg-purple">
                    <span id="pageInfo">Showing 1 to 10 of 1168 entries,</span></div>
                </el-col>
                <div>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                        </el-select>
                        <span>entries per page</span>
                </div>
                
                
                <el-col :span="24"><div class="grid-content bg-purple-light">
                    <el-pagination background layout="prev, pager, next" :total="1000">
                    </el-pagination></div>
                </el-col>
            </el-row>
        </div>
    </div> 
</div>
 
</template>
<script>
const parentRows=document.querySelectorAll('.parent-row');
            parentRows.forEach(parentRow =>{
                parentRow.addEventListener('click',()=>{
                    parentRow.classList.toggle('expanded');
                })
            })
export default {
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '5',
          },
          {
            value: '选项2',
            label: '10',
          },
          {
            value: '选项3',
            label: '20',
          },
          {
            value: '选项4',
            label: '50',
          },
          {
            value: '选项5',
            label: '100',
          },
        ],
        value: '',
      }
    },
  }
</script>


<style>
body {  
    font-family: Arial, sans-serif;  
    
}  
.container {  

    width: 1100px; /* 可以根据需要调整宽度 */ 
    height:1000px;
    margin: 30 auto; /* 水平居中 */  
    padding:10px;
    
    border: .5px solid rgba(0,0,0,.125);
    
    
   
}  
.body-header{
    width:1100px;
    height:65px;
    line-height:65px;
    border-collapse: collapse;
    padding-left:20px;
    margin-top:-10px;
    margin-left:-10px;  
}
.card-header{
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
    
}
.alert-primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}
.row{
    width:1100px;
    height:80px;
    border-bottom: 1px solid rgba(0,0,0,.125);
    margin-left:-10px; 
}
.bg-purple-left{
    margin-top:20px;
}
.bg-purple-light button{
    width:150px;
    height:30px;
    margin-top:20px;
    border-color:#c3e6cb;
    background-color: #ffc000;
    color: #000000;  
}
button:hover{
    cursor: pointer;
}
.thead-dark{
    text-align:center;
}
tr,td{
    border:1px solid rgba(0,0,0,.05); 
}
p{
    color:black;
}
.parent-row{
    cursor:pointer;
    text-align:center;
    
}
.parent-row:hover{
    background-color:#f5f5f5;
}
 .parent-row td{
      background-color:rgba(0,0,0,.05);
}

.expand-indicator{
    text-align:center;
    
    font-weight:bold;
}
.expand-indicator::before{
    content:"+";
}
.parent-row.expanded  .expand-indicator::before{
    content:"-";
}
.nexted-content{
    text-align:center;
    
   
    
}
.parent-row.expanded + .nexted-content{
    display:table-row;
}
button{
    color:white;
    background-color:rgba(23,162,184,.5);
    border:1px solid rgba(23,162,184,.5);
    
}
button:focus{   
    box-shadow: 0 0 0 0.2rem rgba(23,162,184,.5);
    background-color:rgba(23,162,184,.5);
    
}
.more-table tr,td{
    height:60px;
    border-collapse:collapse;
    border-top:1px solid rgba(23,162,184,.5);
    border-bottom:1px solid rgba(23,162,184,.5);
}
.more-table tr:last-child td {  
  border-bottom: none; /* 去除最后一行单元格的底部边框 */  
}
.more-table  tr > td:first-child {
    border-right:1px solid rgba(23,162,184,.5);
}

</style>