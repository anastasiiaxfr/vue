<template>
  <div class="hello">
    <div class="card">
    <img :class="gender" :src="picture" :alt="`${firstName} ${lastName}`">
    <h1>{{ firstName }} {{ lastName }}</h1>
    <h3>Email: {{ email }}</h3>
    <button :class="gender" v-on:click='getUser'>Get Random User</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  props: {
    msg: String
  },
  data (){
    return {
    
        firstName: 'Sam',
        lastName: 'Jackson',
        email: 'sam.jackson@gmail.com',
        gender: 'female',
        picture: 'https://randomuser.me/api/portraits/men/75.jpg' 
    }
  },

  methods: {
    async getUser(){
      const res = await fetch('https://randomuser.me/api/');
      const { results } = await res.json()

      console.log(results) 

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
* 
  font-family: Calibri, sans-serif

.card
  max-width: 600px
  margin: 50px auto
  padding: 30px 15px
  
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%)
  border-radius: 4px
  
  text-align: center

  img
    border-radius: 50%
    width: 150px
    height: 150px

  button
   
    background-color: #fff
    color: #8bc34a
    border: 1px solid #8bc34a
    border-radius: 4px
   
    padding: 12px 18px
    cursor: pointer

    &:hover
       background: #8bc34a
       color: #fff
</style>
