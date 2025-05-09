<template>
    <div class="container mt-3">
        <h4 class=" my-4">{{ product.title }}</h4>
        <div v-if="product" class="card mb-3 text-center p-3">
            <img :src="product.thumbnail" class="card-img-top m-auto" alt="Product Image" style="width: 250px;">
            <div class="card-body">
                <p class="card-text lead">Category: {{ product.category }}</p>
                <p class="card-text lead">Price: ${{ product.price }}</p>
                <p class="card-text lead"><small class="text-muted">ID: {{ product.id }}</small></p>
            </div>
        </div>
        <div class="text-center">

            <router-link to="/productsCompositionApi" class="btn btn-primary">Back to Products</router-link>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
    name: 'ProductDetails',
    setup() {
        let store = useStore()
        const route = useRoute() 
        let product = computed(() => store.state.product)
        onMounted(() => {
            store.dispatch('getProductById',route.params.id )
        })

        return {
            product
        }
    }
}
</script>

<style></style>