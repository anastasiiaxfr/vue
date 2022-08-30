<template>
  <div class="home">
    <Header></Header>
    <Tasks :tasks="tasks"></Tasks>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Tasks from '@/components/Tasks'

export default {
  name: 'Home',
  components: {
    Header, Tasks
  },
  data(){
    return {
      tasks: [],
    }
  },
  methods: {
    async fetchTasks(){
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    }
  },
  async created(){
    this.tasks = await this.fetchTasks()
  }
}
</script>
