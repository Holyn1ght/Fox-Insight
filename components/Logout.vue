<template>
  <button @click="logout" class="text-white px-2 py-1 bg-green">Log out</button>
</template>

/
<script setup>
const supabase = useSupabaseClient();
const router = useRouter();

async function logout() {
  try {
    let { error } = await supabase.auth.signOut();
    router.push('/signin');
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  }
}
</script>
