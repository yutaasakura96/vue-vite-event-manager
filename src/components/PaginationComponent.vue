<template>
  <PaginationRoot :total="totalPages" :sibling-count="1" show-edges :default-page="currentPage">
    <PaginationList v-slot="{ items }" class="flex items-center gap-1 text-black">

      <!-- First page button -->
      <PaginationFirst
        class="w-9 h-9 flex items-center justify-center disabled:opacity-50"
        @click="$emit('changePage', 1)"
      >
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>

      <!-- Previous page button -->
      <PaginationPrev
        class="w-9 h-9 flex items-center justify-center disabled:opacity-50"
        @click="$emit('changePage', currentPage - 1)"
      >
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>

      <template v-for="(page, index) in items" :key="index">
        <PaginationListItem
          v-if="page.type === 'page'"
          class="w-12 h-9 border rounded hover:bg-white/10 transition"
          :value="page.value"
          @click="$emit('changePage', page.value)"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else class="w-9 h-9 flex items-center justify-center">
          &#8230;
        </PaginationEllipsis>
      </template>

      <!-- Next page button -->
      <PaginationNext
        class="w-9 h-9 flex items-center justify-center disabled:opacity-50"
        @click="$emit('changePage', currentPage + 1)"
      >
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>

      <!-- Last page button -->
      <PaginationLast
        class="w-9 h-9 flex items-center justify-center disabled:opacity-50"
        @click="$emit('changePage', totalPages)"
      >
        <Icon icon="radix-icons:double-arrow-right" />
      </PaginationLast>

    </PaginationList>
  </PaginationRoot>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from 'radix-vue';

defineProps({
  totalPages: Number,
  currentPage: Number,
});
</script>
