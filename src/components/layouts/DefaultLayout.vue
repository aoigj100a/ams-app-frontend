<script setup lang="ts">
import TopNavigation from '../TopNavigation.vue'
import BottomNavigation from '../BottomNavigation.vue'
</script>

<template>
    <div class="pt-[40px] ">
        <div class="mx-auto w-[458px] h-[950px] bg-slate-300 rounded-[40px] border-[24px] border-black relative">
            <TopNavigation />
            <slot />
            <BottomNavigation />
        </div>
    </div>
</template>



