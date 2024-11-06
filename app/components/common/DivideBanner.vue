<template>
  <span class="w-full relative overflow-hidden h-[40px]">
    <canvas id="canvas" class="w-full h-full z-0"></canvas>
    <div
      class="w-[20%] absolute top-0 left-0 h-full bg-gradient-to-r from-white to-[rgba(255,255,255,0)]"
    ></div>
    <div
      class="w-[20%] absolute top-0 right-0 h-full bg-gradient-to-l from-white to-[rgba(255,255,255,0)]"
    ></div>
  </span>
</template>

<script setup lang="ts">
import background from '@/assets/images/divide-banner.webp';

interface Local {
  frame: number;
  ctx: any;
  started: boolean;
  canvas: any;
  background: any;
  arrBackground: Array<any>;
}

const local: Local = reactive({
  frame: 0,
  ctx: null,
  started: false,
  canvas: null,
  background: null,
  arrBackground: [],
});

class Background {
  cX: number;
  cY: number;
  cW: number;
  cH: number;
  sX: number;
  sY: number;
  sW: number;
  sH: number;
  dx: number;
  constructor(cX: number, cY: number) {
    this.cX = cX;
    this.cY = cY;
    this.cW = 2099;
    this.cH = 56;
    this.sX = 0;
    this.sY = 0;
    this.sW = 2099;
    this.sH = 56;
    this.dx = -1;
  }
  draw() {
    local.ctx.beginPath();
    local.ctx.drawImage(
      local.background,
      this.sX,
      this.sY,
      this.sW,
      this.sH,
      this.cX,
      this.cY,
      this.cW,
      this.cH,
    );
  }
}

function drawArrayGround() {
  local.arrBackground.forEach((item: any) => item.draw());
}

function updateArrayGround() {
  local.arrBackground.forEach((item) => {
    item.cX += item.dx;
  });

  if (local.arrBackground[0].cX <= -2099) {
    local.arrBackground.splice(0, 1);
    let ground = new Background(local.arrBackground[1].cX + 2099, 0);
    local.arrBackground.push(ground);
  }
}

const initBackground = () => {
  for (let i = 0; i < 3; i++) {
    let ground = new Background(i * 2099, 0);
    local.arrBackground.push(ground);
  }
};

function animate() {
  function update() {
    updateArrayGround();
  }

  function draw() {
    drawArrayGround();
  }
  requestAnimationFrame(animate);
  local.ctx.clearRect(0, 0, local.canvas.width, local.canvas.height);
  local.frame++;
  draw();
  update();
}

onMounted(() => {
  local.canvas = $('#canvas');
  local.canvas.width = window.innerWidth;
  local.canvas.height = 56;
  local.ctx = local.canvas?.getContext('2d');
  local.background = new Image();
  local.background.src = background;
  initBackground();
  animate();
});
</script>

<style scoped></style>
