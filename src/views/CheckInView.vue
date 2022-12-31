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
            <div class="flex justify-center pt-[32px]">
                <div class="flex justify-center items-center
                        border border-yellow-500 bg-yellow-500 text-white 
                        rounded-l-lg transition duration-500 ease select-none px-[32px] py-[16px]
                        hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
                    <span class="text-5xl">
                        上班
                    </span>
                </div>
                <div class="flex justify-center items-center
                        border border-gray-500 bg-gray-500 text-white 
                        rounded-r-lg transition duration-500 ease select-none px-[32px] py-[16px]
                        hover:bg-gray-600 focus:outline-none focus:shadow-outline">
                    <span class="text-5xl">
                        下班
                    </span>
                </div>
            </div>
            <div class="flex-1 flex bg-slate-600">
                地圖區域
            </div>
        </div>
    </DefaultLayout>
</template> 


