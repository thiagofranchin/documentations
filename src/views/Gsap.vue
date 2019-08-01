<template>
  <div class="gsap">
    <h1>Greensock</h1>
    <small><a href="https://greensock-course.willianjusten.com.br/" target="_blank">Examples</a></small>
    <hr>
    <GsapExample />
    <hr>
    <pre v-highlightjs>
      <code class="javascript">
    TweenMax.set(target, { properties })
    TweenMax.to(target, time, { properties })
    TweenMax.from(target, time, { properties })
    TweenMax.fromTo(target, time, { From properties }, { To properties })

    // Delay: tempo em segundos
    TweenMax.from(target, time, {
      x: 300,
      delay: 2
    })

    <hr class="bg-warning">

    // <small>Easings: <a href="https://greensock.com/ease-visualizer" target="_blank">https://greensock.com/ease-visualizer</a></small>:
    // { ease: animation }
    TweenMax.from(target, time, {
      ease: Bounce.easeOut
    })

    TweenMax.staggerTo(target, time, { properties }, tempo entre animações)
    TweenMax.staggerFrom(target, time, { properties }, tempo entre animações)
    TweenMax.staggerFromTo(target, time, { From properties }, { To properties }, tempo entre animações)

    <hr class="bg-warning">

    // Cycle (Só funciona com stagger)
    TweenMax.staggerTo(target, time, {
      cycle: {
        opacity: [0, 1] // intercala o efeito
      }
    }, tempo entre animações)

    <hr class="bg-warning">

    // Loops
    TweenMax.fromTo(target, time, { From properties },
    {
      To properties
      repeat: n or -1,
      yoyo: true
    }, .5)

    <hr class="bg-warning">

    // Callbacks
    onStart,
    onUpdate,
    onComplete,
    onRepeat

    TweenMax.to(target, time, {
      x: 600,
      repeat: 1,
      onStart: onStart, // Chamando a function onStart
      function onStart() { console.log('Executa assim que a animação começa') },
      onUpdate: function() { console.log('Executa a cada passo / atualização da animação') },
      onComplete: function() { console.log('Executa assim que animação termina') },
      onRepeat: function() { console.log('Executa assim que a animação repete') },
    })

    <hr class="bg-warning">

    // Timelines
    mounted() {
    const box1 = document.querySelector('.box1')
    const box2 = document.querySelector('.box2')
    const box3 = document.querySelector('.box3')
    const box4 = document.querySelector('.box4')
    const otherBox1 = document.querySelector('.otherBox1')
    const otherBox2 = document.querySelector('.otherBox2')

    const tl = new TimelineMax();

    tl.from(box1, 3, {
      x: 500,
      opacity: .3
    })
    .add('box2Appear', '+=1') // (Label, Tempo)
    .from(box2, 3, {
      x: -500,
      opacity: .3
    }, '+=1') // delay - Retarda 1s o inicio da animação em relação à anterior
    .from(box3, 4, {
      scale: 1,
      opacity: .3
    }, '-=1') // overlap - Adianta 1s o inicio da animação em relação à anterior
    .from(box4, 2, {
      scale: -1,
      opacity: .3
    }, 2) // position absolute: Conta o tempo absoluto (..., 2) para a animação começar
    .from(otherBox1 , 3, {
      scale: -1,
      opacity: .3,
      x: 400
    }, 'box2Appear')
    .from(otherBox2 , 1, {
      scale: -1,
      opacity: .3,
      x: 500
    }, 5, 'box2Appear+=3')
  }

      </code>
    </pre>


    <hr>

    <h3>NPM</h3>

    <pre v-highlightjs>
      <code class="json">
    npm install --save gsap
      </code>
    </pre>

  <h4>Usando com Vue.js</h4>

    <pre v-highlightjs>
      <code class="javascript">
    import { TweenMax } from 'gsap'

    export default {
      mounted() {
        const { box, box2 } = this.$refs
        const items = document.querySelectorAll('.item')

        TweenMax.set(box, {
          x: 30,
          y: -10,
          opacity: .3
        })

        TweenMax.from(items, 3, {
          x: 500,
          ease: Bounce.easeOut
        })
      }
    }
      </code>
    </pre>

    <h4>Template</h4>

    <pre v-highlightjs>
      <code class="javascript">
    &lt;div ref="box" class="box item"&gt;&lt;/div&gt;
    &lt;div ref="box2" class="box2 item"&gt;&lt;/div&gt;
      </code>
    </pre>

  </div>
</template>

<script>
import GsapExample from '@/components/GsapExample.vue'
export default {
  components: {
    GsapExample
  }
}
</script>

<style lang="scss">
@import '../scss/style';

</style>
