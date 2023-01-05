<template>
    <div id="main-banner">
        <h1>Cosa Nostra</h1>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
body h1 {
    color: white;
    padding: 1em;
    background: #222;
    font-weight: 600;
}

#main-banner {
    background-image: url('C:\Users\Pena\Documents\curso_vue_hamburguer\public\img\burger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
}

</style>