import { reactive } from "vue";

export const store = reactive({
  searchResult:null,

  SetSearchData(val) {
    this.searchResult = val;
    console.log(this.searchResult, '----storeVal')
  }
});
