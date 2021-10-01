<template>
    <section>
        <div class="login">
            <h2>Login</h2>
            <form>
                <label for="email">E-mail</label>
                <input type="email" v-model="login.email" name="email" id="email" placeholder="Digite seu email">
                <label for="senha">Senha</label>
                <input type="password" v-model="login.senha" name="senha" id="senha" placeholder="* * * * *">
                <button class="btn" @click.prevent="logar">Logar</button>
                <a href="/">Perdeu a senha? Clique aqui.</a>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            login:{
                email:'',
                senha:''
            }
        }
    },
    methods:{
        logar(){
           this.$store.dispatch('getUsuario', this.login.email)
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;

    h2{
        text-align: center;
        margin-bottom: 40px;
        font-size: 2rem;
    }

    form{
        display: grid;
        gap: 1rem;

        .btn{
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }

        a{
            font-weight: normal;
            text-align: center;
            margin: 20px auto 0 auto;

            &:hover{
                text-decoration: underline;
                color: var(--cor-secundaria);
            }
        }
    }
}
</style>