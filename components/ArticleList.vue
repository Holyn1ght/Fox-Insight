<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <ArticlePreview :article="article" class="m-6"></ArticlePreview>
      </li>
    </ul>
  </div>
</template>

<script setup>
import supapi from "~/services/supbase_api";

const articles = ref(null);
const apiError = ref(null);

onMounted(async () => {
  const result = await supapi.fetchArticles();

  if (result.error) {
    apiError.value = result.error;
  } else {
    articles.value = result.data;
  }
});

</script>
