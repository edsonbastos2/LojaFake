<template>
    <section class="product-container">
        <Search/>
        <div v-for="product in produtos" :key="product.id">
            <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].title">
            <p class="preco">{{product.preco}}</p>
            <h2 class="titulo">{{product.nome}}</h2>
            <p>{{product.descricao}}</p>
        </div>
    </section>
</template>

<script>
import {api} from '@/service/api.js'
import Search from '@/components/Search.vue'
export default {
    components:{
        Search
    },
    data(){
        return{
            produtos:null,

        }
    },
    computed:{
        url(){

            //Montando uma string para passar como paramentro
            let queryString = ''
            for(let key in this.$route.query){
                queryString += `&${key}=${this.$route.query[key]}`
            }
            return '/produto?_limit=10'+ queryString
        }
    },
    methods:{
        getProduct(){
            api.get(this.url)
            .then(resp => {
                this.produtos = resp.data
            })
        }
    },
    watch:{
        url(){
            this.getProduct()
        }
    },
    created(){
        this.getProduct()
    }
}
</script>

<style lang="scss" scoped>

</style>