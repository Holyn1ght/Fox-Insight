<template>
  <form
    @submit.prevent="submitArticle"
    class="bg-gray-light border m-6 px-3 py-4 w-full"
  >
    <label>
      <h2 class="text-2xl font-semibold text-gray-dark">
        Enter Your Post Title
      </h2>
      <p class="text-base text-gray-dark">
        Formulate the title short and clear
      </p>
      <input
        v-model="title"
        class="h-10 border border-gray-dark rounded-md w-full px-3 py-1"
        type="text"
        placeholder="Fox Insight os the best blog ever"
        maxlength="60"
        required
      />
    </label>

    <label>
      <h2 class="text-2xl font-semibold text-gray-dark">
        Enter Post Description
      </h2>
      <p class="text-base text-gray-dark">
        It will be used when you first view post
      </p>
      <input
        v-model="description"
        class="h-10 border border-gray-dark rounded-md w-full px-3 py-1"
        type="text"
        required
      />
    </label>
    <label>
      <h2 class="text-2xl font-semibold text-gray-dark">Enter Post Text</h2>
      <textarea
        v-model="body"
        class="min-h-[340px] h-[55%] border border-gray-dark rounded-md w-full px-3 py-3"
        type="text"
        required
      ></textarea>
    </label>

    <button
      class="h-6 mt-2 flex justify-center items-center text-white bg-green rounded-md w-full font-semibold"
      type="submit"
    >
      Upload
    </button>
    <Message v-if="isSuccessCreated" :message="'Article created!'" />
  </form>
</template>

<script setup>
import supabase from "~/services/supbase_api";
import { useRouter } from 'vue-router'
const router = useRouter();

const title = ref(null);
const description = ref(null);
const body = ref(null);
const isSuccessCreated = ref(null);

const submitArticle = async () => {
  try {
    const articleData = {
      title: title.value,
      description: description.value,
      body: body.value,
    };

    // in response could be only error
    const error = await supabase.addArticle(articleData);

    if (error) {
      isSuccessCreated.value = false;
      throw new Error(error);
    } else {
      isSuccessCreated.value = true;
      setTimeout(() => {
        router.push('/blog')
      }, 250);
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
