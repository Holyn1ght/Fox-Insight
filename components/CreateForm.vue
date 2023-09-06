<template>
  <form
    @submit.prevent="addNewArticle"
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
      />
    </label>
    <label>
      <h2 class="text-2xl font-semibold text-gray-dark">Enter Post Text</h2>
      <textarea
        v-model="body"
        class="min-h-[340px] h-[55%] border border-gray-dark rounded-md w-full px-3 py-3"
        type="text"
      ></textarea>
    </label>

    <button
      class="h-6 mt-2 flex justify-center items-center text-white bg-green rounded-md w-full font-semibold"
      type="submit"
    >
      Upload
    </button>
  </form>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  methods: {
    async addNewArticle() {
      const articleData = {
        title: this.title,
        description: this.description,
        body: this.body,
      };

      try {
        const response = await api.addArticle(articleData);
        console.log("Article added:", response.data);
      } catch (error) {
        console.error("Error adding article:", error);
      }
    },
  },
};
</script>
