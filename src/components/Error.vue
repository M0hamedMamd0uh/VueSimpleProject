<template>
    <div class="container mt-5 d-flex flex-column align-items-center justify-content-center text-center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <router-link to="/" class="btn btn-primary btn-sm">Go to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'ErrorComponent',
}
</script>

<style></style>