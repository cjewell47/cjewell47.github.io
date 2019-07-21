<template>
  <div :class="'project-' + project.code" @click="$emit('read-more', project.code)">
    <img :src="project.img1">
    <img :src="project.img2">
    <div>
      <p>
        <span>Read more</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectImage',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@mixin mobile {
  @media screen and (max-width: 767px) { @content; }
}

[class^="project-"] {
  position: relative;
  height: 170px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;
  img {
    height: 170px;
    position: absolute;
    transition: opacity 0.5s ease-in-out;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    &:nth-of-type(2) {
      opacity: 0;
      &:hover ~ div, & ~ div:hover {
        opacity: 1;
        top: 70px;
        left: 20px;
        border-radius: 0.2em;
      }
    }
  }
  &:hover > img:nth-of-type(2) {
    opacity: 1;
  }
  & > div {
    width: 120px;
    background-color: rgba(255,255,255,0.9);
    border: 1px solid #000;
    color: #000;
    position: absolute;
    text-align: center;
    z-index: 2;
    top: 105px;
    opacity: 0;
    transform: rotate(45deg);
    left: -15px;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    cursor: pointer;
    p {
      margin: 12px auto;
      font-weight: 400;
      font-size: 1em;
    }
    a,
    span {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &.highlighted {
    z-index: 4;
    img:nth-of-type(2) {
      opacity: 1;
      &:hover ~ div {
        opacity: 0;
        top: 190px;
      }
    }
  }
  @include mobile {
    height: 250px;
    width: 250px;
    img {
      height: 250px;
      & ~ div {
        display: none;
      }
    }
  }
}
</style>
