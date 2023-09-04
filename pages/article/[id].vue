<template>
  <div id="app">
    <Header></Header>
    <main>
      <Article :article="article" ></Article>
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
import { articles } from "~/mockdata";
export default {
  data() {
    return {
      article: "nihuya",
    }
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.article = articles.find(a => a.id === id)
  }
};
</script>
