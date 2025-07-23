<template>
  <div class="stats">
    <div class="stat-card">
      <div class="stat-number">{{ total }}</div>
      <div class="stat-label">Total Tasks</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">{{ completed }}</div>
      <div class="stat-label">Completed</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">{{ pending }}</div>
      <div class="stat-label">Pending</div>
    </div>
  </div>
</template>

<script setup>
defineProps(['total', 'completed', 'pending']);
</script>
