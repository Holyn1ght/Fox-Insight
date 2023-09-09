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
import supabase from "~/services/supbase_api";

export default {
  data() {
    return {
      article: "",
    };
  },
  async created() {
    const id = this.$route.params.id;
    const response = await supabase.fetchArticleById(id);
    this.article = response.data[0];
  },
};
</script>
