import axios from "axios";
import { createStore } from "vuex";

let store = createStore({
  state: {
    products: [],
    product: {},
  },
  mutations: {
    getProducts(state, products) {
      state.products = products;
    },
    getProductByID(state, product) {
      state.product = product;
    },
  },
  actions: {
    GetAllProducts({ commit }) {
      axios
        .get("http://localhost:3000/products")
        .then((response) => {
          commit("getProducts", response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    getProductById({ commit }, id) {
      return axios
        .get(`http://localhost:3000/products/${id}`)
        .then((response) => {
          commit("getProductByID", response.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },
    deleteProduct({ dispatch }, id) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          dispatch("GetAllProducts");
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    },
    AddProduct({ dispatch }, newProduct) {
      axios
        .post("http://localhost:3000/products", newProduct)
        .then(() => {
          dispatch("GetAllProducts");
          // Refresh the product list after adding
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    },
    EditProductById({ dispatch }, { id, product }) {
      axios
        .patch(`http://localhost:3000/products/${id}`, product)
        .then(() => {
          dispatch("GetAllProducts"); // Refresh the product list after editing
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });
    },
  },
  getters: {},
});

export default store;
