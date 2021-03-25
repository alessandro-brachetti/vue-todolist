var app = new Vue({
  el: '#root',
  data: {
    isEditing: false,
    inputTxt: '',
    todos: [
      {
        title:'Lavare la macchina',
        status:'done',
      },
      {
        title:'Pulire casa',
        status:'todo',
      },
      {
        title:'Uscire con il cane',
        status:'todo',
      }
    ]
  },
  computed: {
    todosComputed: function () {
      let todosDone = this.todos.filter((todo) => todo.status == 'done');
      let todosTodo = this.todos.filter((todo) => todo.status == 'todo');

      return [...todosTodo, ...todosDone];
    }
  },
  methods: {
    add: function() {
      if (this.inputTxt != '') {
        let obj = {
          title: this.inputTxt,
          status: 'todo'
        }

        this.todos.push(obj);
        this.inputTxt = '';
      }
    },
    check: function (todo) {
      let index = this.todos.indexOf(todo);
      this.todos[index].status = 'done'
    },
    remove: function (todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    edit: function (todo) {
      let index = this.todos.indexOf(todo);
      console.log(index);
      this.inputTxt = this.todos[index].title
      this.isEditing = true
    },
    update: function (todo) {
      let index = this.todos.indexOf(todo);
      console.log(index);
      this.todos.splice(index, 1, this.inputTxt)
      this.isEditing = false
    }
  },
});
