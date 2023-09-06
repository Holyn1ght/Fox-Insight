<template>
  <div id="app">
    <Header></Header>
    <main>
      <Article :article="article"></Article>
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
  display: flex;
}
</style>

<script>
import api from "../../services/api";

export default {
  data() {
    return {
      article: "",
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const response = await api.getArticleByID(id);
      this.article = response.data;
    } catch (error) {
      console.error("Error while getting getArticleByID: ", error);
    }
  },
};
</script>
