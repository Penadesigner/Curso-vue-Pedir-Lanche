<template>
<div class="container is-max-desktop">
    <Message :msg="msg" v-show="msg"/>
    <div class="columns">
        <div class="is-6">
            <table class="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Pao</th>
                    <th>Carne</th>
                    <th>Opcionais</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody v-for="burg in burgers" :key="burg.id">
                <tr v-if="burg.status != 'Solicitado'">
                    <td>{{burg.id}}</td>
                    <td>{{burg.nome}}</td>
                    <td>{{burg.pao}}</td>
                    <td>{{burg.carne}}</td>
                    <td>
                    <ul> 
                        <li v-for="(opcional, index) in burg.opcionais" :key="index">
                        {{opcional}}
                        </li>
                    </ul>  
                    </td>
                    <td>
                    <select name="status" id="status" @change="updateBurger($event, burg.id)">
                        <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burg.status == s.tipo">
                            {{s.tipo}}
                        </option>
                    </select>
                    </td>
                    <td>
                    <button @click="deleteBurger(burg.id)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="is-6">
            <table class="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Pao</th>
                    <th>Carne</th>
                    <th>Opcionais</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody v-for="burg in burgers" :key="burg.id">
                <tr v-if="burg.status == 'Solicitado'">
                    <td>{{burg.id}}</td>
                    <td>{{burg.nome}}</td>
                    <td>{{burg.pao}}</td>
                    <td>{{burg.carne}}</td>
                    <td>
                    <ul> 
                        <li v-for="(opcional, index) in burg.opcionais" :key="index">
                        {{opcional}}
                        </li>
                    </ul>  
                    </td>
                    <td>
                    <select name="status" id="status" @change="updateBurger($event, burg.id)">
                        <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burg.status == s.tipo">
                            {{s.tipo}}
                        </option>
                    </select>
                    </td>
                    <td>
                    <button @click="deleteBurger(burg.id)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>  
</template>

<script>
import Message from '../components/Message.vue'
export default {  
    name: 'Dashmc',
     data(){
    return {
      burgers: null,
      burger_id: null,
      status: [],
      msg: null
    }
  },
  methods: {
    async getpedidos(){
      const req = await fetch("http://localhost:3000/burgers")
            const data = await req.json({})
            this.burgers = data
            
            //resgatar status do pedido
            this.getStatus()
    },

    async getStatus(){
        const req = await fetch("http://localhost:3000/status")
        const data = await req.json({})
        this.status = data
    },    
    async deleteBurger(id){
            
            const req = await fetch(`http://localhost:3000/burgers/${id}`,{
              method: "DELETE"
            })
            const data = await req.json({})

            this.msg = `Pedido removido com sucesso`
            setTimeout(() => this.msg = "", 3000)

            this.getpedidos()
    },
    async updateBurger(event, id){
            const option = event.target.value
            const dataJson = JSON.stringify({status: option})

            const req = await fetch(`http://localhost:3000/burgers/${id}`,{
              method: "PATCH",
              headers: {"Content-Type":"application/json"},
              body: dataJson
            })
            const data = await req.json()
            console.log(data)
            if(data.status == "Finalizado"){
                this.deleteBurger(id)
            } else {
              this.msg = `Pedido N ${data.id} alterado para ${data.status}`
              setTimeout(() => this.msg = "", 3000)
            }
            this.getpedidos()
    }

  },
  mounted() {
    this.getpedidos()
  },
  components: {
    Message
  }

}
</script>

<style scoped>
.table {
    border: 1px solid black;
    margin: 10px;
}
body .columns {
    justify-content: space-around;
    margin-bottom: 1em;   
}
</style>
