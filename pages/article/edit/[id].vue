<template>
  <div id="app">
    <Header></Header>
    <main>
      <EditForm></EditForm>
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
