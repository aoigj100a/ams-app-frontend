<template>
    <div class="pt-[40px] ">
        <div class="mx-auto w-[458px] h-[950px] bg-[#f0d7bc] rounded-[40px] border-[24px] border-black">
            <div class="p-[8px]">
                <div class="text-right">
                    <RouterLink to="/" class="text-[#4b4f7e] text-2xl">
                        使用者登入
                    </RouterLink>
                </div>
            </div>
            <div class="flex h-screen">
                <div class="flex-col flex ml-auto mr-auto items-center w-full">
                    <form action="" class="mt-[8px] flex flex-col w-8/12">
                        <div class="pb-[16px]">
                            <h1 class="text-center text-2xl text-[#4b4f7e]">管理員登入</h1>
                        </div>
                        <div class="flex flex-wrap w-full relative bg-white 
                        items-center rounded searchable-list
                        pr-[40px]">
                            <div class="flex -mr-px justify-center p-[16px]">
                                <span class="flex items-center leading-normal bg-white 
                                    rounded rounded-r-none text-xl px-[12px] whitespace-no-wrap text-gray-600">
                                    帳號
                                </span>
                            </div>
                            <input type="text" class="data-list flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-[40px] 
                                border-grey-light rounded rounded-l-none px-[12px] self-center 
                                relative font-roboto text-xl outline-none" placeholder="Username" />
                            <svg class="outline-none cursor-pointer fill-gray-400 absolute transition-all duration-200 h-full w-4 -rotate-90 right-2 top-[50%] -translate-y-[50%]"
                                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M0 256l512 512L1024 256z"></path>
                            </svg>
                            <ul class='absolute option-list overflow-y-scroll max-h-64 min-h-[0px] flex flex-col top-12 
                                        left-0 max-w-[120%] min-w-[120%] bg-white rounded-sm scale-0 opacity-0
                                        transition-all 
                                        duration-200 origin-top-left'>
                            </ul>
                        </div>
                        <div class="pb-[8px] flex pt-[8px] mt-[0px] mb-[8px]
                        bg-slate-500 border-slate-800 border-l-[8px]">
                            <span class="text-white text-sm">請輸入合法帳號後在輸入密碼</span>
                        </div>
                        <div class="flex flex-wrap w-full relative bg-white items-center rounded pr-[40px]">
                            <div class="flex -mr-px justify-center p-[16px]">
                                <span class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl 
                                    px-[12px] whitespace-no-wrap text-gray-600">
                                    密碼
                                </span>
                            </div>
                            <input type="text" class="flex-shrink flex-grow leading-normal w-px flex-1 border-0 
                            h-[40px] border-grey-light rounded rounded-l-none px-[12px] self-center 
                            relative font-roboto text-xl outline-none" placeholder="Password" />
                            <span class="absolute right-[8px]">
                                <svg width="24px" height="24px" viewBox="0 -0.5 17 17" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    class="si-glyph si-glyph-view">
                                    <title>1127</title>
                                    <defs></defs>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(1.000000, 4.000000)" fill="#434343">
                                            <path
                                                d="M8,0 C3.598,0 0.031,2.66 0.031,3.969 C0.031,5.278 3.597,7.938 8,7.938 C12.4,7.938 15.969,5.32 15.969,3.969 C15.969,2.618 12.4,0 8,0 L8,0 Z M7.99,7.062 C4.342,7.062 2.869,5.011 2.869,4 C2.869,2.989 4.342,0.938 7.99,0.938 C11.636,0.938 13.109,2.958 13.109,4 C13.109,5.042 11.637,7.062 7.99,7.062 L7.99,7.062 Z"
                                                class="si-glyph-fill"></path>
                                            <ellipse cx="7.932" cy="3.963" rx="1.932" ry="1.963" class="si-glyph-fill">
                                            </ellipse>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <div class="pb-[8px] flex pt-[8px] mt-[0px] mb-[8px]
                        bg-slate-500 border-slate-800 border-l-[8px]">
                            <span class="text-white text-sm">請輸入密碼在按下登入</span>
                        </div>
                        <a href="#" class="text-base text-right font-roboto text-[#4b4f7e] leading-normal hover:underline mb-6">
                            忘記密碼</a>
                        <RouterLink to="/checkIn"
                            class="bg-[#4b4f7e] text-[#fff] py-[16px] text-center rounded leading-tight text-2xl tracking-widest font-bold mt-[16px] mb-[16px] cursor-pointer">
                            登入打卡
                        </RouterLink>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
