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
                <td> <router-link class="btn btn-primary btn-sm" :to="`/ProductDetailsWithOptionApi/${p.id}`">Show</router-link> </td>
                <td> <router-link class="btn btn-success btn-sm" :to="`/AddAndEditWithOptionApi/${p.id}`">Edit</router-link> </td>
                <td> <button class="btn btn-danger btn-sm" @click="deleteProduct(p.id)">Delete</button> </td>
            </tr>

        </tbody>
    </table>

</template>

<script>
import Mixin from '../../../public/Mixins/CRUD.js'
export default {
    name: 'ProductsOptionsApi',
    mixins: [Mixin],
    created() {
        this.GetAllProducts()
    },
}
</script>

<style></style>