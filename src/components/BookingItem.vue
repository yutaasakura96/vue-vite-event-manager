<template>
  <SectionedCard>
    <div class="flex justify-between">
      <div>{{ title }}</div>
      <RoundButton variant="danger">Cancel</RoundButton>
    </div>
  </SectionedCard>
</template>

<script setup>
defineProps({
  title: String
});
import SectionedCard from '@/components/SectionCard.vue';
import RoundButton from '@/components/RoundButton.vue';
</script>
