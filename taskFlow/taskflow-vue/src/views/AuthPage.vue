<template>
  <LoginForm
    v-model:email="email"
    v-model:password="password"
    v-model:displayName="displayName"
    :isRegistering="isRegistering"
    :error="error"
    @login="login"
    @register="register"
    @toggleMode="toggleMode"
  />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const email = ref('');
const password = ref('');
const displayName = ref('');
const isRegistering = ref(false);
const error = ref('');
const router = useRouter();

async function login() {
  try {
    const result = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = result.user;
    localStorage.setItem('taskflow_user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.email.split('@')[0]
    }));
    router.push('/dashboard');
  } catch (err) {
    error.value = err.message;
  }
}

async function register() {
  try {
    const result = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = result.user;
    localStorage.setItem('taskflow_user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: displayName.value
    }));
    router.push('/dashboard');
  } catch (err) {
    error.value = err.message;
  }
}

function toggleMode() {
  isRegistering.value = !isRegistering.value;
}
</script>
