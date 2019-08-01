<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Sobre">Sobre</router-link></li>
      <li><router-link to="/cursos">Cursos</router-link></li>
      <li><router-link to="/axios-and-vue">Axios And Vue</router-link></li>
      <li><router-link to="/fontawesome">Fontawesome</router-link></li>
      <li><router-link to="/ghpages">GH Pages</router-link></li>
      <li><router-link to="/gsap">Greensock</router-link></li>
      <li><router-link to="/highlightjs">Highlight.js</router-link></li>
      <li><router-link to="/storybook">Storybook</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scope>
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  ul {
    padding-inline-start: 0px;

    li {
      list-style-type: none;

      a {
        text-decoration: none;
        &:hover {
          color: #42b983;
        }
      }
    }
  }
}
</style>
