<template>
  <div
    id="faqs"
    class="w-full text-white flex flex-col items-center justify-center relative bg-white bg-center bg-cover bg-no-repeat pb-[60px] md:pb-[80px]"
  >
    <div
      class="w-full relative flex flex-col items-center justify-center pb-10 pt-20"
    >
      <img
        :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/faq-background.webp`"
        alt="background-faq"
        class="w-full h-auto"
        data-aos="fade"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      />
      <img
        :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/alien-style.png`"
        alt="alien-style"
        class="absolute h-[50%] bottom-0"
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      />
    </div>
    <div
      class="w-full flex justify-center relative"
      data-aos="fade-down"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div class="main-content flex flex-col gap-6 lg:gap-12 items-center">
        <div
          class="w-full flex flex-col gap-6"
          v-for="(faq, index) in local.FAQList"
          :key="index"
        >
          <template
            v-if="Array.isArray(faq.question) && faq.question.length > 0"
          >
            <div class="w-full flex items-end gap-3">
              <span
                class="w-16 h-16 rounded-full overflow-hidden border border-alien-900"
              >
                <img
                  :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/avatar.png`"
                  alt="avatar"
                  class="w-full h-full object-cover"
                />
              </span>
              <div class="flex-1 flex flex-col gap-3 relative">
                <div
                  class="rounded-lg border border-alien-900 text-base leading-6 font-medium tracking-wide uppercase text-icon-primary w-fit max-w-[50vw] bg-alien-100 p-3 last:rounded-bl-none"
                  v-for="(question, idx) in faq.question"
                  :key="idx"
                >
                  {{ question }}
                </div>
              </div>
            </div>
          </template>
          <template v-if="Array.isArray(faq.answer) && faq.answer.length > 0">
            <div class="w-full flex items-end justify-end gap-3">
              <div class="flex-1 flex flex-col items-end gap-3 relative">
                <div
                  class="rounded-lg border border-alien-900 text-base leading-6 font-medium tracking-wide uppercase text-icon-primary w-fit max-w-[50vw] bg-alien-100 p-3 last:rounded-br-none"
                  v-for="(answer, idx) in faq.answer"
                  :key="idx"
                >
                  {{ answer }}
                </div>
              </div>
              <span class="w-16 h-16">
                <img
                  :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/alien-faq.png`"
                  alt="avatar"
                  class="w-full h-full object-contain"
                />
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

interface Local {
  FAQList: Array<any>;
}

const local: Local = reactive({
  FAQList: [
    {
      question: ['What is a DTF transfer?'],
      answer: [
        'DTF, is otherwise known as Direct To Film. This printing technique involves printing any design and color directly onto a film and then transferring it to any material such as cotton, polyester and linen with a simple 15 second heat press.',
      ],
    },
    {
      question: ['What sizes are available?'],
      answer: ['We have sizes from 2" X 2" to 24" X 20 feet"'],
    },
    {
      question: 'How do transfers hold up in the wash?',
      answer:
        'DTF, is otherwise known as Direct To Film. This printing technique involves printing any design and color directly onto a film and then transferring it to any material such as cotton, polyester and linen with a simple 15 second heat press.',
    },
    {
      question: [
        'ok, last few questions',
        'What file format should my artwork be?',
        'How quickly can I get my order?',
        'What is your refund policy?',
      ],
      answer: [
        'Your questions are very interesting, but my shift is over now, please go to FAQs to learn more!',
      ],
      link: 'faqs',
    },
    {
      question: ['wait...'],
      answer: [],
    },
  ],
});
</script>

<style scoped></style>
