<template>
  <SectionedCard>
    <template #header>{{ title }}</template>
    {{ when }}
    <template #footer>
      <div class="space-y-4">
        <p>{{ description }}</p>
        <div class="flex justify-end">
          <RoundButton @click="$emit('register')"> Registered </RoundButton>
        </div>
      </div>
    </template>
  </SectionedCard>
</template>

<script setup>
import SectionedCard from '@/components/SectionedCard.vue';
import RoundButton from '@/components/RoundButton.vue';
defineProps({
  title: String,
  when: String,
  description: String
});
defineEmits(['register']);
</script>
