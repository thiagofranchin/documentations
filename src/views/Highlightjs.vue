<template>
  <div class="highlightjs">
    <h1>Highlight.js</h1>
    <p>
      <small>
        Ref:
        <a href="https://www.npmjs.com/package/vue-highlightjs" target="_blank">
          https://www.npmjs.com/package/vue-highlightjs
        </a>
      </small>
    </p>

    <h3>NPM</h3>

    <pre v-highlightjs>
      <code class="json">
    npm install --save vue-highlightjs
      </code>
    </pre>

    <h3>Usando vue-highlightjs</h3>
    <p>Adicione o código abaixo dentro do seu arquivo <code>main.js</code></p>
    <pre v-highlightjs>
      <code class="javascript">
    // Import Vue and vue-highlgihtjs
    import Vue from 'vue'
    import VueHighlightJS from 'vue-highlightjs'

    // Tell Vue.js to use vue-highlightjs
    Vue.use(VueHighlightJS)
      </code>
    </pre>

    <p>Dentro do seu template use como no exemplo abaixo escolhendo a linguagem</p>
    <pre v-highlightjs>
      <code class="html">
    &lt;pre v-highlightjs&gt;
      &lt;code class="javascript"&gt;
        const s = new Date().toString()
      &lt;/code&gt;
    &lt;/pre&gt;
      </code>
    </pre>

    <h3 class="">SCSS</h3>
    <p>
      Escolha um estilo em:
      <small>
        <a href="https://highlightjs.org/static/demo/" target="_blank">
          https://highlightjs.org/static/demo/
        </a>
      </small>
    </p>

    <pre v-highlightjs>
      <code class="scss">
    @import '~highlight.js/styles/monokai-sublime.css';
      </code>
    </pre>

  </div>
</template>