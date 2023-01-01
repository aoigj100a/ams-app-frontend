<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>
<template>
  <div class="pt-[40px] ">
    <div class="mx-auto w-[458px] h-[950px] bg-[#f0d7bc] rounded-[40px] border-[24px] border-black">
      <div class="p-[8px]">
        <div class="text-right">
          <RouterLink to="/login" class="text-[#4b4f7e] text-2xl">
            登入
          </RouterLink>
        </div>
      </div>
      <Menu>
        <MenuButton>More</MenuButton>
        <MenuItems>
          <MenuItem v-slot="{ active }">
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            Account settings
          </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            Documentation
          </a>
          </MenuItem>
          <MenuItem disabled>
          <span class="opacity-75">Invite a friend (coming soon!)</span>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  </div>
</template>

