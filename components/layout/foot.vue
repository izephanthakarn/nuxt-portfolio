<template>
  <div class="footer py-2.5 space-y-3 flex flex-col items-center">
    <div class="icon-follow flex justify-center space-x-6 text-3xl -mb-3.5">
      <div class="tooltip">
        <a href="https://www.facebook.com/ize.phanthakarn.5/" target="_blank"
          class="fab fa-facebook-square hover-icon"></a>
          <span class="tooltiptext">Facebook</span>
      </div>
      <div class="tooltip">
        <a href="https://www.instagram.com/jjaoizee/" target="_blank" class="fab fa-instagram-square hover-icon"></a>
        <span class="tooltiptext">Instagram</span>
      </div>
      <div class="tooltip">
        <a href="https://github.com/izephanthakarn" target="_blank" class="fab fa-github-square hover-icon"></a>
        <span class="tooltiptext">Github</span>
      </div>
      <div class="tooltip">
        <a href="https://line.me/ti/p/Gkx0_u2GwJ" target="_blank" class="fab fa-line hover-icon"></a>
        <span class="tooltiptext">Line</span>
      </div>
    </div>
    <div class="line"></div>
    <p class="text-center font-medium">Created by <span class="text-highlight font-semibold">IzePhanthakarn</span> | Copyright <i
        class="far fa-copyright"></i> 2022</p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer {
  color: var(--color);
}

.icon-follow a {
  color: #FFF;
  transition: .3s;
}

.icon-follow a:hover {
  color: var(--color-primary);
}

.line {
  background: var(--color);
  height: .5px;
  width: 98%;
}

.hover-icon {
  background: var(--color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all .2s;
}

.hover-icon:hover {
  background: var(--color-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all .2s;
}
</style>