import { createStore } from "vuex";
import {api} from '@/service/api.js'

export default createStore({
  state: {
    login: false,
    usuario:{
      id: "",
      email: "",
      nome: "",
      senha: "",
      rua: "",
      cep: "",
      numero: "",
      estado: "",
      cidade: ""
    }

  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload
    },
    UPDATE_USUARIO(state, payload){
      state.usuario = payload
    }
  },
  actions: {
    getUsuario(context, payload){
      api.get(`/usuario/${payload}`).then(resp => {
        context.commit('UPDATE_USUARIO', resp.data)
        context.commit('UPDATE_LOGIN', true)
        console.log(resp.data)
      })
    }
  },
  modules: {},
});
