<template>
  <div class="assignee-manager">
    <h3><i class="fas fa-users-cog"></i> Manage Team Members</h3>

    <!-- Add New Assignee -->
    <div class="form-row">
      <input v-model="newUser.name" placeholder="Full Name" class="input" />
      <input v-model="newUser.email" placeholder="Email" class="input" />
      <select v-model="newUser.role" class="select">
        <option>Team Member</option>
        <option>Admin</option>
      </select>
      <button @click="addUser" class="add-btn">Add</button>
    </div>

    <!-- List Assignees -->
    <ul class="user-list">
      <li v-for="user in users" :key="user.id" class="user-item">
        <span>{{ user.name }} ({{ user.role }})</span>
        <button @click="deleteUser(user.id)" class="delete-btn" title="Delete">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const props = defineProps(['users']);
const emit = defineEmits(['reload']);

const newUser = ref({
  name: '',
  email: '',
  role: 'Team Member'
});

const usersRef = collection(db, 'users');

async function addUser() {
  const { name, email } = newUser.value;
  if (!name.trim() || !email.trim()) return;

  await addDoc(usersRef, { ...newUser.value });
  newUser.value = { name: '', email: '', role: 'Team Member' };
  emit('reload');
}

async function deleteUser(id) {
  await deleteDoc(doc(usersRef, id));
  emit('reload');
}
</script>

<style scoped>
.assignee-manager {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.assignee-manager h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #333;
}

.form-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.input {
  padding: 0.5rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  flex: 1;
  min-width: 150px;
}

.select {
  padding: 0.5rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
}

.add-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.add-btn:hover {
  transform: translateY(-2px);
}

.user-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.user-item {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.8rem;
  border-bottom: 1px solid #e1e5e9;
  align-items: center;
}

.delete-btn {
  background: #dc3545;
  border: none;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: 0.2s ease;
}

.delete-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}
</style>
