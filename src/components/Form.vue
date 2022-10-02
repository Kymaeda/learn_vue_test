<template>
  <form @submit.prevent="submit">
    <div>
      <input type="text" name="username" v-model="username" />
    </div>
    <div>
      <input type="password" name="password" v-model="password" />
    </div>
    <div>
      <button type="submit">submit</button>
    </div>
    <div id="submitted" v-if="submitted">
      submitted!!!!!!
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const submitted = ref(false)

const submit = () => {
  if (username.value && password.value) {
    submitted.value = true
  }
}
</script>
