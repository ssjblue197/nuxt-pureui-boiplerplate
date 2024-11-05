<template>
  <div
    id="about-us"
    class="w-full text-white flex items-center justify-center relative py-[60px] md:py-[80px]"
  >
    <div
      class="w-full flex flex-row items-center justify-center py-4 relative slider-about"
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
      <div
        class="slider-about-item w-[360px] md:w-[480px] xl:w-[550px] cursor-pointer select-none"
        v-for="(slide, index) in local.aboutList"
        alt="slider-1"
        :key="index"
        :style="{
          transform: local.transformList[index],
          zIndex: local.zIndexList[index],
        }"
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
      >
        <p-lazy-image
          imgClass="w-full h-auto object-contain rounded-lg"
          :imgSrc="slide?.image"
          :alt="slide?.image"
          :name="slide?.image"
        ></p-lazy-image>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';

interface About {
  auth?: string;
  description?: string;
  content?: string;
  image?: string;
}
interface Local {
  currentIndex: number;
  aboutList: Array<About>;
  transformList: string[];
  zIndexList: string[];
  interact: boolean;
  autoPlayInterval: NodeJS.Timeout | null;
}
const local: Local = reactive({
  currentIndex: 0,
  transformList: [],
  zIndexList: [],
  aboutList: [
    {
      image: 'intro1.webp',
    },
    {
      image: 'intro2.webp',
    },
    {
      image: 'intro3.webp',
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
  for (let i = 0; i < local.aboutList.length; i++) {
    local.transformList.push(
      `translate3d(0px, -${i * 10}px, -${i * 60}px) rotate(${(i - 1) * 5}deg)`,
    );
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

onMounted(() => {
  initial();
  autoPlay();
});

onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>

<style scoped>
.slider-about-item {
  position: absolute;
  height: 550px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: transform 500ms;
}
.slider-about {
  height: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  perspective: 5000px;
}

@media only screen and (max-width: 1200px) {
  .slider-about {
    perspective: 4000px;
  }
}
@media only screen and (max-width: 768px) {
  .slider-about {
    perspective: 1500px;
  }
}
</style>
