<template>
    <form @submit.prevent=" id ? EditProduct() : submitForm()">
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
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default {
    name: 'AddAndEditComponent',
    setup() {
        let store = useStore()
        let route = useRoute()
        let router = useRouter()
        let title = ref('')
        let category = ref('')
        let price = ref('')

        async function submitForm() {
            let product = {
                title: title.value,
                category: category.value,
                price: price.value,
                thumbnail: 'https://placehold.co/100x100?text=Product&font=Raleway', // Placeholder image URL
            };
            // Handle form submission logic here
            await store.dispatch("AddProduct", product);
            router.push("/productsCompositionApi");
            // Reset form fields after submission
            resetForm();
        }
        function resetForm() {
            title.value = '';
            category.value = '';
            price.value = '';
        }

        async function EditProduct() {
            let product = {
                title: title.value,
                category: category.value,
                price: price.value,
            };
            await store.dispatch("EditProductById", { id: route.params.id, product });
            router.push("/productsCompositionApi");
        }
        let id = ref("")
        onMounted(async () => {
            if (route.params.id) {
                id.value = route.params.id
                await store.dispatch("getProductById", route.params.id)
                title.value = store.state.product.title
                category.value = store.state.product.category
                price.value = store.state.product.price
            }
        })

        return {
            title,
            category,
            price,
            id,
            submitForm,
            EditProduct
        }
    }
}
</script>

<style></style>