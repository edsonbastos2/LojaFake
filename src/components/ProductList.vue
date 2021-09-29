<template>
    <section class="product-container">
            <Search/>
        <transition mode="out-in">
            <div v-if="produtos && produtos.length" class="products" key="produtos">
                <div class="product" v-for="(product, index) in produtos" :key="index">
                    <router-link to="/">
                        <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].title">
                        <p class="preco">{{product.preco}}</p>
                        <h2 class="title">{{product.nome}}</h2>
                        <p class="description">{{product.descricao}}</p>
                    </router-link>
                </div>
                <PaginationProduct :produtosTotal="produtoTotal" :produtosPorPagina="limitProduct"/>
            </div>

            <div v-else-if="produtos && produtos.length === 0" key="sem-resultado">
                <p class="zeroProduto">Busca sem resultado. Tente buscar outro termo.</p>
            </div>
            <Loading v-else key="loading"/>
        </transition>
    </section>
</template>

<script>
import {api} from '@/service/api.js'
import Search from '@/components/Search.vue'
import {serialize} from '@/helpers.js'
import PaginationProduct from '@/components/PaginationProduct.vue'

export default {
    components:{
        Search,
        PaginationProduct
    },
    data(){
        return{
            produtos:null,
            limitProduct: 9,
            produtoTotal: 0
        }
    },
    computed:{
        url(){
            //Montando uma string para passar como paramentro
            const query = serialize(this.$route.query)
            return `/produto?_limit=${this.limitProduct}${query}`
        }
    },
    methods:{
        getProduct(){
            this.produtos = null
            setTimeout(() => {
                api.get(this.url)
                .then(resp => {
                    this.produtoTotal = Number(resp.headers['x-total-count'])
                    console.log(resp)
                    this.produtos = resp.data
                }) 

            }, 1500)
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
.product-container{
    max-width: 1000px;
    margin: 0 auto;

    .products{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin: 30px;

        .product{
            box-shadow: 0 4px 8px rgba(56, 176, 0, 0.4);
            padding: 20px;
            background-color: #fff;
            border-radius: 4px;
            transition: all .2s;

            &:hover{
                box-shadow: 0 8px 12px rgba(56, 176, 0, 0.4);
                transform: scale(1.1);
                z-index: 1;
                position: relative;

                img{
                    border-radius: 4px;
                    margin-bottom: 20px;
                }
            }

            .title{
                margin-bottom: 30px;
            }

            .preco{
                color: #38b000;
                margin-bottom: 20px;
                font-weight: bold;
            }

            .description{
                font-size: 0.75rem;
            }

        }
            
    }

    .zeroProduto{
        text-align: center;
    }

}
</style>