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
                <div class="flex justify-center items-center pb-[16px]">
                    <span class="text-4xl text-[#4b4f7e]">12月15日</span>
                </div>
                <div class="flex justify-center items-center">
                    <span class="text-4xl text-[#4b4f7e]">09:28</span>
                </div>
            </div>
            <div class="flex justify-center pt-[32px]">
                <div class="flex justify-center items-center
                        bg-[#4b4f7e] text-white tracking-widest font-bold 
                        rounded-l-lg transition duration-500 ease select-none px-[32px] py-[16px]
                        hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
                    <span class="text-5xl">
                        上班
                    </span>
                </div>
                <div class="flex justify-center items-center
                        bg-gray-200 text-gray-500 tracking-widest font-bold 
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


