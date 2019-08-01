<template>
  <div class="gsap">
    <h1>Greensock</h1>
    <div ref="box" class="box"></div>

    <h3>NPM</h3>

    <pre v-highlightjs>
      <code class="json">
    npm install --save gsap
      </code>
    </pre>

  </div>
</template>

<script>
import { TweenMax, TimelineLite, Back } from 'gsap'

export default {
  mounted() {
    const { box } = this.$refs
    const timeline = new TimelineLite()

    timeline.to(box, 1, {
      x: 200,
      rotation: 90,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(box, 0.5, {
      background: 'green'
    },
    '-=0.5' // Run the animation 0.5s early
    )
  }
}
</script>

<style>
.box {
  margin: 30px 0;
  background: red;
  width: 100px;
  height: 100px;
}
</style>