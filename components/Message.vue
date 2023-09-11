<template>
  <div
    class="absolute left-6 right-6 top-1/2 -translate-y-1/2 bg-gray-light drop-shadow-md shadow-orange z-10 flex flex-col items-center py-4"
  >
    <h3 class="text-xl font-semibold text-gray-dark">{{ props.message }}</h3>
    <div class="flex justify-center">
      <button class="bg-green py-1 px-3 w-6" @click="() => sendAnswerToParent(true)">
        Yes
      </button>
      <button class="bg-orange py-1 w-6" @click="() => sendAnswerToParent(false)">
        No
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  ifChooseButtons: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits();

const answer = ref(null);

const sendAnswerToParent = (value) => {
  answer.value = value;
  emit("updateAnswer", answer.value);
};
</script>
