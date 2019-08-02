<template>
  <div>
    <h3>GH Pages com Vue</h3>

    <p>Criar uma branch local com o nome de <code>gh-pages</code>.</p>
    <pre v-highlightjs>
      <code class="json">
    $git branch gh-pages
      </code>
    </pre>

    <p>Crie o arquivo <code>vue.config.js</code> dentro da pasta raiz do projeto.</p>

    <p>No arquivo <code>vue.config.js</code> cole o código abaixo:</p>
    <pre v-highlightjs>
      <code class="javascript">
    // vue.config.js
    module.exports = {
      publicPath: 'nome-do-repositorio'
    }
      </code>
    </pre>
    <p>No arquivo <code>.gitignore</code> comente a linha <code>/dist</code>.</p>
    <p>Rode a <code>build</code> do projeto.</p>
    <pre v-highlightjs>
      <code class="json">
    $npm run build
      </code>
    </pre>
    <p>Faça um <code>push</code> da pasta <code>/dist</code> para o repositório <code>gh-pages</code></p>

    <pre v-highlightjs>
      <code class="json">
    $git add dist
    $git commit -m "Initial comments"
    $git subtree push --prefix dist origin gh-pages
      </code>
    </pre>
    <p>No Github, clique em <code>settings</code> e selecione <code>gh-pages</code> e clique em <code>Save</code>.</p>

    <hr>

    <h4>Atualizando</h4>
    <ul>
      <li>Faça um <code>push</code> das alterações para <code>master</code></li>
      <li>Rode a <code>build</code></li>
      <pre v-highlightjs>
        <code class="json">
    $npm run build
        </code>
      </pre>
      <li>Faça um <code>push</code> da pasta <code>/dist</code> para o repositório <code>gh-pages</code></li>
      <pre v-highlightjs>
      <code class="json">
    $git add dist
    $git commit -m "Comments"
    $git subtree push --prefix dist origin gh-pages
        </code>
      </pre>
    </ul>
  </div>
</template>