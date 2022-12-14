<template>
  <header>
    <div class="titles"></div>
    <div class="actions">
      <button>공유</button>
      <button>업데이트</button>
      <button>즐겨찾기</button>
      <button>기타</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  .titles {
    border: 1px solid;
    flex-grow: 1;
  }
  .actions {
    flex-shrink: 0;
    display: flex;
  }
}
button {
  color: $color-font;
  background: none;
  border: none;
  outline: none;
  font-size: 14px;
  height: 28px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: $color-background;
  }
}
</style>
