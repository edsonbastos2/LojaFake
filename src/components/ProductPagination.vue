<template>
    <ul v-if="totalPorPagina > 1">
        <li v-for="page in totalPorPagina" :key="page">
            <router-link :to="{query:query(page)}">{{page}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        limitPeagina:{
            type: Number,
            default:1
        },
        totalPagina:{
            type: Number,
            default: 1
        }
    },
    computed:{
        totalPorPagina(){
            const total = (this.totalPagina / this.limitPeagina)
            return total !== Infinity ? Math.ceil(total) : 0
        }
    },
    methods:{
        query(page){
            return {
                ...this.$route.query,
                _page: page
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    ul{
        grid-column: 1 / -1;
    }
    
    li{
        display: inline-block;


        a{
            padding: 2px 8px;
            border-radius: 2px;
            margin: 4px;

        }

    }

    li a.router-link-exact-active{
        background-color: var(--cor-secundaria);
        color: var(--cor-ligth);
    }

</style>