<template>
  <header class="header">
    <div class="logo">
      <i class="fas fa-tasks"></i>
      TaskFlow Dashboard
    </div>
    <div class="user-info">
      <span>Welcome, {{ user.displayName || user.email }}!</span>
      <button @click="$emit('logout')" class="logout-btn">
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  </header>
</template>

<script setup>
defineProps(['user'])
</script>
