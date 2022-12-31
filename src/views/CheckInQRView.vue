<script setup lang="ts">
import router from "../router"
import DefaultLayout from '../components/layouts/DefaultLayout.vue'

const goBack = () => {
    router.back()
}
</script>
<template>
    <DefaultLayout>
            
            <div class="flex flex-col h-[calc(100%-72px)]">
                <div class="flex justify-center items-center flex-col pt-[40px]">
                    <div class="flex justify-center items-center">
                        <span class="text-2xl">12月15日</span>
                    </div>
                    <div class="flex justify-center items-center">
                        <span class="text-2xl">09:28</span>
                    </div>
                </div>
                QR 區域
                <!-- <div class="flex-1 flex bg-slate-600">
                    
                </div> -->
            </div>
            
        </DefaultLayout>
  </template>
