<script setup lang="ts">
import router from "../router"
const goBack = () => {
    router.back()
}
const logout = () => {
    console.log("logout.")
}
</script>
<template>
    <div class="px-[16px] py-[8px] shadow bg-white">
        <div class="flex justify-between items-center h-[50px]">
            <div @click="goBack" class="cursor-pointer">
                <svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#000" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21"
                        transform="matrix(-1 0 0 1 24 0)" />
                </svg>
            </div>
            <div class="flex justify-center items-center">
                <span 
                @click="logout"
                class="px-[8px] py-[2px] mx-[8px] bg-[#c5c8e8] rounded cursor-pointer 
                text-3xl text-gray-600">登出</span>
            </div>
        </div>
    </div>
</template>