<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#ID</th>
                <th scope="col">title</th>
                <th scope="col">category</th>
                <th scope="col">price</th>
                <th scope="col">Image</th>
                <th scope="col">Operations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in products" :key="p.id">
                <th scope="row">{{ p.id }}</th>
                <td>{{ p.title }}</td>
                <td>{{ p.category }}</td>
                <td>{{ p.price }}</td>
                <td><img :src="p.thumbnail" width="100" alt="Product"></td>
                <td> <router-link class="btn btn-primary btn-sm" :to="`/ProductDetailsWithCompositionApi/${p.id}`">Show</router-link> </td>
                <td> <router-link class="btn btn-success btn-sm"
                        :to="`/AddAndEditWithCompositionApi/${p.id}`">Edit</router-link> </td>
                <td> <button class="btn btn-danger btn-sm" @click="handledeleteProduct(p.id)">Delete</button> </td>
            </tr>

        </tbody>
    </table>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'ProductsCompositionApi',
    setup() {
        let store = useStore()
        let products = computed(() => store.state.products)
        onMounted(() => {
            store.dispatch('GetAllProducts')
        })
        function handledeleteProduct(id) {
            store.dispatch('deleteProduct', id)
        }

        return {
            products, handledeleteProduct
        }
    }
}
</script>

<style></style>