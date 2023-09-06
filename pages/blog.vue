<template>
  <div id="app">
    <Header></Header>
    <main>
      <ArticleList :articles="articles" />
    </main>
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      articles: [],
    };
  },

  async created() {
    try {
      const response = await api.getArticles();
      this.articles = response.data;
    } catch (error) {
      console.error("Error while getting articles: ", error);
    }
  },
};
</script>
