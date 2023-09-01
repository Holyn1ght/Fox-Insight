<template>
  <div id="app">
    <Header></Header>
    <main>
      <Article></Article>
    </main>
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  margin: 0;
  /* display: grid;
  grid-template-rows: auto 1fr auto; */
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
