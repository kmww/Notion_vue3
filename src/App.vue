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
* {
  border: 4px solid;
  box-sizing: border-box;
}
.app__inner {
  display: flex;
  height: 100vh;
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
