
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
            <div class="flex">
                <div class="pt-[40px] flex-col flex ml-auto mr-auto justify-centers items-center w-full">
                    <form action="" class="mt-[8px] flex flex-col w-8/12 h-full">
                        <div class="pb-[16px]">
                            <h1 class="text-center text-2xl text-[#4b4f7e] ">修改密碼</h1>
                        </div>
                        <!-- <div class="flex flex-wrap w-full relative bg-white 
                        items-center rounded 
                        pr-[40px]">
                            <div class="flex -mr-px justify-center p-[16px]">
                                <span class="flex items-center leading-normal bg-white 
                                    rounded rounded-r-none text-xl px-[12px] whitespace-no-wrap text-gray-600">
                                    原始密碼
                                </span>
                            </div>
                            <input type="text" class="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-[40px] 
                                border-grey-light rounded rounded-l-none px-[12px] self-center 
                                relative font-roboto text-xl outline-none" placeholder="Password." />
                        </div> -->
                        <!-- <div class="pb-[8px] flex pt-[8px] mt-[0px] mb-[8px]
                        bg-slate-500 border-slate-800 border-l-[8px]">
                            <span class="text-white text-sm">輸入帳號送出後將寄信至您的信箱</span>
                        </div> -->
                        <div class="flex flex-wrap w-full relative bg-white items-center rounded pr-[40px]">
                            <div class="flex -mr-px justify-center p-[16px]">
                                <span class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl 
                                    px-[12px] whitespace-no-wrap text-gray-600">
                                    新密碼
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
                            <span class="text-white text-sm">輸入新密碼</span>
                        </div>
                        <div class="flex flex-wrap w-full relative bg-white items-center rounded pr-[40px]">
                            <div class="flex -mr-px justify-center p-[16px]">
                                <span class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl 
                                    px-[12px] whitespace-no-wrap text-gray-600">
                                    新密碼確認
                                </span>
                            </div>
                            <input type="text" class="flex-shrink flex-grow leading-normal w-px flex-1 border-0 
                            h-[40px] border-grey-light rounded rounded-l-none px-[12px] self-center 
                            relative font-roboto text-xl outline-none" placeholder="check" />
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
                            <span class="text-white text-sm">確認新密碼</span>
                        </div>
                        <RouterLink to="/checkIn"
                            class="bg-[#4b4f7e] text-[#fff] py-[16px] text-center rounded leading-tight text-2xl tracking-widest font-bold mt-[16px] mb-[16px] cursor-pointer">
                            確定送出
                        </RouterLink>
                        <a href="#"
                            class="text-base text-[#4b4f7e] text-right font-roboto leading-normal hover:underline mb-[16px]">
                            完成更變密碼
                        </a>
                        <a href="#"
                            class="text-base text-[#4b4f7e] text-right font-roboto leading-normal hover:underline mb-[16px]">
                            直接重新登入
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  