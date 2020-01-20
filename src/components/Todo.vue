<template>
  <div class='ui centered card'>
    <div class='content' v-show="!isEditing">
        <div class='header'>
            {{ todo.title }}

        </div>
        <div class='meta'>
            {{ todo.projet }}
        </div>
        <div class='extra content'>
            <span class='right floated edit icon' @click="updateTodo(todo)">
            <i class='edit icon'></i>
          </span>
          <span class='right floated trash icon' @click="deleteTodo(todo)">
            <i class='trash icon'></i>
          </span>
        </div>
            <div class='ui centered card' v-show="isUpdating">
              <div class='content'>
                <div class='ui form'>
                  <div class='field'>
                    <label>Title</label>
                    <input v-model="todo.title" type='text' ref='title'
                    defaultValue="" class="form-control">
                  </div>
                  <div class='field'>
                    <label>Project</label>
                    <input type='text'  v-model="todo.projet" ref='project' defaultValue="">
                  </div>
                  <div class='ui two button attached buttons'>
                    <button class='ui basic blue button' v-on:click="updateForm(todo)">
                      Update
                    </button>
                    <button class='ui basic red button' @click="closeForm()">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title" >
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="todo.projet" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' @click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing &&todo.done" disabled>
        Completed
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done">
        Complete
    </div>
</div>
</template>

<script type="text/javascript">
/* eslint-disable */
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
        isUpdating: false,
        titleText: String,
        projectText: String,
        isCreating: Boolean,
      };
    },
    methods: {
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
      deleteTodo(todo) {
      this.$emit('delete-todo', todo);
      },
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
      updateTodo(todo) {
        this.isUpdating=true;
      },
      closeForm() {
      this.isUpdating=false;

      }


    }
  };
</script>
