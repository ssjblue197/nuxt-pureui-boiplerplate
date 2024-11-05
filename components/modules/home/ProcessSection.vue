<template>
  <div
    id="process"
    class="w-full text-white h-[600vh] shrink-0 flex items-center justify-center relative bg-white bg-center bg-cover bg-no-repeat pb-[60px] md:pb-[80px]"
  >
    <div
      class="main-content h-screen flex justify-center items-center gap-6 lg:gap-12 sticky top-0 bottom-0"
    >
      <div
        class="w-[360px] sm:w-[600px] lg:w-[700px] aspect-square rounded-full relative"
        ref="circleContainer"
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
          class="center flex flex-col items-center gap-4 w-[240px] sm:w-[420px] lg:w-[500px] text-center"
        >
          <span v-auto-animate>
            <span
              class="text-future text-lg sm:text-xl lg:text-[28px] !leading-normal font-normal text-icon-primary"
              v-if="local.processList[local.currentProcess]?.title"
              :key="contentKey"
              :class="`
                ${local.currentProcess == 0 ? '' : '!text-[8px] sm:!text-sm '}
              `"
            >
              {{ local.processList[local.currentProcess]?.title }}
            </span>
          </span>
          <span v-auto-animate>
            <span
              class="text-sm sm:text-base lg:text-base !leading-normal font-medium tracking-wide uppercase text-text-note"
              v-if="local.processList[local.currentProcess]?.description"
              :key="contentKey"
              :class="`
                ${local.currentProcess == 0 ? '' : '!text-[8px] sm:!text-sm'}
              `"
            >
              {{ local.processList[local.currentProcess]?.description }}
            </span>
          </span>
          <span v-auto-animate>
            <span
              class="text-sm sm:text-base lg:text-base leading-6 font-medium tracking-wide uppercase text-text-note"
              v-if="local.processList[local.currentProcess]?.image"
              :key="contentKey"
            >
              <img
                :src="local.processList[local.currentProcess]?.image"
                alt="img"
              />
            </span>
          </span>
          <span class="center">
            <span
              v-for="item in local.processList.length"
              :key="item"
              class="absolute translate-x-[-50%] translate-y-[-50%]"
              :style="calculateStyle(item - 1)"
            >
              <span
                class="text-future text-text-note text-xs sm:text-lg lg:text-[24px]"
                :class="
                  twMerge(
                    `${
                      local.currentAngle >=
                      ((item - 1) * 360) / local.processList.length - 90
                        ? '!text-alien-700'
                        : ''
                    }`,
                  )
                "
                >{{ String(item - 1).padStart(2, '0') }}</span
              >
            </span>
            <div
              class="h-[52px] aspect-square translate-x-[-50%] translate-y-[-50%] absolute z-[1]"
              :style="alienPosition"
            >
              <img
                :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/alien.png`"
                alt="alien"
                class="w-full h-full object-contain"
              />
            </div>
          </span>
        </div>
        <div class="center z-[-1] w-[calc(100%+100px)] h-[calc(100%+100px)]">
          <svg
            class="base-timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="fill-none stroke-none">
              <circle
                class="stroke-neutral-40 stroke-[5px]"
                cx="50"
                cy="50"
                r="45"
              />
              <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                :class="`base-timer__path-remaining stroke-alien-300`"
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { vAutoAnimate } from '@formkit/auto-animate';
const nuxtApp = useNuxtApp();

interface Local {
  processList: Array<any>;
  currentAngle: number;
  currentProcess: number;
}

const local: Local = reactive({
  processList: [
    {
      title: 'The DTF & Blanks PROCESS',
      description: `Unlock our services effortlessly with just 3 simple steps.`,
    },
    {
      title: 'Submit your design and place your order effortlessly online',
      description: `Choose from a variety of designs with unlimited colors, whether it's a simple concept or intricate artwork. Our advanced technology transforms it into a premium-quality direct-to-film transfer.`,
    },
    {
      title: 'We print your transfer and ship with magic speed',
      description: `Using our exclusive DTF transfer process, we create transfers with unmatched detail and superior quality. Experience the vividness of full-color prints through our advanced direct-to-film transfer technique.`,
    },
    {
      title: 'Heatpress or Cricut when ready. Keep extras in storage forever',
      description: `Apply your DTF transfer at 320°F / 160°C with medium pressure for 12-15 seconds. After allowing 15 seconds to cool, peel, and press again for ultimate durability. Store any extra transfers indefinitely for future use.`,
    },
    {
      title: 'REady to flex',
      image: 'ready-to-flex.webp',
    },
  ],
  currentAngle: -90,
  currentProcess: 0,
});

const circleContainer = ref(null);

const contentKey = ref(makeid(24));

const FULL_DASH_ARRAY = 283;

const alienPosition = computed(() => {
  const circle = circleContainer.value;
  if (!circle) return;
  const radius = (circle as HTMLElement).offsetWidth / 2;
  return {
    left: `${radius * Math.cos((local.currentAngle * (2 * Math.PI)) / 360)}px`,
    top: `${radius * Math.sin((local.currentAngle * (2 * Math.PI)) / 360)}px`,
  };
});

const calculateTimeFraction = () => {
  const rawTimeFraction = (local.currentAngle + 90) / 360;
  return (
    rawTimeFraction - (1 / (local.currentAngle + 90)) * (1 - rawTimeFraction)
  );
};

const setCircleDasharray = () => {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById('base-timer-path-remaining')
    ?.setAttribute('stroke-dasharray', circleDasharray);
};

const handleProcess = () => {
  const processSection = $('#process');
  const viewHeight = window.innerHeight;
  if (!processSection) return;
  if (
    processSection?.getBoundingClientRect().top <= 0 &&
    Math.abs(processSection?.getBoundingClientRect().top) <= 5 * viewHeight
  ) {
    local.currentAngle =
      (-90 +
        Math.abs(
          processSection?.getBoundingClientRect().top / (5 * viewHeight),
        ) *
          360) %
      360;
    local.currentProcess =
      Math.floor(local.currentAngle / (360 / local.processList.length)) + 1;
    setCircleDasharray();
  }
};

const calculateStyle = (index: number) => {
  const circle = circleContainer.value;
  if (!circle) return;
  const radius = ((circle as HTMLElement).offsetWidth / 2) * 0.88;
  const angle =
    ((-90 + (360 / local.processList.length) * index) * (2 * Math.PI)) / 360;
  return {
    left: `${radius * Math.cos(angle)}px`,
    top: `${radius * Math.sin(angle)}px`,
  };
};

onMounted(() => {
  const mainLayout = $('#main-layout');
  if (mainLayout) {
    mainLayout.addEventListener('scroll', handleProcess);
  }
});
onBeforeUnmount(() => {
  const mainLayout = $('#main-layout');
  if (mainLayout) {
    mainLayout.removeEventListener('scroll', handleProcess);
  }
});

watch(
  () => local.currentProcess,
  () => {
    contentKey.value = makeid(24);
  },
);
</script>

<style lang="scss" scoped>
.base-timer__path-remaining {
  /* Just as thick as the original ring */
  stroke-width: 1px;

  /* Rounds the line endings to create a seamless circle */
  stroke-linecap: round;

  /* Makes sure the animation starts at the top of the circle */
  transform: rotate(90deg);
  transform-origin: center;

  /* One second aligns with the speed of the countdown timer */
  transition: 0.15s linear all;
}

.base-timer__svg {
  /* Flips the svg and makes the animation to move left-to-right */
  transform: scaleX(-1);
}

.base-timer__path-remaining.transparent {
  color: transparent;
}
</style>
