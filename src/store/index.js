import { createStore } from "vuex";
import { counterStore } from "./modules/counterStore";
import { boardStore } from "./modules/boardStore";

const store = createStore({
  modules: {
    counterStore,
    boardStore,
  }
})

console.log(store);

export default store;