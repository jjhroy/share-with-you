<template>
  <div class="m-auto relative z-10">
    <span class="text-[24px] text-[#2a2a2a] font-semibold">
      {{ typerHandle.output }}
    </span>
    <article class="text-base prose prose-truegray">
      <p> Hi, I’m Roy. </p>
      <p>
        After a year, I’ve finally decided to start my new blog project. Over
        the past year, I changed workplaces, and now there are only two web
        developers, so I’ve had to take on more responsibilities than before.
        It’s also my first time leading a new project, which has been a real
        challenge for me.
      </p>
      <p>
        After a few months, I successfully completed the project, and it has
        been an incredible learning experience. That’s why I’m excited to create
        this blog—to meet new people and share my ideas with them.
      </p>
      <p class="not-prose"> by chatgpt 😂</p>
    </article>
  </div>

  <ClientOnly>
    <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="setOptions" />
  </ClientOnly>
</template>

<script setup>
  // 引入
  import EasyTyper from 'easy-typer-js';
  const typerHandle = ref({
    output: '',
    type: 'normal',
    isEnd: false,
    speed: 80,
    backSpeed: 40,
    sleep: 2000,
    singleBack: true,
    sentencePause: false,
  });

  const particlesLoaded = async (container) => {
    console.log('Particles container loaded', container);
  };
  const setOptions = {
    background: {
      color: {
        value: '#fff',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#000',
      },
      // links: {
      //   color: '#000',
      //   distance: 150,
      //   enable: true,
      //   opacity: 0.5,
      //   width: 1,
      // },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 2 },
      },
    },
    detectRetina: true,
  };

  // 实例化
  onMounted(() => {
    new EasyTyper(
      typerHandle.value,
      `余生岁岁无心事，直向清凉度岁年。`,
      (instance) => {
        instance.input = [`余生岁岁无心事，直向清凉度岁年`];
        instance.play();
      },
      () => {}
    );
  });
</script>

<style scoped>
  .particles-box {
    z-index: -10;
  }
</style>
