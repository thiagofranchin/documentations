(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c9d3210"],{"05c1":function(e,n,t){},"4eda":function(e,n,t){"use strict";var a=t("cfa6"),o=t.n(a);o.a},"6ea7":function(e,n,t){"use strict";var a=t("05c1"),o=t.n(a);o.a},cfa6:function(e,n,t){},e896:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"gsap"},[t("h1",[e._v("Greensock")]),e._m(0),t("hr"),t("GsapExample"),t("hr"),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),e._m(1),e._v("\n  ")]),t("hr"),t("h3",[e._v("NPM")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),t("code",{staticClass:"json"},[e._v("\n  npm install --save gsap\n    ")]),e._v("\n  ")]),t("h4",[e._v("Usando com Vue.js")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n  import { TweenMax } from 'gsap'\n\n  export default {\n    mounted() {\n      const { box, box2 } = this.$refs\n      const items = document.querySelectorAll('.item')\n\n      TweenMax.set(box, {\n        x: 30,\n        y: -10,\n        opacity: .3\n      })\n\n      TweenMax.from(items, 3, {\n        x: 500,\n        ease: Bounce.easeOut\n      })\n    }\n  }\n    ")]),e._v("\n  ")]),t("h4",[e._v("Template")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),t("code",{staticClass:"javascript"},[e._v('\n  <div ref="box" class="box item"></div>\n  <div ref="box2" class="box2 item"></div>\n    ')]),e._v("\n  ")])],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("small",[t("a",{attrs:{href:"https://greensock-course.willianjusten.com.br/",target:"_blank"}},[e._v("Examples")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("code",{staticClass:"javascript"},[e._v("\n  TweenMax.set(target, { properties })\n  TweenMax.to(target, time, { properties })\n  TweenMax.from(target, time, { properties })\n  TweenMax.fromTo(target, time, { From properties }, { To properties })\n\n  // Delay: tempo em segundos\n  TweenMax.from(target, time, {\n    x: 300,\n    delay: 2\n  })\n\n  "),t("hr",{staticClass:"bg-warning"}),e._v("\n\n  // "),t("small",[e._v("Easings: "),t("a",{attrs:{href:"https://greensock.com/ease-visualizer",target:"_blank"}},[e._v("https://greensock.com/ease-visualizer")])]),e._v(":\n  // { ease: animation }\n  TweenMax.from(target, time, {\n    ease: Bounce.easeOut\n  })\n\n  TweenMax.staggerTo(target, time, { properties }, tempo entre animações)\n  TweenMax.staggerFrom(target, time, { properties }, tempo entre animações)\n  TweenMax.staggerFromTo(target, time, { From properties }, { To properties }, tempo entre animações)\n\n  "),t("hr",{staticClass:"bg-warning"}),e._v("\n\n  // Cycle (Só funciona com stagger)\n  TweenMax.staggerTo(target, time, {\n    cycle: {\n      opacity: [0, 1] // intercala o efeito\n    }\n  }, tempo entre animações)\n\n  "),t("hr",{staticClass:"bg-warning"}),e._v("\n\n  // Loops\n  TweenMax.fromTo(target, time, { From properties },\n  {\n    To properties\n    repeat: n or -1,\n    yoyo: true\n  }, .5)\n\n  "),t("hr",{staticClass:"bg-warning"}),e._v("\n\n  // Callbacks\n  onStart,\n  onUpdate,\n  onComplete,\n  onRepeat\n\n  TweenMax.to(target, time, {\n    x: 600,\n    repeat: 1,\n    onStart: onStart, // Chamando a function onStart\n    function onStart() { console.log('Executa assim que a animação começa') },\n    onUpdate: function() { console.log('Executa a cada passo / atualização da animação') },\n    onComplete: function() { console.log('Executa assim que animação termina') },\n    onRepeat: function() { console.log('Executa assim que a animação repete') },\n  })\n\n  "),t("hr",{staticClass:"bg-warning"}),e._v("\n\n  // Timelines\n  mounted() {\n  const box1 = document.querySelector('.box1')\n  const box2 = document.querySelector('.box2')\n  const box3 = document.querySelector('.box3')\n  const box4 = document.querySelector('.box4')\n  const otherBox1 = document.querySelector('.otherBox1')\n  const otherBox2 = document.querySelector('.otherBox2')\n\n  const tl = new TimelineMax();\n\n  tl.from(box1, 3, {\n    x: 500,\n    opacity: .3\n  })\n  .add('box2Appear', '+=1') // (Label, Tempo)\n  .from(box2, 3, {\n    x: -500,\n    opacity: .3\n  }, '+=1') // delay - Retarda 1s o inicio da animação em relação à anterior\n  .from(box3, 4, {\n    scale: 1,\n    opacity: .3\n  }, '-=1') // overlap - Adianta 1s o inicio da animação em relação à anterior\n  .from(box4, 2, {\n    scale: -1,\n    opacity: .3\n  }, 2) // position absolute: Conta o tempo absoluto (..., 2) para a animação começar\n  .from(otherBox1 , 3, {\n    scale: -1,\n    opacity: .3,\n    x: 400\n  }, 'box2Appear')\n  .from(otherBox2 , 1, {\n    scale: -1,\n    opacity: .3,\n    x: 500\n  }, 5, 'box2Appear+=3')\n}\n\n    ")])}],r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("Testes")]),t("div",{staticClass:"box1"}),t("div",{staticClass:"box2"}),t("div",{staticClass:"box3"}),t("div",{staticClass:"box4"}),t("div",{staticClass:"otherBox1"}),t("div",{staticClass:"otherBox2"})])}],i={mounted:function(){var e=document.querySelector(".box1"),n=document.querySelector(".box2"),t=document.querySelector(".box3"),a=document.querySelector(".box4"),o=document.querySelector(".otherBox1"),r=document.querySelector(".otherBox2"),s=new TimelineMax;s.from(e,3,{x:500,opacity:.3}).add("box2Appear","+=1").from(n,3,{x:-500,opacity:.3},"+=1").from(t,4,{scale:1,opacity:.3},"-=1").from(a,2,{scale:-1,opacity:.3},2).from(o,3,{scale:-1,opacity:.3,x:400},"box2Appear").from(r,1,{scale:-1,opacity:.3,x:500},5,"box2Appear+=3")}},c=i,m=(t("4eda"),t("2877")),l=Object(m["a"])(c,r,s,!1,null,null,null),p=l.exports,u={components:{GsapExample:p}},x=u,g=(t("6ea7"),Object(m["a"])(x,a,o,!1,null,null,null));n["default"]=g.exports}}]);
//# sourceMappingURL=chunk-6c9d3210.6d1c61f9.js.map