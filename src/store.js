import { reactive } from "vue";

export const store = reactive({
  searchData:[],

  SetSearchData(val) {
    this.searchData = val;
  }
});
