<template>
  <div class="h-12 bg-gray-light">
    <ul class="flex justify-around h-full items-center relative">
      <li><p class="font-bold text-orange">Home</p></li>
      <li>
        <img class="w-8" src="../src/img/fox-logo.svg" alt="Fox Insight logo" />
      </li>
      <li>
        <button class="p-2 hover:focus:opacity-40">
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
      <li class="absolute top-12 w-full hidden">
        <ul>
          <li
            class="flex justify-center items-center h-11 bg-green hover:opacity-70 border-b border-gray-light"
          >
            <a class="text-gray-light" href="#">Blogs</a>
          </li>
          <li
            class="flex justify-center items-center h-11 bg-green hover:opacity-70 border-b border-gray-light"
          >
            <a class="text-gray-light" href="#">Create Post</a>
          </li>
          <li
            class="flex justify-center items-center h-11 bg-green hover:opacity-70 border-b border-gray-light"
          >
            <a class="text-gray-light" href="#">Account</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
