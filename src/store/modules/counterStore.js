export const counterStore = {
  namespaced:true,
  state: () => ({
    count: 0,
  }),
  actions:{

  },
  mutations: {
    increment (state) {
      state.count++
    },
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}