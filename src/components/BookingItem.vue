<template>
  <SectionedCard>
    <div class="flex justify-between">
      <div class="flex space-x-2">
        <div>{{ title }}</div>
        <div>{{ status }}</div>
      </div>
      <RoundButton variant="danger">Cancel</RoundButton>
    </div>
  </SectionedCard>
</template>

<script setup>
defineProps({
  title: String,
  status: String
});
import SectionedCard from '@/components/SectionCard.vue';
import RoundButton from '@/components/RoundButton.vue';
</script>
