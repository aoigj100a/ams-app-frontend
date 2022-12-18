<template>
    <div class="pt-[40px] ">
        <div class="mx-auto w-[458px] h-[950px] bg-slate-300 rounded-[40px] border-[24px] border-black relative">
            <div class="p-[8px] shadow bg-white">
                <div class="flex justify-between items-center">
                    <div>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke="#000" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21"
                                transform="matrix(-1 0 0 1 24 0)" />
                        </svg>
                    </div>
                    <div>
                        登出
                    </div>
                </div>
            </div>
            <div class="flex flex-col h-[calc(100%-72px)]">
                <div class="flex justify-center items-center flex-col pt-[40px] pb-[20px]">
                    <div class="flex justify-center items-center">
                        <span class="text-2xl">管理出缺勤</span>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between p-[8px]">
                        <span>
                            2022 年 12 月
                        </span>
                        <span class="bg-slate-500 text-white">
                            查看出勤異常
                        </span>
                    </div>
                    <div class='w-full max-w-lg mx-auto flex flex-col'>
                        <div class="px-8 w-full">
                            <!-- <div class=" flex items-center justify-between pb-6">
                                <div>
                                    <h2 class="text-gray-600 font-semibold">Products Oder</h2>
                                    <span class="text-xs">All products item</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex bg-gray-50 items-center p-2 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id=""
                                            placeholder="search...">
                                    </div>
                                    <div class="lg:ml-40 ml-10 space-x-8">
                                        <button
                                            class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New
                                            Report</button>
                                        <button
                                            class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
                                    </div>
                                </div>
                            </div> -->
                            <div>
                                <div class="-mx-8 overflow-x-auto">
                                    <div class="inline-block min-w-full overflow-hidden">
                                        <table class="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Name
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        products
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Created at
                                                    </th>

                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 w-10 h-10">
                                                                <img class="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt="" />
                                                            </div>
                                                            <div class="ml-3">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    Vera Carpenter
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Jan 21, 2020
                                                        </p>
                                                    </td>

                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span
                                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                            <span class="relative">Activo</span>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 w-10 h-10">
                                                                <img class="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt="" />
                                                            </div>
                                                            <div class="ml-3">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    Dana Moore
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Jan 10, 2020
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span
                                                            class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                                            <span aria-hidden
                                                                class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                                            <span class="relative">Suspended</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-5 bg-white text-sm">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 w-10 h-10">
                                                                <img class="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                                    alt="" />
                                                            </div>
                                                            <div class="ml-3">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    Alonzo Cox
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 py-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                                    </td>
                                                    <td class="px-5 py-5 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                                    </td>

                                                    <td class="px-5 py-5 bg-white text-sm">
                                                        <span
                                                            class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                            <span aria-hidden
                                                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                            <span class="relative">Inactive</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div
                                            class="px-5 py-5 bg-white border-t flex flex-col items-center justify-between">
                                            <span class="text-xs xs:text-sm text-gray-900">
                                                Showing 1 to 4 of 50 Entries
                                            </span>
                                            <div
                                                class="rounded-full w-[40px] h-[40px] bg-slate-500 text-white text-2xl flex justify-center items-center">
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-[8px] shadow bg-white w-full absolute bottom-0 z-50">
                        <div class="flex justify-between items-center">
                            <div>
                                <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
                                <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <!DOCTYPE svg
                                    PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="31.622px"
                                    height="31.621px" viewBox="0 0 31.622 31.621"
                                    style="enable-background:new 0 0 31.622 31.621;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M31.43,4.945c0-1.194-0.968-2.162-2.162-2.162h-3.656V0.882C25.612,0.395,25.217,0,24.73,0h-1.905
			    c-0.485,0-0.883,0.395-0.883,0.882v1.902H9.802V0.882C9.802,0.395,9.407,0,8.92,0H7.142C6.655,0,6.26,0.395,6.26,0.882v1.902H2.35
			    c-1.194,0-2.162,0.968-2.162,2.162v7.704h1.139v16.749c0,1.229,0.995,2.223,2.223,2.223h24.394c1.229,0,2.223-0.994,2.223-2.223
			    v-16.75h1.267L31.43,4.945L31.43,4.945z M26.624,25.73c0,1.229-0.994,2.223-2.223,2.223H7.218c-1.228,0-2.223-0.994-2.223-2.223
			    V12.649h21.628V25.73L26.624,25.73z" />
                                            <rect x="8.031" y="15.051" width="3.541" height="3.669" />
                                            <rect x="14.102" y="15.051" width="3.541" height="3.669" />
                                            <rect x="20.172" y="15.051" width="3.542" height="3.669" />
                                            <rect x="8.031" y="21.502" width="3.541" height="3.668" />
                                            <rect x="14.102" y="21.502" width="3.541" height="3.668" />
                                            <rect x="20.172" y="21.502" width="3.542" height="3.668" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <svg width="40px" height="40px" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1" fill="white">
                                        <rect x="4.5" y="4.5" width="5" height="5" rx="0.5" />
                                    </mask>
                                    <rect x="4.5" y="4.5" width="5" height="5" rx="0.5" stroke="currentColor"
                                        stroke-width="3" stroke-linecap="square" stroke-linejoin="round"
                                        mask="url(#path-1-inside-1)" />
                                    <mask id="path-2-inside-2" fill="white">
                                        <rect x="10.5" y="4.5" width="5" height="5" rx="0.5" />
                                    </mask>
                                    <rect x="10.5" y="4.5" width="5" height="5" rx="0.5" stroke="currentColor"
                                        stroke-width="3" stroke-linecap="square" stroke-linejoin="round"
                                        mask="url(#path-2-inside-2)" />
                                    <mask id="path-3-inside-3" fill="white">
                                        <rect x="4.5" y="10.5" width="5" height="5" rx="0.5" />
                                    </mask>
                                    <rect x="4.5" y="10.5" width="5" height="5" rx="0.5" stroke="currentColor"
                                        stroke-width="3" stroke-linecap="square" stroke-linejoin="round"
                                        mask="url(#path-3-inside-3)" />
                                    <mask id="path-4-inside-4" fill="white">
                                        <rect x="10.5" y="10.5" width="5" height="5" rx="0.5" />
                                    </mask>
                                    <rect x="10.5" y="10.5" width="5" height="5" rx="0.5" fill="currentColor"
                                        stroke="currentColor" stroke-width="3" stroke-linecap="square"
                                        stroke-linejoin="round" mask="url(#path-4-inside-4)" />
                                    <path d="M3 3H6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    <path d="M3 3V6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    <path d="M3 17L3 13.5" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M3 17H6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    <path d="M17 17H13.5" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M17 17V13.5" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M17 3V6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    <path d="M17 3L13.5 3" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" />
                                </svg>
                            </div>
                            <div>
                                <svg width="40px" height="40px" viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  