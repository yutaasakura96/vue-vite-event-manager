<template>
  <RoundedCard>
    <template v-if="$slots.header">
      <h3 class="px-4 pt-4 font-medium text-xl">
        <slot name="header"></slot>
      </h3>
    </template>

    <div :class="{ 'p-4': true, 'border-gray-200': $slots.footer }">
      <slot></slot>
    </div>

    <template v-if="$slots.footer">
      <div class="p-4">
        <slot name="footer"></slot>
      </div>
    </template>
  </RoundedCard>
</template>

<script setup>
import RoundedCard from '@/components/RoundedCard.vue';
</script>
