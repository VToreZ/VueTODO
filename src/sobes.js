// Описание задачи
// 1. Починить код
// 2. Добавить кнопку и функцию удаления задачи
// 3. Посмотреть на код и
// 3.1. Перечислить, что бы вы сделали по-другому
// а) Не давал бы переменным транслитирационные именования (вместо zadachi - Todos)
// б) Не добавлял бы id HTML элементам без необходимости (Вместо id: "search" на крайняк class/data-id: todoInput)
//    Тут же и не подходящее по смыслу именование "search", это не поиск, а окно ввода.
// в) Постарался бы избежать дублирования кода и улучшить его читаемость. Для этого использовать методы массивов(map, filter, reduce).
// 3.2. [опционально] Переписать код как душа просит
// Комментарии по ошибкам можно писать прямо в коде
import vue from "vue";
// var vue = require("vue");

window.app = new vue({
  el: "#app",

  data() {
    return {
      innerData: {
        zadachi: [],
        activeFilter: "active",
        todoCount: 0
      },
      value: "Задача 1"
    };
  },
  created() {
    var search = document.getElementById("search") || {};
    search.focus();
  },
  template: `
    <div>
        <input v-model="value" id="search" />
        <button v-on:click="todo()">Добавить задачу</button>

        <div v-if="innerData.activeFilter == 'active'">
          <div v-if="todo.completed !== true">
            <li v-for="todo in innerData.zadachi">
              {{ todo.name }}
              <button v-on:click="remove(todo)">delete</button>
            </li>
          </div>
        </div>

        <div v-if="innerData.activeFilter == 'all'">
          <div v-for="todo in innerData.zadachi">
            {{ todo.name }}
            <div v-on:click="remove(todo)"></div>
          </div>
        </div>

        <div v-if="innerData.activeFilter == 'completed'">
          <div v-for="todo in innerData.zadachi" v-if="todo.completed == true">
            {{ todo.name }}
            <div v-on:click="remove(todo)"></div>
          </div>
        </div>
 
        <div>
        <span v-on:click="setFilter('active')">Активные</span>
        <span v-on:click="setFilter('all')">Все</span>
        <span v-on:click="setFilter('completed')">Завершенные</span>
        </div>
    </div>
  `,

  methods: {
    todo() {
      this.innerData.zadachi.push({
        name: this.value,
        completed: false,
        id: this.innerData.todoCount
      });
      this.innerData.todoCount++;
    },
    remove(t) {
      console.log(t);
      var todos = [];

      for (var i = 0; i < this.innerData.zadachi.length; i++) {
        if (this.innerData.zadachi[i].id !== t.id) {
          todos.push(this.innerData.zadachi[i]);
        }
      }
      this.$set(this.innerData, "zadachi", todos);
    },

    setFilter(filter) {
      this.$set(this.innerData, "activeFilter", filter);
    }
  }
});
