<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen fixed top-0 left-0 cursor-pointer"
  >
    <div class="h-screen w-screen bg-black opacity-50"></div>
    <div class="absolute inset-0" >
      <div class="flex h-full" >
        <div class="z-30 m-auto bg-white shadow overflow-hidden rounded-3xl">
          <div>
            <h1 class="text-2xl">
              <slot name="title"></slot>
            </h1>
            <main>
              <slot name="body"></slot>
            </main>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  emits:["close"],
  setup(_, { emit }) {
    function close() {
      emit("close");
    }

    return { close };
  },
};
</script>

<style>

</style>