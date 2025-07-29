<template>
  <div class="task-form">
    <div class="task-input-group">
      <input v-model="task.title" placeholder="Task title..." class="task-input" />
      <button @click="submitTask" class="add-task-btn">
        <i :class="editing ? 'fas fa-save' : 'fas fa-plus'"></i>
        {{ editing ? 'Update' : 'Add Task' }}
      </button>
    </div>

    <div class="task-input-group" style="grid-template-columns: 1fr 1fr;">
      <input v-model="task.description" placeholder="Task description..." class="task-input" />
      <input v-model="task.dueDate" type="date" class="task-input" />
    </div>

    <div>
      <select v-model="task.priority" class="priority-select">
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>

      <select v-model="task.status" class="status-select">
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select v-model="task.assignee" class="assignee-select">
        <option value="">Select Assignee</option>
        <option v-for="user in mockUsers" :key="user.id" :value="user.name">
          {{ user.name }} ({{ user.role }})
        </option>
      </select>
    </div>

    <div v-if="editing" style="margin-top: 1rem;">
      <button @click="cancelEdit" class="btn btn-secondary">Cancel</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['task', 'mockUsers', 'editing'])
const emit = defineEmits(['submit', 'cancel'])

const submitTask = () => emit('submit')
const cancelEdit = () => emit('cancel')
</script>
