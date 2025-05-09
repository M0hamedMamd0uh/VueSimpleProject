<template>
    <form @submit.prevent="id ? EditProduct() : submitForm()">
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="title" required>
        </div>
        <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <input type="text" class="form-control" id="category" placeholder="Enter category" v-model="category"
                required>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" placeholder="Enter price" v-model="price" required>
        </div>
        <div class="text-end">

            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>

<script>
import Mixin from '../../../public/Mixins/CRUD.js'
export default {
    name: 'AddAndEditComponent',
    mixins: [Mixin],
    data() {
        return {
            title: '',
            category: '',
            price: '',
            id: ""
        }
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            const product = {
                title: this.title,
                category: this.category,
                price: this.price,
                thumbnail: 'https://placehold.co/100x100?text=Product&font=Raleway', // Placeholder image URL
            };
            this.AddProduct(product); // Call the mixin method to add the product
            // Reset form fields after submission
            this.resetForm();
        },
        resetForm() {
            this.title = '';
            this.category = '';
            this.price = '';
        },
        getId() {
            this.id = this.$route.params.id
        },
        EditProduct() {
            this.EditProductById(this.id, {
                title: this.title,
                category: this.category,
                price: this.price,
            })
        }

    },
    async created() {
        this.getId();
        if (this.id) {
            let product = await this.getProductById(this.id)
            this.title = product.title
            this.category = product.category
            this.price = product.price
        }

    }
}
</script>

<style></style>