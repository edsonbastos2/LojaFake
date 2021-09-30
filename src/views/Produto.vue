<template>
    <section>
        <div v-if="produto" class="produto">
            <ul class="fotos" v-if="produto.fotos">
                <li v-for="(foto, index) in produto.fotos" :key="index">
                    <img :src="foto.src" :alt="foto.title">
                </li>
            </ul>
            <div class="info">
                <h1>{{produto.nome}}</h1>
                <p class="preco">{{numeroPreco(produto.preco)}}</p>
                <p class="descricao">{{produto.descricao}}</p>
                <button class="btn" v-if="produto.vendido === 'false' ">Comprar</button>
                <button v-else class="btn" disabled>Vendido</button>
            </div>
        </div>
        <Loading v-else/>
    </section>
</template>

<script>
import { api } from '@/service/api.js'
import Loading from '../components/Loading.vue'
export default {
  components: { Loading },
    name:'Produto',
    props:['id'],
    data(){
        return{
            produto:null
        }
    },
    computed:{
        numeroPreco(){
            return (valor) =>{
                valor = Number(valor)
                if(!isNaN(valor)){
                    return valor.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })
                }

                return valor
            }
        }
    },
    methods:{
        async getProduct(){
            await api.get(`/produto/${this.id}`)
            .then(resp => {
                this.produto = resp.data
                console.log(resp)
            })
        }
    },
    created(){
        this.getProduct()
    }
}
</script>

<style lang="scss" scoped>
.produto{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 900px;
    padding: 60px 20px;
    margin: 0 auto;

    .preco{
        color: var(--cor-secundaria);
        font-weight: bold;
        font-size: 1.5rem;
        margin: 20px 0 40px 0;
    }

    .descricao{
        font-size: 1.2rem;
    }

    .btn{
        margin-top: 60px;
        width: 200px;
    }
}
</style>