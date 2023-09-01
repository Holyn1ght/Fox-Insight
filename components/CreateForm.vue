<template>
  <form action="" class="bg-gray-light border m-6 px-3 py-4 w-full">
    <label>
      <h2 class="text-2xl font-semibold text-gray-dark">
        Enter Your Post Title
      </h2>
      <p class="text-base text-gray-dark">
        Formulate the title short and clear
      </p>
      <input
        class="h-10 border border-gray-dark rounded-md w-full px-3 py-1"
        type="text"
        placeholder="Fox Insight os the best blog ever"
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
        class="h-10 border border-gray-dark rounded-md w-full px-3 py-1"
        type="text"
      />
    </label>
    <label>
      <h2 class="text-2xl font-semibold text-gray-dark">Enter Post Text</h2>
      <input
        class="min-h-[340px] border border-gray-dark rounded-md w-full px-3 py-1"
        type="text"
      />
    </label>

    <button
      class="mt-14 h-6 flex justify-center items-center text-white bg-green rounded-md w-full font-semibold"
      type="submit"
    >
      Upload
    </button>
  </form>
</template>
