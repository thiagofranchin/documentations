<template>
  <div>
    <h3>Testes</h3>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="otherBox1"></div>
    <div class="otherBox2"></div>
    <!-- <div ref="box2" class="box2"></div> -->
  </div>
</template>

<script>
export default {
  mounted() {
    const box1 = document.querySelector('.box1')
    const box2 = document.querySelector('.box2')
    const box3 = document.querySelector('.box3')
    const box4 = document.querySelector('.box4')
    const otherBox1 = document.querySelector('.otherBox1')
    const otherBox2 = document.querySelector('.otherBox2')

    // eslint-disable-next-line no-undef
    const tl = new TimelineMax();

    tl.from(box1, 3, {
      x: -100,
    })
    .add('box2Appear', '+=1') // (Label, Tempo)
    .from(box2, 3, {
      x: 100
    }, '+=1') // delay - Retarda 1s o inicio da animação em relação à anterior
    .from(box3, 3, {
      x: 200
    }, '-=1') // overlap - Adianta 1s o inicio da animação em relação à anterior
    .from(box4, 3, {
      x: 300
    }, 2) // position absolute: Conta o tempo absoluto (..., 2) para a animação começar
    .from(otherBox1 , 3, {
      x: 400
    }, 'box2Appear')
    .from(otherBox2 , 3, {
      x: 500
    }, 5, 'box2Appear+=3')
  }
}
</script>


<style>
.box1 {
  margin: 30px 0;
  background: red;
  width: 100px;
  height: 100px;
}
.box2 {
  margin: 30px 0;
  background: blue;
  width: 100px;
  height: 100px;
}
.box3 {
  margin: 30px 0;
  background: green;
  width: 100px;
  height: 100px;
}
.box4 {
  margin: 30px 0;
  background: orange;
  width: 100px;
  height: 100px;
}
.otherBox1 {
  margin: 30px 0;
  background: pink;
  width: 100px;
  height: 100px;
}
.otherBox2 {
  margin: 30px 0;
  background: brown;
  width: 100px;
  height: 100px;
}
</style>