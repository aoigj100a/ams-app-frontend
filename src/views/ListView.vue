<script setup lang="ts">
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
</script>
<template>
    <DefaultLayout>
        <div class="p-[8px]">
            <div class="flex flex-col h-[calc(100%-72px)]">
                <div class="flex justify-center items-center flex-col pt-[40px] pb-[24px]">
                    <div class="flex justify-center items-center">
                        <span class="text-2xl text-[#4b4f7e] font-bold">王小明</span>
                    </div>
                </div>
                <div class="flex justify-between px-[16px] pb-[32px] items-center">
                    <div>
                        <RouterLink to="/calendar">
                            <span class="p-[4px] text-gray-400 text-2xl rounded mr-[16px]">
                                日曆顯示
                            </span>
                        </RouterLink>
                        <RouterLink to="/list">
                            <span class="p-[4px] bg-[#e8a985] text-[#fff] text-2xl rounded">
                                清單顯示
                            </span>
                        </RouterLink>
                    </div>
                    <RouterLink to="/changePassword">
                        <span class="text-[#4b4f7e]">修改密碼</span>
                    </RouterLink>
                </div>
                <div>
                    <div class='w-full max-w-lg mx-auto flex flex-col'>
                        <div class="px-[24px] w-full">
                            <div>
                                <div class="-mx-8 overflow-x-auto">
                                    <div class="inline-block min-w-full overflow-hidden">
                                        <table class="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="px-5 py-3  border-gray-200 bg-[#4b4f7e] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        日期
                                                    </th>
                                                    <th
                                                        class="px-5 py-3  border-gray-200 bg-[#4b4f7e] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        上班時間
                                                    </th>
                                                    <th
                                                        class="px-5 py-3  border-gray-200 bg-[#4b4f7e] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        下班時間
                                                    </th>

                                                    <th
                                                        class="px-5 py-3  border-gray-200 bg-[#4b4f7e] text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        是否異常
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        Jan 21, 2020
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            8:30
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            17:30
                                                        </p>
                                                    </td>

                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span
                                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                            <span class="relative">正常</span>
                                                        </span>
                                                    </td>
                                                </tr>


                                                <tr>
                                                    <td class="px-5 py-5 bg-white text-sm">
                                                        Jan 22, 2020
                                                    </td>
                                                    <td class="px-5 py-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">8:30</p>
                                                    </td>
                                                    <td class="px-5 py-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">無紀錄</p>
                                                    </td>
                                                    <td class="px-5 py-5 bg-white text-sm">
                                                        <span
                                                            class="relative inline-block px-3 py-1 font-semibold text-[#bb2649] leading-tight">
                                                            <span aria-hidden
                                                                class="absolute inset-0 bg-[#f4c4d0] opacity-50 rounded-full"></span>
                                                            <span class="relative">異常</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
  

  