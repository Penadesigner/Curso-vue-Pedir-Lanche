<template>
  <div id="nav">
        <router-link to="/" id="logo-url">
          <img :src="logo" :alt="alt" id="logo">
        </router-link> |
        <router-link to="/">Home</router-link> |
        <router-link to="/pedidos">Pedidos</router-link>
        <router-link to="/mc">Mc</router-link>
        <button class="button is-primary">Realizar pedido</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ["logo","alt"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav{
    background: #222;
    border-bottom: 4px solid black;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav  #logo-url {
      margin: auto;
      margin-left: 0;
  }
  #logo {
    height: 40px;
    width: 40px;
  }
  #nav a{
    color: yellow;
    text-decoration: none;
    margin: 10px;
    transition: .5s;
  }
  #nav a:hover{
    color: red;
  }
</style>
