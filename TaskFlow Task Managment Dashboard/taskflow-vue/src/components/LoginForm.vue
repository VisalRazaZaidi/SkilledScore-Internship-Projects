<template>
  <div class="login-container">
    <div class="login-form">
      <h2><i class="fas fa-tasks"></i> TaskFlow</h2>

      <Message v-if="error" type="error" :text="error" />

      <form @submit.prevent="isRegistering ? register() : login()">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="localEmail" required placeholder="Enter your email" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="localPassword" required placeholder="Enter your password" />
        </div>

        <div class="form-group" v-if="isRegistering">
          <label>Display Name</label>
          <input type="text" v-model="localDisplayName" required placeholder="Enter your display name" />
        </div>

        <button type="submit" :class="isRegistering ? 'register-btn' : 'login-btn'">
          {{ isRegistering ? 'Register' : 'Login' }}
        </button>

        <button type="button" @click="toggleMode" :class="isRegistering ? 'login-btn' : 'register-btn'">
          {{ isRegistering ? 'Back to Login' : 'Create Account' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Message from './Message.vue'

const props = defineProps(['email', 'password', 'displayName', 'isRegistering', 'error'])
const emit = defineEmits(['update:email', 'update:password', 'update:displayName', 'login', 'register', 'toggleMode'])

const localEmail = ref(props.email)
const localPassword = ref(props.password)
const localDisplayName = ref(props.displayName)

watch(() => props.email, val => localEmail.value = val)
watch(() => props.password, val => localPassword.value = val)
watch(() => props.displayName, val => localDisplayName.value = val)

watch(localEmail, val => emit('update:email', val))
watch(localPassword, val => emit('update:password', val))
watch(localDisplayName, val => emit('update:displayName', val))

function login() {
  emit('login')
}

function register() {
  emit('register')
}

function toggleMode() {
  emit('toggleMode')
}
</script>
