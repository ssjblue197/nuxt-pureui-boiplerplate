<template>
  <div
    class="w-full flex items-center justify-center relative py-[60px] md:py-[80px] bg-gray-iron-950"
  >
    <video
      autoplay
      muted
      loop
      preload="none"
      id="about-us"
      class="absolute w-screen h-screen object-cover z-0 top-0 left-0 hidden sm:block"
    >
      <source
        :src="`${(nuxtApp.$environment as any)?.assetsCdn}/public/about.mp4`"
        type="video/mp4"
      />
      Your browser does not support HTML5 video.
    </video>
    <video
      autoplay
      muted
      loop
      playsinline
      preload="none"
      id="about-us"
      class="video absolute w-screen h-screen object-cover z-0 top-0 left-0 block sm:hidden"
    >
      <source
        :src="`${(nuxtApp.$environment as any)?.assetsCdn}/public/about-mobile.mp4`"
        type="video/mp4"
      />
      Your browser does not support HTML5 video.
    </video>
    <canvas class="canvas" style="display: none"></canvas>
    <div
      class="absolute w-screen h-screen object-cover top-0 left-0 bg-[rgba(0,0,0,0.4)] z-[1]"
    ></div>
    <div
      class="main-content h-screen flex flex-col items-center justify-center lg:gap-[160px] z-[2]"
    >
      <div
        class="w-full flex flex-col gap-4 md:flex-row items-center md:items-start md:justify-between text-center md:space-x-[120px] lg:space-x-[160px]"
      >
        <div
          class="text-future text-xs md:text-sm lg:text-[32px] !leading-normal font-normal text-gray-iron-25 whitespace-nowrap"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
          tabindex="0"
        >
          ABOUT US
        </div>
        <div
          class="text-ibm text-sm lg:text-[20px] md:text-left !leading-normal font-medium text-gray-iron-200"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
          tabindex="0"
        >
          What began as a humble venture at the local swap meet in San Jose,
          California, has evolved into an industry-leading business specializing
          in print-on-demand. Our cutting-edge technologies and global logistics
          environment allows us to maximize delivery to a wide range of
          customers and partners worldwide, at any scale imaginable.
        </div>
      </div>
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
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';
const nuxtApp = useNuxtApp();

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
      auth: 'Alex Nguyen1',
      description: `Owner of a gift and home decor store`,
      image: `${(nuxtApp.$environment as any)?.assetsCdn}/public/auth.webp`,
      content: `We've used the DTF transfer by size service and love its flexibility, creating top-notch prints for diverse products.`,
    },
    {
      auth: 'Alex Nguyen2',
      description: `Owner of a gift and home decor store`,
      image: `${(nuxtApp.$environment as any)?.assetsCdn}/public/auth.webp`,
      content: `We've used the DTF transfer by size service and love its flexibility, creating top-notch prints for diverse products.`,
    },
    {
      auth: 'Alex Nguyen3',
      description: `Owner of a gift and home decor store`,
      image: `${(nuxtApp.$environment as any)?.assetsCdn}/public/auth.webp`,
      content: `We've used the DTF transfer by size service and love its flexibility, creating top-notch prints for diverse products.`,
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
    local.transformList.push(`translate3d(0px, -${i * 140}px, -${i * 1000}px)`);
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

const autoPlayMobile = () => {
  let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    var CanvasVideoPlayer: any;

    new CanvasVideoPlayer({
      videoSelector: '.video',
      canvasSelector: '.canvas',
      timelineSelector: false,
      autoplay: true,
      makeLoop: true,
      pauseOnClick: false,
      audio: false,
    });
  } else {
    document
      .querySelectorAll('.canvas')[0]
      .setAttribute('style', 'display:none;');
  }
};

onMounted(() => {
  initial();
  autoPlay();
  autoPlayMobile();
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
