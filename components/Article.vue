<template>
  <article class="bg-gray-light border m-6 w-full">
    <div
      class="h-fit min-h-[40px] border-b flex items-center justify-center p-2"
    >
      <h2 class="text-2xl font-semibold">{{ article.title }}</h2>
    </div>
    <div class="p-3">
      <p class="text-sm block">{{ article.body }}</p>
      <div class="flex justify-end mt-2">
        <h3 class="text-sm font-semibold">
          {{ article.author_data?.username}}
        </h3>
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
