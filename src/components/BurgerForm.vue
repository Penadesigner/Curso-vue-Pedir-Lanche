<template>
    <div class="container">
        <Message :msg="msg" v-show="msg"/>
        <div>
            <div class="container">
            <form id="burger-form" @submit="createBurger">

                <div class="field"> 
                    <label for="nome">Nome Cliente</label>
                        <div class="control">
                            <input class="input" type="text" id="nome" name="nome" v-model="nome">
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                            <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                            </span>
                    </div>
                </div>

                <div class="field"> 
                    <label class="label" for="pao">Escolha o pao</label>
                    <div class="control">
                        <div class="control">
                            <div class="select">
                            <select name="pao" id="pao" v-model="pao">
                                <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                                    {{ pao.tipo }}
                                </option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="field"> 
                    <label class="label" for="carne">Escolha a carne</label>
                     <div class="control">
                        <div class="control">
                            <div class="select">
                                <select name="carne" id="carne" v-model="carne">
                                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                                        {{ carne.tipo }}
                                        </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="field"> 
                    <label class="label" for="carne">Escolha o queijo</label>
                     <div class="control">
                        <div class="control">
                            <div class="select">
                                <select name="carne" id="carne" v-model="queijo">
                                    <option v-for="queijo in queijos" :key="queijo.id" :value="queijo.tipo">
                                        {{ queijo.tipo }}
                                        </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            <div class="field"> 
                <div class="control" >
                        <label class="label" for="opcionais">Selecione as opções</label>
                        <div class="check">
                            <div class="por-linha" v-for="opcional in opcionaisData" :key="opcional.id">
                                <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">{{ opcional.tipo }}
                            </div>
                    </div>
                </div>
            </div>
            
                <div class="input-container"> 
                    <input type="submit" class="button is-success submit-btn" value="Criar meu lance">
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import Message from '../components/Message.vue'

export default {
    name: "BurgerForm",
    data(){
        return {
            paes: null,
            carnes: null,
            opcionaisData: null,
            queijos: null,
            nome: null,
            pao: null,
            carne: null,
            queijo: null,
            opcionais: [],
            status: "solicitado",
            msg: null
        }
    },
    methods: {
        async getIngredientes(){
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json({})

            this.paes = data.paes
            this.carnes = data.carnes
            this.opcionaisData = data.opcionais
            this.queijos = data.queijos
        },
        
        async createBurger(e){

            e.preventDefault()  
            // campos que recebem os parametros do Data, que serao construidos no db.json
            const data = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                queijo: this.queijo,
                opcionais: Array.from(this.opcionais),
                status: "Solicitado",
            }

            const dataJson = JSON.stringify(data)

            const req = await fetch("http://localhost:3000/burgers",{
                method: "POST",headers: {"Content-Type":"application/json"},body: dataJson
            })

            const res = await req.json()
            console.log(res)    
            
            this.msg = `Pedido N ${res.id} realizado com sucesso`

            setTimeout(() => this.msg = "", 3000);

            this.nome = "",
            this.carne = "", 
            this.pao = "",0
            this.opcionais = ""
        },
    },
    mounted(){
        this.getIngredientes()
    },
    components: {
        Message
    }
}
</script>

<style scoped>

.check {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.por-linha input {
    margin: 10px;
}

#main-banner {
    max-width: 600px;
}

</style>