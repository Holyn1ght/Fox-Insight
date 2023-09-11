<template>
  <div class="h-12 bg-gray-light z-10">
    <!-- Test code start block -->
    <div class="absolute">
      <!-- <p>{{ session }}</p> -->
    </div>
    <!-- Test code end block -->
    <ul class="flex justify-around h-full items-center relative">
      <li><p class="font-bold text-orange">{{pageName}}</p></li>
      <li>
        <img class="w-8" src="~public/fox-logo.svg" alt="Fox Insight logo" />
      </li>
      <li>
        <button @click="toggleMenu" class="p-2 hover:focus:opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M4.66669 7H23.3334M4.66669 14H23.3334M4.66669 21H23.3334"
              stroke="#FF7F50"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </li>
      <li id="burgerMenu" class="absolute top-12 w-full hidden">
        <ul>
          <li
            class="flex justify-center items-center h-11 bg-green hover:opacity-70 border-b border-gray-light"
          >
            <NuxtLink
              to="/blog"
              class="text-gray-light w-full h-full flex justify-center items-center"
              >Blogs</NuxtLink
            >
          </li>
          <li
            class="flex justify-center items-center h-11 bg-green hover:opacity-70 border-b border-gray-light"
          >
            <NuxtLink
              to="/create"
              class="text-gray-light w-full h-full flex justify-center items-center"
              >Create Post</NuxtLink
            >
          </li>
          <li
            class="flex justify-center items-center h-11 bg-green hover:opacity-70 border-b border-gray-light"
          >
            <NuxtLink
              to="/account"
              class="text-gray-light w-full h-full flex justify-center items-center"
              >Account</NuxtLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();  
const supabase = useSupabaseClient();


const pageName = ref(route.name);
// Do first letter uppercase
pageName.value = pageName.value.charAt(0).toUpperCase() + pageName.value.slice(1);



const session = ref(null);

const { data, error } = await supabase.auth.getSession();

session.value = data;

function toggleMenu() {
  document.getElementById("burgerMenu").classList.toggle("hidden");
}
</script>
