<template>
  <div class="todo">
  
  <Header @toggle-add-task="togggleAddTask" text="Task Trecker" :showaddTask="showAddTask"></Header>
  <AddTask @add-task="addTask"/>
  <div v-if="showAddTask">
  <AddTask @add-task="addTask"/>
  </div>
  <Tasks :tasks="tasks" @toggle-reminder="toggleReminder" @delete-task=deleteTask></Tasks>
  </div>
</template>

<script>
import Header from '../components/todo/Header'
import Tasks from '../components/todo/Tasks'
import AddTask from '../components/todo/AddTask'

export default{
  name: 'ToDo',
  components: {
    Header, Tasks, AddTask   
  },
  data(){
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
      alert(this.showAddTask)
    },
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      console.log('task', id)
      if(confirm('Are you sure?')){
        this.tasks = this.tasks.filter((task)=>task.id !== id)
      }
    },
    toggleReminder(id){
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    },

    
  },
  created(){
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'March 1st at 1:30pm',
        reminder: false
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 1st at 5:30pm',
        reminder: true
      },
    ]
  }
}
</script>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  justify-content: space-between
  max-width: 450px
  margin: 0 auto

  
</style>