<template>
  <SectionCard>
    <div class="flex justify-between items-center">
      <div class="flex space-x-2">
        <div>{{ title }}</div>
        <div>
          <!-- Render the status icon, add aria-label for accessibility -->
          <component
            :is="icon"
            :class="pending ? 'animate-spin' : ''"
            aria-label="Booking status icon"
          />
        </div>
      </div>
      <RoundButton variant="danger" @click="$emit('cancelled')">Cancel</RoundButton>
    </div>
  </SectionCard>
</template>

<script setup>
import SectionCard from '@/components/SectionCard.vue';
import RoundButton from '@/components/RoundButton.vue';
import { LoaderCircle, Check } from 'lucide-vue-next'; // Ensure these icons are properly imported
import { computed } from 'vue';

// Define props: title and status
const props = defineProps({
  title: String,
  status: String
});

// Computed property to check if the booking is pending
const pending = computed(() => props.status === 'pending');

// Switch between the pending icon (LoaderCircle) and the confirmed icon (Check)
const icon = computed(() => (pending.value ? LoaderCircle : Check));
</script>
