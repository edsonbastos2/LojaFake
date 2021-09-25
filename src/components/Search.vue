<template>
    <form>
        <input type="text" name="search" v-model="search">
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

</style>