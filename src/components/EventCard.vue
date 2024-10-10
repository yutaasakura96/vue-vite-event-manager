<template>
  <div class="border border-gray-200 bg-white rounded-md">
    <h3 class="p-4 font-medium text-xl border-b border-gray-200">{{ title }}</h3>
    <p class="p-4 border-b border-gray-200">{{ when }}</p>
    <p class="p-4">{{ description }}</p>
    <section class="flex justify-end p-4">
      <Button label="Register" @click="$emit('register')" />
    </section>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
defineProps({
  title: String,
  when: String,
  description: String
});
defineEmits(['register']);
</script>
