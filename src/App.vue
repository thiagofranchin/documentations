<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-3 col-md-2 sidebar">
        <MainMenu />
      </div>
      <div class="col-9 col-md-10 content-pages">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
export default {
  name: 'home',
  components: {
    MainMenu
  }
}
</script>


<style lang="scss" scope>
@import 'scss/style';
.sidebar {
  position: fixed;
  overflow-y: auto;
  height: 100vh;
  padding: 70px 0 60px 20px;
}
.content-pages {
  right: 0;
  position: absolute !important;
}
</style>
