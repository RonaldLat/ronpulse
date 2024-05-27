import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Bounce from 'gsap/EasePack';
import { SlowMo } from 'gsap/EasePack';

gsap.registerPlugin(ScrollTrigger);

Bounce;

export function scrowlly(node) {
  let tl;
  gsap.from(node, {
    scrollTrigger: node,
    x: 500
  });

  return {
    destroy() {
      tl = null;
    }
  };
}
export function example(node) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: node,
      start: 'bottom 80%',
      end: `+=${node.offsetHeight}`
      // scrub: 2
    },
    onComplete: tweenComplete
  });
  tl.from(node, { x: 600, duration: 1 }, '<');
  tl.from(node, { opacity: 0, duration: 2 }, '<');

  function tweenComplete() {
    node.dispatchEvent(new CustomEvent('tweenComplete'));
  }

  return {
    destroy() {
      tl = null;
    }
  };
}
//from down
export function gFromDown(node) {
  let tl = gsap.timeline({
    onComplete: tweenComplete
  });
  const duration = 1;

  tl.from(node, {
    duration,
    opacity: 0,
    ease: SlowMo,
    scrub: 2
  }).from(
    node,
    {
      duration,
      yPercent: 50,
      //rotation: -90,
      ease: 'stepped'
    },
    `-=${duration * 0.75}`
  );

  function tweenComplete() {
    node.dispatchEvent(new CustomEvent('tweenComplete'));
  }

  return {
    destroy() {
      tl = null;
    }
  };
}
// fade
export function gFade(node) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: node,
      start: 10,
      end: `+=${node.offsetHeight}`,
      scrub: 2
      //markers: true
    },
    onComplete: tweenComplete
  });
  tl.from(node, { opacity: 0, duration: 2 }, '<');

  function tweenComplete() {
    node.dispatchEvent(new CustomEvent('tweenComplete'));
  }

  return {
    destroy() {
      tl = null;
    }
  };
}

// horizontal
