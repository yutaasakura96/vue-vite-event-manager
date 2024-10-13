<template>
  <RoundedCard>
    <h3 v-if="$slots.header" class="px-4 pt-4 font-medium text-xl">
      <slot name="header"></slot>
    </h3>

    <div v-if="$slots.default" :class="{ 'p-4 ': true, 'border-b border-gray-200': $slots.footer }">
      <slot></slot>
    </div>

    <p
      v-if="$slots.location"
      :class="{ 'p-4 ': true, 'border-b border-gray-200': $slots.location }"
    >
      <slot name="location"></slot>
    </p>
    <div v-if="$slots.footer" class="p-4">
      <slot name="footer"></slot>
    </div>
  </RoundedCard>
</template>

<script setup>
import RoundedCard from '@/components/RoundedCard.vue';
</script>
