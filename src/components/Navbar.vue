<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link class="navbar-brand" to="/">Task 2</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/productsOptionsApi">Products Options API</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/AddAndEditWithOptionApi">Add New Product [Opt.API]</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/productsCompositionApi">Products Composition API</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/AddAndEditWithCompositionApi">Add New Product [Comp.API]</router-link>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarCompnent',
}
</script>

<style></style>