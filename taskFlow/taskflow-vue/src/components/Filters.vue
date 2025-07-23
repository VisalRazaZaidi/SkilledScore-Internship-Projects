<template>
  <div class="filters" style="flex-direction: column;">
    <div class="filter-group">
      <label>Status</label>
      <select v-model="localStatus" class="status-select">
        <option value="">All Status</option>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
    <div class="filter-group">
      <label>Priority</label>
      <select v-model="localPriority" class="priority-select">
        <option value="">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
    <div class="filter-group">
      <label>Assignee</label>
      <select v-model="localAssignee" class="assignee-select">
        <option value="">All Assignees</option>
        <option v-for="user in users" :key="user.id" :value="user.name">
          {{ user.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['users', 'status', 'priority', 'assignee'])
const emit = defineEmits(['update:status', 'update:priority', 'update:assignee'])

const localStatus = ref(props.status)
const localPriority = ref(props.priority)
const localAssignee = ref(props.assignee)

watch(() => props.status, val => localStatus.value = val)
watch(() => props.priority, val => localPriority.value = val)
watch(() => props.assignee, val => localAssignee.value = val)

watch(localStatus, val => emit('update:status', val))
watch(localPriority, val => emit('update:priority', val))
watch(localAssignee, val => emit('update:assignee', val))
</script>
