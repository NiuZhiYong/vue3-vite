<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'asd'
  }
})
const emit = defineEmits(['on-click'])

const sendMsg = () => {
  emit('on-click', param)
}

const count = ref(0)
const param = {
  name: '123',
  age: 87
}
</script>

<template>
  <div class="card">
    <h1><span>{{ title }}</span></h1>
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="sendMsg">给父组件传值</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

button {
  margin: 20px;
  background-color: aqua;
}
</style>