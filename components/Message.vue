<template>
  <div
    class="absolute left-6 right-6 top-1/2 -translate-y-1/2 bg-gray-light drop-shadow-md shadow-orange z-10 flex flex-col items-center py-4"
  >
    <h3 class="text-xl font-semibold text-gray-dark">{{ props.message }}</h3>
    <div class="flex justify-center mt-3">
      <button class="bg-green text-white rounded-md py-0.5  min-w-[50px]" @click="() => sendAnswerToParent(true)">
        Yes
      </button>
      <button class="bg-orange text-white rounded-md py-0.5 min-w-[50px] ml-2" @click="() => sendAnswerToParent(false)">
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
