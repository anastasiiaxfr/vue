<template>
   <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
        {{ task.text }}
        <i @click="$emit('delete-task',task.id)" class="fa-thin fa-xmark"></i>
        
    </h3>  
    <p>
        {{ task.day }}
    </p>   

   </div>
</template>

<script>
export default {
   name: 'Task',
   props: {
    task: Object
   },
  
  
}
</script>

<style lang="sass" scoped>
    .task
        max-width: 400px
        margin: 5px auto
        padding: 10px 20px
        background: #f4f4f4
        text-align: left
        font-family: Calibri, sans-serif
        user-select: none
        cursor: pointer


        h3
            display: flex
            justify-content: space-between
            margin: 0 0 5px

            i
                color: red
                font-family: Fontawesome
        p
            margin: 0

        &.reminder 
            border-left: 5px solid #4caf50
</style>