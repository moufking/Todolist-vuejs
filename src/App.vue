<template>
  <div id="app">
     <img src="./assets/logo.png">
   <!--<HelloWorld/> -->
   <create-todo @create-todo="addTodo"></create-todo>
    <todo-list :todos="todos"></todo-list>
<!--
    <form class="card" action method="post" @submit.prevent="login">
              <div class="card-body p-6">
                <div class="card-title">Connectez-vous</div>
                <div class="form-group">
                  <label class="form-label">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="user.phone"
                    placeholder="Entrez votre email"
                    required
                    autofocus
                  >
                </div>
                <div class="form-group">
                  <label class="form-label">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="user.password"
                    placeholder="Mot de passe"
                    required
                  >
                </div>

              </div>
               <button class="btn btn-primary">Enregistrer</button>
            </form>
            -->
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld';
import TodoList from './components/TodoList';
import CreateTodo  from './components/CreateTodo'
import ApiService from './service/api.service.js'
import TokenService from './service/storage.service.js'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoList,
    CreateTodo

  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        projet: 'Projet A',
        done: false
      },
      {
        title: 'Todo B',
        projet: 'Projet B',
        done: true
      }],
      user: {
          phone: "67676767",
          password: "aaaaaa",
      }


    }
  },
  methods: {
    addTodo(title) {
      console.log(title.projet);

        this.todos.push({
        title: title.title,
        projet: title.projet,
        done: false,
      });
    },

    login() {

      axios.post('http://localhost:8000/api/login',this.user).then(res => {
        console.log(res.data.token);
        TokenService.saveToken(res.data.token)
        ApiService.setHeader(res.data.token)
      }).catch(err=> {
          console.log(err);
      })
      console.log(this.user);
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
