<template>
  <div>
    <h1>{{ text }}</h1>
    <Button @btn-click="$emit('toggle-add-task')" :color="showAddTask ? 'red' : 'green'" :text="showAddTask ? 'Close':'Add Task'"></Button>
  </div>
</template>

<script>
import Button from '@/components/todo/Button'
export default{
  name: 'Header',
  props: {
    text: String,
    showAddTask: Boolean
    },
  components: { Button },
  
}
</script>
