<template>
  <article class="bg-gray-light h-72 border flex flex-col relative">
    <button @click="deleteCurrentArticle" type="button">
      <div class="absolute top-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill="#FF7F50" />
          <line
            y1="-0.5"
            x2="13.5652"
            y2="-0.5"
            transform="matrix(0.675751 -0.73713 0.603786 0.797147 5.83337 14.9993)"
            stroke="black"
          />
          <line
            y1="-0.5"
            x2="13.5653"
            y2="-0.5"
            transform="matrix(0.675703 0.737174 -0.603835 0.797109 5 5)"
            stroke="black"
          />
        </svg>
      </div>
    </button>

    <div class="h-fit min-h-[40px] border-b flex items-center justify-center">
      <h2 class="text-lg font-semibold p-2">{{ article.title }}</h2>
    </div>
    <div class="p-3 flex flex-col justify-between flex-grow">
      <p class="text-sm line-clamp-[7]">
        {{ article.description }}
      </p>
      <div class="flex justify-between mt-2">
        <h3 class="text-sm font-semibold">
          {{ article.author_data.username }}
        </h3>
        <div class="flex">
          <NuxtLink
            :to="`/article/edit/${article.id}`"
            class="flex justify-center items-center px-3 text-sm text-gray-light rounded-2xl bg-green hover:opacity-70 mr-2"
            >Edit</NuxtLink
          >
          <NuxtLink
            :to="`/article/${article.id}`"
            class="flex justify-center items-center px-3 text-sm text-gray-light rounded-2xl bg-green hover:opacity-70"
            >More</NuxtLink
          >
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import supabase from "../services/supbase_api";

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});



async function deleteCurrentArticle() {
  await supabase.deleteArticle(props.article.id);
}

</script>
