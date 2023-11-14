/* eslint-disable no-unused-vars */
const product = {
  state: () => ({
    products: ["phone", "computer", "television"],
  }),
  mutations: {
    addNewProduct: (state, product) => {
      state.products.push(product);
    },
  },
  actions: {
    addNewProduct: ({ commit }, product) => {
      commit("addNewProduct", product);
    },
  },
  getters: {
    findProduct: (state) => (keywork) => {
        if (keywork.value === '') {
            return [];
        } else return state.products.filter(product => product.indexOf(keywork.value) !== -1);
    },
  },
};
export default product;
