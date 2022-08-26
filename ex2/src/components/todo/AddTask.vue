<template>
  <div class="addtask">
    <form class="add-form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label>Task</label>
            <input type="text" name="text" placeholder="Add Task" v-model="text">
        </div>
            <div class="form-control">
            <label>Day & Time</label>
            <input type="text" name="day" placeholder="Add Day & Time" v-model="day">
        </div>
        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" name="reminder" v-model="reminder">
        </div>
        <input type="submit" value="Save Task" class="btn btn-block">
    </form>
  </div>
</template>

<script>

export default{
    name: 'AddTask',
    data(){
        return {
            text: '',
            day: '',
            reminder: false

        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()

            if(!this.text){
                alert('Please add a task')
                return
            }

            const newTask = {
                id: Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

            this.$emit('add-task', newTask)

            this.text = ''
            this.day = ''
            this.reminder = false
        }
    }
}
</script>

<style lang="sass" scoped>
.add-form
    max-width: 450px
    margin: 0 auto 20px
    text-align: left
    label 
        display: block
        font-weight: 600
        margin-top: 10px
    input
        box-sizing: border-box
        display: block
        width: 100%
        padding: 8px 10px

.form-control-check
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 10px
    margin-bottom: 10px
    input
        width: auto
        margin: 0
    label
        margin: 0
input.btn
    background: #4caf50
    border: 2px solid #4caf50
    color: #fff
    padding: 12px 15px
    cursor: pointer
    

</style>