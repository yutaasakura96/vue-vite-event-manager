<template>
  <SectionCard>
    <template #header>{{ title }}</template>
    {{ when }}
    <template #location>{{ location }}</template>

    <template #footer>
      <div class="space-y-4">
        <p>{{ description }}</p>
        <div class="flex justify-end">
          <RoundButton @click="$emit('register')"> Register </RoundButton>
        </div>
      </div>
    </template>
  </SectionCard>
</template>

<script setup>
import SectionCard from '@/components/SectionCard.vue';
import RoundButton from '@/components/RoundButton.vue';

defineProps({
  title: String,
  when: String,
  description: String,
  location: String
});

defineEmits(['register']);
</script>
