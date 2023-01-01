<script setup lang="ts">
import router from "../router"
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import QRcode from "../components/QRcode.vue"
const goBack = () => {
    router.back()
}
</script>
<template>
    <DefaultLayout>
        <div class="flex flex-col h-[calc(100%-72px)]">
            <div class="flex justify-center items-center flex-col pt-[40px] pb-[40px]">
                <div class="flex justify-center items-center pb-[16px]">
                    <span class="text-4xl text-[#4b4f7e]">12月15日</span>
                </div>
                <div class="flex justify-center items-center">
                    <span class="text-4xl text-[#4b4f7e]">09:28</span>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <QRcode />
            </div>
        </div>
    </DefaultLayout>
</template>
