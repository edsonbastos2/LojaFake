<template>
    <header>
        <nav>
            <router-link to="/" class="logo">
                <h1>LogoDaLoja</h1>
            </router-link>
            <router-link class="btn" v-if="$store.state.login" to="/perfil">{{nome}}</router-link>
            <router-link v-else class="btn" to="/login">
                Vender | Login
            </router-link>
        </nav>
    </header>
</template>

<script>
export default {
    computed:{
        nome(){
            return this.$store.state.usuario.nome
        }
    }
}
</script>

<style lang="scss" scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(56, 176, 0, 0.4);

    .logo{
        padding: 10px 0;
        h1{
            font-size: 1.3rem;
        }
    }
}
</style>
