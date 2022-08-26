<template>
<section>

    <div v-for="task in tasks" :key="task.id">
        <task @toggle-reminder="$emit('toggle-reminder', task.id)"  @delete-task="$emit('delete-task', task.id)" :task="task"></task>
    </div>
</section>
</template>

<script>
import Task from '@/components/todo/Task'

export default {
    name: 'Tasks',
    components: { Task },
    props: {
        tasks: Array
    },
    emits: ['delete-task', 'toggle-reminder']
}
</script>
