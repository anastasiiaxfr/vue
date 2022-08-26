<template>
  <button class="btn" @click="onClick()" :style="{background: color}">
    {{ text }}
  </button>
</template>

<script>

export default{
  name: 'Button',
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick(){
     this.$emit('btn-click')
    }
  }
}
</script>

<style lang="sass" scoped>
  .btn
    background: #4caf50
    border: 2px solid #4caf50
    color: #fff
    padding: 12px 15px
    cursor: pointer
</style>