<template>
  <div class="tasks-grid">
    <TaskCard
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
    />
    <div v-if="tasks.length === 0" style="text-align: center; padding: 3rem; color: #666;">
      <i class="fas fa-inbox fa-3x" style="margin-bottom: 1rem; opacity: 0.3;"></i>
      <div>No tasks found. Create your first task above!</div>
    </div>
  </div>
</template>

<script setup>
import TaskCard from './TaskCard.vue';
defineProps(['tasks']);
defineEmits(['edit', 'delete']);
</script>
