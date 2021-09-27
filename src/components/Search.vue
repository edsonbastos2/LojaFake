<template>
    <form>
        <input class="search" type="text" name="search" v-model="search" placeholder="Buscar...">
        <input type="submit" value="Buscar" id="search" @click.prevent="searchProducts">
    </form>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return{
            search:''
        }
    },
    methods:{
        searchProducts(){
            return this.$router.push({query:{q:this.search}})
        }
    }
}
</script>

<style lang="scss" scoped>
    form{
        max-width: 600px;
        margin: 30px auto 60px auto;
        position: relative;

        .search{
            width: 100%;
            padding: 20px;
            border: none;
            

            
            &:focus,
            &:hover{
                outline: none;
                box-shadow: 0 6px 12px rgba(56, 176, 0, 0.4);
                transform: scale(1.2);
            }
        }

        #search{
            width: 62px;
            height: 62px;
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            background: url("../assets/search.svg") no-repeat center center;
            text-indent: -150px;
            box-shadow: none;
            cursor: pointer;
        }
    }
</style>