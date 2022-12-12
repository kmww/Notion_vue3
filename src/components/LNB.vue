<template>
  <nav>
    <div class="header">
      <div class="user-profile"></div>
      Minwoo's Notion
    </div>
    <ul></ul>
    <div class="actions"></div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 240px;
  height: 100%;
  background-color: $color-background;
  .header {
    padding: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    .user-profile {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      margin-right: 10px;
      background-image: url("https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/de31c26ba7904c13b74b2b8150f66e82/b218f4eeacbb489793e1c07869b98545_1649680685.jpg");
      background-size: cover;
    }
  }
  ul {
  }
  .actions {
  }
}
</style>
