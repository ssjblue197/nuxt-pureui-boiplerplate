<template>
  <div
    class="w-screen z-[1] bg-cover bg-no-repeat bg-center pb-[48px] items-start flex justify-center text-white bg-gray-iron-950 border-t border-gray-iron-800 pt-12"
  >
    <div class="main-content flex flex-col gap-8">
      <div class="items-start flex justify-between flex-wrap gap-9">
        <div class="flex flex-col items-start gap-8">
          <div class="w-full flex flex-col items-start gap-3">
            <TextLogo />
            <span
              class="text-base leading-6 font-normal text-gray-iron-200 text-ibm max-w-[320px]"
            >
              Your one-stop shop to Print-on-Demand
            </span>
          </div>
        </div>
        <div
          class="flex w-full lg:flex-1 text-white text-sm flex-wrap font-semibold"
        >
          <div
            class="flex flex-col items-start md:items-end gap-2 md:gap-4 basis-1/2 md:basis-1/4 xl:basis-1/4 text-text-note text-base leading-6 font-normal pr-2"
          >
            <div class="flex flex-col gap-2 w-min md:gap-4">
              <span
                class="text-inter text-sm md:leading-5 font-semibold text-gray-iron-500"
              >
                Catalog
              </span>
              <nuxt-link
                to="/catalog/tee"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Tee"
              >
                Tee
              </nuxt-link>
              <nuxt-link
                to="/catalog/fleece"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Fleece"
              >
                Fleece
              </nuxt-link>
              <nuxt-link
                to="/catalog/short"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Short"
              >
                Shorts
              </nuxt-link>
              <nuxt-link
                to="/catalog/sticker"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Sticker"
              >
                Stickers
              </nuxt-link>
              <nuxt-link
                to="/catalog/tumbler"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Tumbler"
              >
                Tumblers
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex flex-col items-start md:items-end gap-2 md:gap-4 basis-1/2 md:basis-1/4 xl:basis-1/4 text-text-note text-base leading-6 font-normal"
          >
            <div class="flex flex-col gap-2 w-min md:gap-4">
              <span
                class="text-inter text-sm md:leading-5 font-semibold text-gray-iron-500"
              >
                Company
              </span>
              <nuxt-link
                to="/about"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="about"
              >
                <span class="whitespace-nowrap">About us</span>
              </nuxt-link>
              <nuxt-link
                to="/careers"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Careers"
              >
                Careers
              </nuxt-link>
              <nuxt-link
                to="/facilities"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Facilities"
              >
                Facilities
              </nuxt-link>
              <!-- <nuxt-link
                to="/"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="      POD"
                >
                Prime POD
              </nuxt-link>
              <nuxt-link
                to="/"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="             Blank"
                >
                Cosmic DTF & Blank
              </nuxt-link> -->
              <nuxt-link
                to="/contact?tab=sales"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Contact"
              >
                Contact
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex flex-col items-start md:items-end gap-2 md:gap-4 basis-1/2 md:basis-1/4 xl:basis-1/4 mt-8 md:mt-0 text-text-note text-base leading-6 font-normal"
          >
            <div class="flex flex-col gap-2 w-min md:gap-4">
              <span
                class="text-inter text-sm md:leading-5 font-semibold text-gray-iron-500"
              >
                Resources
              </span>
              <!-- <nuxt-link
                to="/"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Doc"
                >
                Doc
              </nuxt-link> -->
              <nuxt-link
                to="https://docs.swiftpod.com/"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="API"
              >
                API
              </nuxt-link>
              <nuxt-link
                to="/contact?tab=customer"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm whitespace-nowrap"
                name="     center"
              >
                Help center
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex flex-col items-start md:items-end gap-2 md:gap-4 basis-1/2 md:basis-1/4 xl:basis-1/4 mt-8 md:mt-0 text-text-note text-base leading-6 font-normal"
          >
            <div class="flex flex-col gap-2 w-min md:gap-4">
              <span
                class="text-inter text-sm md:leading-5 font-semibold text-gray-iron-500"
              >
                Social
              </span>
              <nuxt-link
                to="https://x.com/swiftpod_x"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="X"
                target="_blank"
                >X
              </nuxt-link>
              <nuxt-link
                to="https://www.linkedin.com/company/swiftpod/about/"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="LinkedIn"
                target="_blank"
                >LinkedIn
              </nuxt-link>
              <nuxt-link
                to="https://www.facebook.com/profile.php?id=61562779239400"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Facebook"
                target="_blank"
                >Facebook
              </nuxt-link>
              <nuxt-link
                to="https://www.instagram.com/swiftpod_/"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Instagram"
                target="_blank"
                >Instagram
              </nuxt-link>
              <nuxt-link
                to="https://www.youtube.com/@swiftpod_yt"
                class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
                name="Youtube"
                target="_blank"
                >Youtube
              </nuxt-link>
            </div>
          </div>
          <!-- <div
            class="flex flex-col gap-2 md:gap-4 basis-1/2 md:basis-1/4 xl:basis-1/4 mt-8 md:mt-0 text-text-note text-base leading-6 font-normal"
          >
            <span
              class="text-inter text-sm md:leading-5 font-semibold text-gray-iron-300"
            >
              Legal
            </span>
            <nuxt-link
              to="/"
              class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
              nameTerms"
              >
              Terms
            </nuxt-link>
            <nuxt-link
              to="/"
              class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
              namePrivacy"
              >
              Privacy
            </nuxt-link>
            <nuxt-link
              to="/"
              class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
              nameCookies"
              >
              Cookies
            </nuxt-link>

            <nuxt-link
              to="/"
              class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
              nameLicenses"
              >
              Licenses
            </nuxt-link>
          </div> -->
        </div>
      </div>

      <div
        class="w-full flex flex-col-reverse md:flex-row gap-4 justify-between items-center text-base leading-6 font-normal"
      >
        <span
          class="text-xs md:text-sm 2xl:text-base leading-6 font-normal text-gray-iron-300 text-ibm"
        >
          © 2024 SwiftPOD. All rights reserved.
        </span>
        <div class="flex flex-row gap-6 text-gray-iron-400">
          <nuxt-link
            to="https://x.com/swiftpod_x"
            class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
            target="_blank"
          >
            <span class="cursor-pointer">
              <p-icon width="24px" height="24px" name="x" />
            </span>
          </nuxt-link>
          <nuxt-link
            to="https://www.linkedin.com/company/swiftpod/about/"
            class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
            target="_blank"
          >
            <span class="cursor-pointer">
              <p-icon width="24px" height="24px" name="linkin" />
            </span>
          </nuxt-link>

          <nuxt-link
            to="https://www.facebook.com/profile.php?id=61562779239400"
            class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
            target="_blank"
          >
            <span class="cursor-pointer">
              <p-icon width="24px" height="24px" name="facebook" />
            </span>
          </nuxt-link>

          <nuxt-link
            to="https://www.instagram.com/swiftpod_/"
            class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
            target="_blank"
          >
            <span class="cursor-pointer">
              <p-icon width="24px" height="24px" name="instagram" />
            </span>
          </nuxt-link>

          <nuxt-link
            to="https://www.youtube.com/@swiftpod_yt"
            class="hover:underline text-gray-iron-200 active:opacity-80 md:text-sm 2xl:text-base text-ibm"
            target="_blank"
          >
            <span class="cursor-pointer">
              <p-icon width="24px" height="24px" name="youtube" />
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollToElement = (query: string) => {
  setTimeout(() => {
    const element: any = $(query);
    $('#main-layout')?.scrollTo({
      top: element?.offsetTop - 64,
      behavior: 'smooth',
    });
  }, 100);
};
</script>

<style scoped></style>
