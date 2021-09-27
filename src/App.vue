<template>
<div id="root">
  <Header/>
    <main id="main">
      <router-view />
    </main>
  <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>


<style lang="scss">
*{
  box-sizing: border-box;
}
:root{
  --cor-ligth: #faf9f9;
  --cor-primaria: #70e000;
  --cor-secundaria: #38b000;
  --cor-dark: #0b090a;
}
body,ul,li,h2,p,h1{
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
}
body {
  background-color: var(--cor-ligth);
  font-family: 'Press Start 2P', cursive;
  color: var(--cor-dark);
}

a{
  text-decoration: none;
  color: var(--cor-dark)
}

img{
  max-width: 100%;
  display: block;
}

.btn{
  display: block;
  padding: 10px 30px;
  background-color: var(--cor-secundaria);
  color: #fff;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(56, 176, 0, 0.4);
  transition: all 0.3s;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
}

#root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  #main{
    flex: 1;
  }
}

input, textarea{
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(56, 176, 0, 0.4);
  transition: all .3s;
  font-size: 1rem;
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 15px;
}

input:focus, input:hover, textarea:focus, textarea:hover{
  outline: none;
  box-shadow: 0 6px 12px rgba(56, 176, 0, 0.2);
  border-color: var(--cor-secundaria);
}


</style>
