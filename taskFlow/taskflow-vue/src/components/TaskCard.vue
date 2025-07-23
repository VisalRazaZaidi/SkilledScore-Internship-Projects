<template>
  <div :class="['task-card', `priority-${task.priority}`]">
    <div class="task-header">
      <div>
        <div class="task-title">{{ task.title }}</div>
        <div class="task-description">{{ task.description }}</div>
      </div>
      <div class="task-actions">
        <button @click="$emit('edit', task)" class="edit-btn"><i class="fas fa-edit"></i> Edit</button>
        <button @click="$emit('delete', task.id)" class="delete-btn"><i class="fas fa-trash"></i> Delete</button>
      </div>
    </div>

    <div class="task-meta">
      <div>
        <span :class="['status-badge', `status-${task.status}`]">
          {{ statusText }}
        </span>
        <span v-if="task.assignee" class="assignee-tag">
          <i class="fas fa-user"></i> {{ task.assignee }}
        </span>
      </div>
      <div style="font-size: 0.8rem; color: #666;">
        <div v-if="task.dueDate"><i class="fas fa-calendar"></i> {{ formatDate(task.dueDate) }}</div>
        <div><i class="fas fa-clock"></i> {{ formatDate(task.createdAt) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['task'])
const { task } = props
defineEmits(['edit', 'delete'])

const statusText = computed(() => {
  return {
    'todo': 'To Do',
    'inprogress': 'In Progress',
    'completed': 'Completed'
  }[task.status] || task.status
})

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
}
</script>
