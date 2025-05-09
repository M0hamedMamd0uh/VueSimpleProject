import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },

  methods: {
    GetAllProducts() {
      axios
        .get("http://localhost:3000/products")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    getProductById(id) {
      return axios
        .get(`http://localhost:3000/products/${id}`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },
    deleteProduct(id) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          this.GetAllProducts(); // Refresh the product list after deletion
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    },
    AddProduct(newProduct) {
      axios
        .post("http://localhost:3000/products", newProduct)
        .then(() => {
          this.GetAllProducts(); // Refresh the product list after adding
          this.$router.push("/productsOptionsApi"); // Redirect to the products list page
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    },
    EditProductById(id, updatedProduct) {
      axios
        .patch(`http://localhost:3000/products/${id}`, updatedProduct)
        .then(() => {
          this.GetAllProducts(); // Refresh the product list after editing
          this.$router.push("/productsOptionsApi"); // Redirect to the products list page
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });
    },
  },
};
