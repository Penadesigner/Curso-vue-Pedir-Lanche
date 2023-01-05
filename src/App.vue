<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data(){
    return{
      logo_src: "/img/logo.png",
      app_name: "Burguer"
    }
  }
}
</script>


<style>

.main-container {
  min-height:250px;
  background: rgb(216, 216, 216);
}

body h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}

thead tr {
    background: #c4c4c4;
}
</style>
