<template>
    <header>
    <h1>{{ title }}</h1>
        <Button text="Add Task" color="green"/>
        
    </header>
</template>

<script>
import Button from '@/components/Button'

export default {
    name: 'Header',
    props: {
        title: String
    },
    components: {
        Button
    }
}
</script>
