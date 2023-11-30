<script setup lang='ts'>
import TaskCard from '@/components/TaskCard.vue';

function createTask() {
  console.log(('createtask'))
}

function openTask() {
  console.log('open task')
}
</script>

<template>
  <main h-max w-40 m-4 p-2 rounded-5 bg-red shadow-xl shadow-sm text-center>
    <h2>
      Column Title
    </h2>
    <div>
      <TaskCard :onclick="openTask" />
    </div>
    <button :onclick="createTask">+</button>
  </main>
</template>
