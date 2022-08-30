<template>
   <div>
        <p> {{ task.text }} </p>
        <p> {{ task.day }} </p>
   </div>
</template>

<script>
export default {
   name: 'Task',
   props: {
    task: Object
   }
}
</script>