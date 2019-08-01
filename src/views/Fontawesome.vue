<template>
  <div class="fontawesome">
    <h1>Como instalar font-awesome no Vue</h1>

    <p>
      <small>
        Ref:
        <a href="https://fontawesome.com" target="_blank">
          https://fontawesome.com
        </a>
      </small>
    </p>

    <h3 class="text-success">Usando Plugin</h3>
    <h5 class="text-info">package.json</h5>

    <pre v-highlightjs>
      <code class="json">
    npm i --save @fortawesome/fontawesome-svg-core
    npm i --save @fortawesome/free-brands-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/vue-fontawesome
      </code>
    </pre>

    <h5 class="text-info">plugins/fontawesome.js</h5>
    <pre v-highlightjs>
      <code class="javascript">
    import Vue from 'vue'

    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fab } from '@fortawesome/free-brands-svg-icons'
    import { far } from '@fortawesome/free-regular-svg-icons'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(fab, far, fas)

    Vue.component('font-awesome-icon', FontAwesomeIcon)
      </code>
    </pre>

    <h5 class="text-info">main.js</h5>
    <pre  v-highlightjs>
      <code class="javascript">
    import './plugins/fontawesome'
      </code>
    </pre>

    <h3 class="text-scss">Usando SCSS</h3>
    <h5 class="text-info">package.json</h5>
    <pre v-highlightjs>
      <code class="json">
    npm i --save @fortawesome/fontawesome-free-webfonts
      </code>
    </pre>

    <h5 class="text-info">_fontawsome.scss</h5>

    <pre v-highlightjs>
      <code class="scss">
    $fa-font-path : "~@fortawesome/fontawesome-free-webfonts/webfonts";
    @import "~@fortawesome/fontawesome-free-webfonts/scss/fontawesome.scss";
    @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-solid.scss";
    @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-regular.scss";
    @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-brands.scss";
      </code>
    </pre>

    <h3 class="text-warning">Exemplo de Uso</h3>

    <pre v-highlightjs>
      <code>
        <span class="text-scss">SCSS</span>   <i class="fas fa-check-circle"></i> &lt;i class="fas fa-check-circle"&gt;&lt;/i&gt;
        <span class="text-success">Plugin</span> <font-awesome-icon :icon="['fas', 'check-circle']" /> &lt;font-awesome-icon :icon="['fas', 'check-circle']" /&gt;
      </code>
    </pre>
    <pre v-highlightjs>
      <code>
        <span class="text-scss">SCSS</span>   <i class="far fa-check-circle"></i> &lt;i class="far fa-check-circle"&gt;&lt;/i&gt;
        <span class="text-success">Plugin</span> <font-awesome-icon :icon="['far', 'check-circle']" /> &lt;font-awesome-icon :icon="['far', 'check-circle']" /&gt;
      </code>
    </pre>
    <pre v-highlightjs>
      <code>
        <span class="text-scss">SCSS</span>   <i class="fab fa-facebook-f"></i> &lt;i class="fab fa-facebook-f"&gt;&lt;/i&gt;
        <span class="text-success">Plugin</span> <font-awesome-icon :icon="['fab', 'facebook-f']" /> &lt;font-awesome-icon :icon="['fab', 'facebook-f']" /&gt;
      </code>
    </pre>
    <pre v-highlightjs>
      <code>
        <span class="text-scss">SCSS</span>   <i class="fab fa-facebook-square"></i> &lt;i class="fab fa-facebook-square"&gt;&lt;/i&gt;
        <span class="text-success">Plugin</span> <font-awesome-icon :icon="['fab', 'facebook-square']" /> &lt;font-awesome-icon :icon="['fab', 'facebook-square']" /&gt;
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'fontawesome',
}
</script>

<style lang="scss">
@import '../scss/style';
.text-scss {
  color: hotpink;
}
</style>