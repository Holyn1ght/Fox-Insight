<template>
  <div id="app">
    <Header></Header>
    <main>
      <ArticleList/>
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
  justify-content: center;
}
</style>
