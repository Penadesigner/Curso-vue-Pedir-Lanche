<template>
  <div class="main-container">
    <h1>MC</h1>
    <Dashmc/>
  </div>
</template>

<script>
import Dashmc from "../components/Dashmc.vue"

export default {
  components: {Dashmc},
  name: 'Pedidos',
}
</script>

<style scoped>
.table {
  width: 100%;
}
</style>