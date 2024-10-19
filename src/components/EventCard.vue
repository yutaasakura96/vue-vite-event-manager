<template>
  <SectionCard>
    <template #header>
      <slot name="header">
        <h2>{{ title }}</h2>
        <p>{{ when }}</p>
      </slot>
    </template>

    <template #default>
      <slot name="content">
        <p class="hover:text-blue-300 flex gap-2">
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${location}`"
            target="_blank"
          >
            {{ location }}
          </a>
          <MapPin />
        </p>
      </slot>
    </template>

    <template #footer>
      <slot name="footer">
        <div class="space-y-4">
          <img :src="image" alt="Event Image" class="w-full h-80 object-fit" />
          <p>{{ description }}</p>
          <div class="flex gap-5 justify-end">
            <RoundButton @click="$emit('information')"
              >More Information</RoundButton
            >
            <RoundButton @click="$emit('register')">Register</RoundButton>
          </div>
        </div>
      </slot>
    </template>
  </SectionCard>
</template>

<script setup>
import SectionCard from '@/components/SectionCard.vue';
import RoundButton from '@/components/RoundButton.vue';
import { MapPin } from 'lucide-vue-next';

defineProps({
  title: String,
  when: String,
  description: String,
  location: String,
  url: String,
  image: String
});

defineEmits(['register', 'information']);
</script>
