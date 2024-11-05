<template>
  <div
    id="commitment"
    class="flex w-full justify-center items-center relative bg-[url('https://d1dif2dtw17xb9.cloudfront.net/images/commitment-background.webp')] bg-center bg-cover bg-no-repeat"
  >
    <div
      class="main-content lg:h-screen text-white flex flex-col items-center justify-start z-[2] py-[60px] md:py-[120px] lg:py-[140px] gap-4 md:gap-8 lg:gap-12 relative overflow-hidden"
    >
      <span
        class="uppercase text-lg md:text-xl lg:text-[28px] text-future text-icon-primary"
        data-aos="fade-up"
      >
        our commitment
      </span>
      <div
        class="w-full flex flex-row items-center justify-center py-4 relative slider"
        v-auto-animate="{ duration: 300 }"
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <CommitmentSliderItem
          v-for="(slide, index) in local.slideList"
          :key="index"
          :data="slide"
          :style="{
            transform: local.transformList[index],
            zIndex: local.zIndexList[index],
          }"
          class="slider-item w-[310px] h-[366px] lg:w-[466px] lg:h-[550px]"
          @mouseenter="
            () => {
              local.interact = true;
            }
          "
          @mouseleave="
            () => {
              local.interact = false;
            }
          "
          @click="
            async () => {
              stopAutoPlay();
              let step = Math.abs(index - local.currentIndex);
              let direction = index - local.currentIndex > 0 ? 1 : -1;
              local.currentIndex = index;

              while (step > 0) {
                onChange(direction);
                await waitTime(100);
                step--;
              }
              autoPlay();
            }
          "
        />
      </div>
      <span
        class="flex items-center gap-6 absolute bottom-20 left-10"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <span class="text-white text-future paginate">
          <span class="text-[28px]">{{
            String(local.currentIndex + 1).padStart(2, '0')
          }}</span
          ><span class="text-[16px]">/03 </span>
        </span>
        <span class="flex items-center gap-4">
          <div
            v-for="index in 3"
            :key="index"
            :class="
              twMerge(
                'w-5 h-5 rounded-full relative hover:border hover:border-white cursor-pointer',
                index == local.currentIndex + 1 ? 'border border-white' : '',
              )
            "
            @click="
              async () => {
                stopAutoPlay();
                let step = Math.abs(index - 1 - local.currentIndex);
                let direction = index - 1 - local.currentIndex > 0 ? 1 : -1;
                local.currentIndex = index - 1;

                while (step > 0) {
                  onChange(direction);
                  await waitTime(100);
                  step--;
                }
                autoPlay();
              }
            "
          >
            <div class="w-[6px] h-[6px] center rounded-full bg-white"></div>
          </div>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

import { vAutoAnimate } from '@formkit/auto-animate';

const { $AOS } = useNuxtApp();

interface CommitmentSlide {
  title?: string;
  content?: string;
  image?: string;
}
interface Local {
  currentIndex: number;
  slideList: CommitmentSlide[];
  transformList: string[];
  zIndexList: string[];
  interact: boolean;
  autoPlayInterval: NodeJS.Timeout | null;
}

const local: Local = reactive({
  currentIndex: 0,
  transformList: [],
  zIndexList: [],
  slideList: [
    {
      title: 'No Minimum order',
      content:
        'You can print according to your actual needs without facing any minimum order quantity restrictions.',
      image: 'slider-1.webp',
    },
    {
      title: 'Exceptional Color Reproduction',
      content:
        'High-quality color rendering and sharpness ensure your prints are vibrant and eye-catching.',
      image: 'slider-2.webp',
    },
    {
      title: 'Stretchability means Durability',
      content:
        'After 50+ washes, our product shows no cracks,thanks to our specialized materials and techniques',
      image: 'slider-3.webp',
    },
  ],
  interact: false,
  autoPlayInterval: null,
});

//RE-ASSIGN VALUE AT FIRST INDEX => LAST
const onChange = (toIndex: number) => {
  if (toIndex === 1) {
    local.transformList.unshift(
      local.transformList[local.transformList.length - 1],
    );
    local.transformList.pop();
    local.zIndexList.unshift(local.zIndexList[local.zIndexList.length - 1]);
    local.zIndexList.pop();
  } else {
    local.transformList.push(local.transformList[0]);
    local.transformList.shift();
    local.zIndexList.push(local.zIndexList[0]);
    local.zIndexList.shift();
  }
};

const initial = () => {
  for (let i = 0; i < local.slideList.length; i++) {
    local.transformList.push(`translate3d(${i * 260}px, 0px, -${i * 1000}px)`);
    local.zIndexList.push(`-${i}`);
  }
};

const autoPlay = () => {
  local.autoPlayInterval = setInterval(() => {
    !local.interact && onChange(1);
  }, 3000);
};

const stopAutoPlay = () => {
  if (local.autoPlayInterval) {
    clearInterval(local.autoPlayInterval);
    local.autoPlayInterval = null;
  }
};

const handleAnimate = () => {
  $AOS.init();
};

onMounted(() => {
  initial();
  autoPlay();
  // $AOS.init();
  const mainLayout = $('#main-layout');
  if (mainLayout) {
    mainLayout.addEventListener('scroll', handleAnimate);
  }
});

onBeforeUnmount(() => {
  stopAutoPlay();
  const mainLayout = $('#main-layout');
  if (mainLayout) {
    mainLayout.removeEventListener('scroll', handleAnimate);
  }
});
</script>

<style scoped>
.slider-item {
  position: absolute;
  height: 550px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: transform 500ms;
}
.slider {
  height: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  perspective: 5000px;
}

@media only screen and (max-width: 1200px) {
  .slider {
    perspective: 4000px;
  }
}
@media only screen and (max-width: 768px) {
  .slider {
    perspective: 1500px;
  }
}
</style>
