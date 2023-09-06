<template>
  <article class="bg-gray-light h-72 border flex flex-col">
    <div class="h-fit min-h-[40px] border-b flex items-center justify-center">
      <h2 class="text-lg font-semibold p-2">{{ article.title }}</h2>
    </div>
    <div class="p-3 flex flex-col justify-between flex-grow">
      <p class="text-sm line-clamp-[7]">
        {{ article.description }}
      </p>
      <div class="flex justify-between mt-2">
        <h3 class="text-sm font-semibold">{{ article.author_info.username }}</h3>
        <NuxtLink
          :to="`/article/${article._id}`"
          class="flex justify-center items-center px-3 text-sm text-gray-light rounded-2xl bg-green hover:opacity-70"
          >More</NuxtLink
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
