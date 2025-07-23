<template>
  <div>
    <!-- Header -->
    <Header :user="user" @logout="logout" />

    <!-- Messages -->
    <Message v-if="successMessage" type="success" :text="successMessage" />
    <Message v-if="error" type="error" :text="error" />

    <!-- Dashboard Layout -->
    <div class="dashboard">
      <!-- Sidebar -->
      <aside class="sidebar">
        <h3><i class="fas fa-chart-bar"></i> Dashboard Stats</h3>
        <Stats :total="totalTasks" :completed="completedTasks" :pending="pendingTasks" />
        
        <AssigneeManager :users="users" @reload="loadUsers" />

        <h3 style="margin-top: 2rem;"><i class="fas fa-filter"></i> Filters</h3>
        <Filters
          :users="users"
          v-model:status="statusFilter"
          v-model:priority="priorityFilter"
          v-model:assignee="assigneeFilter"
        />

      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <h2><i class="fas fa-tasks"></i> Task Management</h2>

        <!-- Task Form -->
        <TaskForm
          :task="newTask"
          :users="users"
          :editing="editingTask !== null"
          @submit="editingTask ? updateTask() : addTask()"
          @cancel="cancelEdit"
        />

        <!-- Task List -->
        <TasksList
          :tasks="filteredTasks"
          @edit="editTask"
          @delete="deleteTask"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import Header from '../components/Header.vue';
import Filters from '../components/Filters.vue';
import Stats from '../components/Stats.vue';
import TaskForm from '../components/TaskForm.vue';
import TasksList from '../components/TasksList.vue';
import Message from '../components/Message.vue';
import { useRouter } from 'vue-router';
import AssigneeManager from '../components/AssigneeManager.vue';

// Firebase Firestore imports
import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where } from 'firebase/firestore';

// Users collection and loading
const users = ref([]);
const usersRef = collection(db, 'users');

async function loadUsers() {
  const snapshot = await getDocs(usersRef);
  users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

const router = useRouter();

// Simulate authenticated user
const user = ref(JSON.parse(localStorage.getItem('taskflow_user')));

if (!user.value) {
  router.push('/');
}

const successMessage = ref('');
const error = ref('');
const editingTask = ref(null);

const newTask = reactive({
  title: '',
  description: '',
  priority: 'medium',
  status: 'todo',
  assignee: '',
  dueDate: ''
});

// Task list
const tasks = ref([]);

const statusFilter = ref('');
const priorityFilter = ref('');
const assigneeFilter = ref('');

const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    const statusMatch = !statusFilter.value || task.status === statusFilter.value;
    const priorityMatch = !priorityFilter.value || task.priority === priorityFilter.value;
    const assigneeMatch = !assigneeFilter.value || task.assignee === assigneeFilter.value;
    return statusMatch && priorityMatch && assigneeMatch;
  });
});

const totalTasks = computed(() => tasks.value.length);
const completedTasks = computed(() => tasks.value.filter(t => t.status === 'completed').length);
const pendingTasks = computed(() => tasks.value.filter(t => t.status !== 'completed').length);

// Firestore collection reference
const taskCollection = collection(db, 'tasks');

// Load user's tasks from Firestore
async function loadTasks() {
  tasks.value = [];
  const q = query(taskCollection, where("uid", "==", user.value.uid));
  const snapshot = await getDocs(q);
  snapshot.forEach(docSnap => {
    tasks.value.push({ id: docSnap.id, ...docSnap.data() });
  });
}

onMounted(() => {
  loadUsers();
  loadTasks();
});

async function logout() {
  localStorage.removeItem('taskflow_user');
  router.push('/');
}

// Add Task to Firestore
async function addTask() {
  if (!newTask.title.trim()) {
    error.value = 'Task title is required';
    setTimeout(() => (error.value = ''), 3000);
    return;
  }

  const task = {
    ...newTask,
    uid: user.value.uid,
    createdAt: new Date().toISOString()
  };
  const docRef = await addDoc(taskCollection, task);
  tasks.value.unshift({ id: docRef.id, ...task });
  resetForm();
  successMessage.value = 'Task added successfully!';
  setTimeout(() => (successMessage.value = ''), 3000);
}

// Edit Task
function editTask(task) {
  editingTask.value = task;
  Object.assign(newTask, task);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update Task in Firestore
async function updateTask() {
  if (!newTask.title.trim()) {
    error.value = 'Task title is required';
    setTimeout(() => (error.value = ''), 3000);
    return;
  }

  const index = tasks.value.findIndex(t => t.id === editingTask.value.id);
  if (index !== -1) {
    const updatedTask = {
      ...editingTask.value,
      ...newTask,
      updatedAt: new Date().toISOString()
    };
    await updateDoc(doc(taskCollection, editingTask.value.id), updatedTask);
    tasks.value[index] = updatedTask;
  }

  resetForm();
  editingTask.value = null;
  successMessage.value = 'Task updated successfully!';
  setTimeout(() => (successMessage.value = ''), 3000);
}

// Delete Task from Firestore
async function deleteTask(id) {
  if (confirm('Are you sure you want to delete this task?')) {
    await deleteDoc(doc(taskCollection, id));
    tasks.value = tasks.value.filter(t => t.id !== id);
    successMessage.value = 'Task deleted successfully!';
    setTimeout(() => (successMessage.value = ''), 3000);
  }
}

function cancelEdit() {
  editingTask.value = null;
  resetForm();
}

function resetForm() {
  Object.assign(newTask, {
    title: '',
    description: '',
    priority: 'medium',
    status: 'todo',
    assignee: '',
    dueDate: ''
  });
}
</script>
