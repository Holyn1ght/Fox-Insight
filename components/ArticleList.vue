<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <ArticlePreview :article="article" class="m-6"></ArticlePreview>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
  },
};
</script>
