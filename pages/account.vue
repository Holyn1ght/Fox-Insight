<template>
  <div id="app">
    <Header></Header>
    <main>
      <div class="flex flex-col items-center mx-auto mt-5">
        <h2>Username: {{user.user_metadata.username}}</h2>
        <h2>Mail: {{user.email}}</h2>
        <Logout />
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import supabase from "~/services/supbase_api";

const user = await supabase.getUserInfo();

</script>
