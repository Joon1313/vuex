export const boardStore = {
  // namespaced:true,
  state: () => ({
    좋아요:0,
    공유:0,
    조회수:0,
    신고:0,
  }),
  actions:{
    
  },
  mutations: {
    좋아요증가 (state) {
      state.좋아요++
    },
    공유증가 (state) {
      state.공유++
    },
    조회수증가 (state) {
      state.조회수++
    },
    신고증가 (state) {
      state.신고++
    },
    좋아요감소 (state) {
      state.좋아요--
    },
    공유감소 (state) {
      state.공유--
    },
    조회수감소 (state) {
      state.조회수--
    },
    신고감소 (state) {
      state.신고--
    },
    좋아요초기화 (state) {
      state.좋아요 = 0;
    },
    공유초기화 (state) {
      state.공유 = 0;
    },
    조회수초기화 (state) {
      state.조회수 = 0;
    },
    신고초기화 (state) {
      state.신고 = 0;
    },
  },
  getters: {

  }
}