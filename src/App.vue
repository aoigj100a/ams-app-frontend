<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Hello world." />
      <nav>
        <RouterLink to="/">
          <span class="bg-slate-500 w-[80px] text-center text-white rounded-md h-[32px] flex justify-center items-center">
            我家
         </span>
        </RouterLink>
        <RouterLink to="/about">另一頁</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
