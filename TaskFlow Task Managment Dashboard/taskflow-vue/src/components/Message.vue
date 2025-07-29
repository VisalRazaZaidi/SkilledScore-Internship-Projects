<template>
  <div :class="type">
    {{ text }}
  </div>
</template>

<script setup>
defineProps(['type', 'text']);
</script>
