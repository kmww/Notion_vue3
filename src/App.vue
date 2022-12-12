<template>
  <div class="app__inner">
    <div class="app__nav"></div>
    <div class="app__page">
      <div class="page__header"></div>
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app__inner {
  display: flex;
  height: 100vh;
  font-size: 14px;
  line-height: 1.4;
  font-family: "Noto Sans KR", sans-serif;
  .app__nav {
    width: 240px;
    height: 100%;
  }
  .app__page {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .page__header {
      height: 80px;
    }
    .page__container {
      flex-grow: 1;
      overflow-y: auto;
    }
  }
}
</style>
